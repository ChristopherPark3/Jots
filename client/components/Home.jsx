import React, { Component } from 'react';
import { motion } from 'framer-motion';

const Home = props => {
    return (
        <div className="home-page">
            <motion.h1 initial={{ opacity: 0, scale: 0.5}} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }}>Ever forget to journal?</motion.h1>
            <motion.h1 initial={{ opacity: 0, scale: 0.5}} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 3 }}>Ever just feel like not writing with a pen?</motion.h1>
            <motion.h1 initial={{ opacity: 0, scale: 0.5}} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 5 }}>Ever just not have a journal to even journal in?</motion.h1>
            <motion.h1 initial={{ opacity: 0, scale: 0.5}} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 7 }}>Well</motion.h1>
            <motion.h1 initial={{ opacity: 0, scale: 0.5}} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 9 }}>Now you can journal from the comfort of your own phone</motion.h1>
            <motion.h1 initial={{ opacity: 0, scale: 0.5}} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 11 }}>In an organized way </motion.h1>
            <motion.h1 initial={{ opacity: 0, scale: 0.5}} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 13 }}>:)</motion.h1>
        </div>

    )
}

export default Home;