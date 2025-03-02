import { doc, onSnapshot } from "firebase/firestore"
import { getFirestoreDB } from "../config/firebase.config"

export const sendToFireBase = () =>{

}

export const getFromFirebase = async(path: string) =>{
    const db = await getFirestoreDB()
    const docRef = doc(db, path) 
}
export const subscribeToFireStore = async(path: string, cb: Function)=>{
    const db = await getFirestoreDB()
    const docRef = doc(db, path) 
    onSnapshot(docRef, cb)


}


export const updateDoc = async(path: string, cb: Function)=>{
    const db = await getFirestoreDB()
    const docRef = doc(db, path)
}