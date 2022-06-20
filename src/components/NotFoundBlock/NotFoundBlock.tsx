import React from 'react';
import {Header} from "../Header/Header";
import styles from './NotFoundBlock.module.css'
const NotFoundBlock = () => {
    return (
        <div className={styles.description}>
            <span className={styles.smile}>&#128577;</span>
            <h3>Puslapis ne rastas</h3>
        </div>
    );
};

export default NotFoundBlock;