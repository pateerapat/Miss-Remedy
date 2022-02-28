import { initializeApp } from "firebase/app";
import {
  getFirestore,
  setDoc,
  doc,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBLrkTqfQVyUr6ENTNmCKOMH3efKrugaI",
  authDomain: "miss-remedy.firebaseapp.com",
  projectId: "miss-remedy",
  storageBucket: "miss-remedy.appspot.com",
  messagingSenderId: "563200359979",
  appId: "1:563200359979:web:294ccba3356c572c0bb46e",
  measurementId: "G-4T8K5KR5PP"
};

initializeApp(firebaseConfig);

const firestore = getFirestore();

export const db = getFirestore();

export async function addChat(text, index, indexer, type) {
  try {
    if (text == "") {
      console.log("no data");
    } else {
      const docRef = await setDoc(doc(firestore, "UserChat", "1", indexer, index+""), {
        text,
        type
      });
      console.log("Document written with ID: "+index);
    }
  } catch (err) {
    console.log("Error addText", err);
  }
}

export async function getChat() {
  try {
    const querySnapshot = await getDocs(collection(firestore, "UserChat", "1", "People01"));
    let dataList = [];
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`)
      dataList.push({ ...doc.data(), id: doc.id });
    });
    // console.log(dataList)
    return dataList;
  } catch (err) {
    console.log("Error get Chat", err);
  }
}

export async function addUser(hnid, password, id, name, surname, hospital, address) {
  try {
    if (hnid == "" || password == "" || id == "" || name == "" ||surname == "") {
      console.log("no data");
    } else {
      const docRef = await addDoc(collection(firestore, "UserInfo"), {
        name,
        surname,
        id,
        hospital,
        hnid,
        password,
        address
      });
      console.log("Document written with ID: ");
    }
  } catch (err) {
    console.log("Error addText", err);
  }
}

export async function addPharmacist(pharId, password, id, name, surname, address, shopName) {
  try {
    if (pharId == "" || password == "" || id == "" || name == "" ||surname == "") {
      console.log("no data");
    } else {
      const docRef = await addDoc(collection(firestore, "PharmacistInfo"), {
        name,
        surname,
        id,
        pharId,
        password,
        address,
        shopName
      });
      console.log("Document written with ID: ");
    }
  } catch (err) {
    console.log("Error addText", err);
  }
}
