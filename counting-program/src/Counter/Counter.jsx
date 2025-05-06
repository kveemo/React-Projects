import React, {useState} from "react";
import styles from './Counter.module.css';
function Button() {
    return(
        <div className={styles.buttonContainer}>
            <button className = {styles.decrementButton}>Decrement</button>
            <button className = {styles.resetButton}>Reset</button>
            <button className = {styles.incrementButton}>Increment</button>
        </div>
    );
}

export default Button