import { useState, useEffect } from 'react';
import { getFirestore, collection, query, orderBy, onSnapshot } from 'firebase/firestore'; // Import Firestore functions

const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const db = getFirestore(); // Get Firestore instance
    const q = query(collection(db, collectionName), orderBy('createdAt', 'desc')); // Create a Firestore query

    const unsub = onSnapshot(q, (snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });
      setDocs(documents);
    });

    return () => unsub();
    // This is a cleanup function that React will run when
    // a component using the hook unmounts
  }, [collectionName]);

  return { docs };
};

export default useFirestore;