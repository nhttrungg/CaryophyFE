import { initializeApp } from "firebase/app";
import { getStorage,ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAewhdQuJuOebuT8PqvOvV_izJSMOvfSFQ",
    authDomain: "demofirebase-6e7a1.firebaseapp.com",
    projectId: "demofirebase-6e7a1",
    storageBucket: "demofirebase-6e7a1.appspot.com",
    messagingSenderId: "600682198593",
    appId: "1:600682198593:web:e88c7a4373648fabc3b8c0",
    measurementId: "G-DLSK3MYRFK"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };

export const uploadFile = async (file, path = "uploads") => {
    if (!file) throw new Error("No file provided");
    const storageRef = ref(storage, `${path}/${Date.now()}_${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
};