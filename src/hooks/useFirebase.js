import axios from "axios";
import {
  createUserWithEmailAndPassword, getAuth,
  GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
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

        // redirect to the page
        const destination = location?.state?.from || "/";
        navigate(destination);
        setAuthError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
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
          .catch((error) => {});

        setAuthError("");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
        setSuccess("");
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

        setAuthError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
        setSuccess("");
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
    fetch("http://localhost:8000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  // get admin from database
  useEffect(() => {
    axios.get(`http://localhost:8000/user/${user.email}`).then((res) => {
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
