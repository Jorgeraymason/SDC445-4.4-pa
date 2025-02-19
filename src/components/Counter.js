import React, { useState } from 'react';

const Button = () => {
    const [clicks, setClicks] = useState(0);

    const handleIncrement = () => { setClicks(clicks + 1); };

    const handleIncrementBy2 = () => { setClicks(clicks + 2); };

    const handleDecrement = () => { setClicks(clicks - 1); };

    const handleDecrementBy2 = () => { setClicks(clicks - 2); };


    return (<div> 
        {/* Updated the buttons to have an increment and decrement by 2 option. Below are the Increment Buttons */}
        
        <button onClick={handleIncrement}>Increment by 1</button>

        <button onClick={handleIncrementBy2}>Increment by 2</button>

        
        {/*Decrement Buttons*/}

        <button onClick={handleDecrement}>Decrement by 1</button>

        <button onClick={handleDecrementBy2}>Decrement by 2</button>

        <p>Number of Clicks: {clicks}</p> </div>);
}

export default Button;