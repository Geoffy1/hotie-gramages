import React from "react";
import { motion } from 'framer-motion';


const modal = ({ selectedImg, setSelectedImg }) => {


    const handlesClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }

    }

    return (
        <motion.div className="backdrop" onClick={handlesClick}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
        >
            <motion.img src={selectedImg} alt="zoomed pic"
                initial={{ y: '-100vh' }}
                animate={{ y: 0 }}
            />
        </motion.div>
    )
}

export default modal;