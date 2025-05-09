import React, {useState} from "react";
import styles from './Counter.module.css';

function Counter() {

    const [value, setValue] = useState(0);

    const decrementValue = () => {
        setValue(prevValue => prevValue-1);
    }

    const resetValue = () => {
        setValue(0);
    }

    const incrementValue = () => {
        setValue(prevValue => prevValue+1);
    }
    
    return(
        <div>
            <p className={styles.value}>
                {value}
            </p>
            <div className={styles.buttonContainer}>

                <button onClick = {decrementValue} 
                    className = {styles.decrementButton}>Decrement</button>

                <button onClick = {resetValue} 
                    className = {styles.resetButton}>Reset</button>

                <button onClick = {incrementValue} 
                    className = {styles.incrementButton}>Increment</button>
            </div>
        </div>
    );
}

export default Counter