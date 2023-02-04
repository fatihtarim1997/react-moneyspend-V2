import { useEffect, useState, useReducer } from "react";
import { db } from "../firebase/config";

import { collection, addDoc, serverTimestamp,doc,deleteDoc } from "firebase/firestore";

const initialValue = {
  doc: null,
  loading: false,
  error: null,
  success: null,
};
const fireStoreReducer = (state, action) => {
  switch (action.type) {
    case "WAIT":
      return { hata: null, doc: null, loading: true, success: null };
    case "SUCCESS":
      return { hata: null, doc: action.payload, loading: false, success: true };
    case "ERROR":
      return { ...state, loading: false, error: action.payload };
    case "DELETE":
      return { ...state, loading: false, error: action.payload };  
    default:
      return state;
  }
};

export const useFireStore = (col) => {
  const [response, dispatch] = useReducer(fireStoreReducer, initialValue);
  const ref = collection(db, col);

  const addDocument = async (doc) => {
    dispatch({ type: "WAIT" });
    try {
      const createTimestamp = serverTimestamp();
      const docRef = await addDoc(ref, { ...doc, createTimestamp });
      dispatch({ type: "SUCCESS", payload: docRef });
    } catch (error) {
      console.log(error.message);
      dispatch({ type: "ERROR", payload: error.message });
    }
  };
  const deleteDocument = async (id) => {
    dispatch({ type: "WAIT" });
    try {
        let ref=doc(db,col,id);
        await deleteDoc(ref);
      dispatch({ type: "DELETE", payload: id });
    } catch (error) {
      console.log(error.message);
      dispatch({ type: "ERROR", payload: error.message });
    }
  };
  useEffect(() => {
    return () => {};
  }, []);
  return { response, addDocument, deleteDocument };
};
