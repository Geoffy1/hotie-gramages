import React, { useEffect } from "react"; // Import useState
import useStorage from "../hooks/useStorage";
import { motion } from 'framer-motion';

import { projectStorage, projectFirestore, timestamp } from "../firebase/config"; // Import Firebase config

const ProgressBar = ({ file, setFile }) => {
    const  { url, progress, setError, setProgress, setUrl } = useStorage(file); // Destructure values from useStorage

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile]);
    
    useEffect(() => {
        if (file) { // Check if file is not null
            const storageRef = projectStorage.ref(file.name);
            const collectionRef = projectFirestore.collection('images');

            storageRef.put(file).on('state_changed', (snap) => {
                let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
                setProgress(percentage);
            }, (err) => {
                setError(err);
            }, async () => {
                const url = await storageRef.getDownloadURL();
                const createdAt = timestamp();
                collectionRef.add({ url, createdAt });
                setUrl(url);
            });
        }
    }, [file, setProgress, setError, setUrl]); // Include missing dependencies

    return (
        <motion.div className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}
        ></motion.div>
    );
}

export default ProgressBar;
