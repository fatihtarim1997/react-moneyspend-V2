import { useEffect,useState,useRef } from "react";
import {db} from '../firebase/config'
import {collection,onSnapshot,query,where} from 'firebase/firestore'

export const useCollection = (collectionName,_query,) => {
const [documents,setDocuments]=useState([]);
const [error,setError]=useState(null);

const q=useRef(_query).current;

useEffect(()=>{
    let ref=collection(db,collectionName);
    if(q){
        ref=query(ref,where(...q))
    }

    const unsub=onSnapshot(ref,(snapshot)=>{
        let documents=[];
        snapshot.forEach(doc=>{
            documents.push({...doc.data(),id:doc.id})
        })
        setDocuments(documents);
        setError(null)
    },(err)=>{
        setError(err.message)
        
    }
    )
    return ()=>unsub();
},[collectionName])
return {documents,error}
}