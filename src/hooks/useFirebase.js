import axios from "axios";
import {
  createUserWithEmailAndPassword, getAuth,
  GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import initializeFirebase from "../components/authentication/Firebase/Firebase.init";

// initialize fireabse
initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [success, setSuccess] = useState("");
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  // sign in with google
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = (location, navigate) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // sending user to database
        const user = result.user;

        // sending to database
        saveUser(user.email, user.displayName, "PUT");
        swal("Good Job!", "Sign in with google successfully!", "success")
        // redirect to the page
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        const errorMessage = error.message;
        swal("Oops!", `${errorMessage}`, "error")
        setUser({});
      })
      .finally(() => setLoading(false));
    };
    
    // register an user
    const registerUser = (email, password, name, navigate) => {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sendEmailVerification(auth.currentUser).then(() => {
          // Email verification sent!
        });
        alert("Email sent please verify!");
        const newUser = { email, displayName: name };
        setUser(newUser);
        
        // send user to database
        saveUser(email, name, "POST");
        // after creating an user we have to send data to firebase.
        updateProfile(auth.currentUser, {
          displayName: name,
        })
        .then(() => {})
        .catch((error) => {
          swal("Oops!", `${error.message}`, "error");
        });
        
        
        swal("Good Job!", "Sign in with Email successfully!", "success")
        navigate("/");
      })
      .catch((error) => {
        swal("Oops!", `${error.message}`, "error");
        setUser({});
      })
      .finally(() => setLoading(false));
    };
    
    // login an user
    const loginUser = (email, password, location, navigate) => {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        swal("Good Job!", "Your login successfully!", "success")
      })
      .catch((error) => {
        swal("Oops!", `${error.message}`, "error");
        setUser({});
      })
      .finally(() => setLoading(false));
  };

  // logout
  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
      .finally(() => setLoading(false));
  };

  // save user to database
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://fierce-escarpment-92507.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  // get admin from database
  useEffect(() => {
    axios.get(`https://fierce-escarpment-92507.herokuapp.com/user/${user.email}`).then((res) => {
      setAdmin(res.data.admin);
    });
  }, [user.email]);

  //observe current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  //
  return {
    user,
    admin,
    signInWithGoogle,
    registerUser,
    loginUser,
    logOut,
    loading,
    authError,
    success,
  };
};

export default useFirebase;
