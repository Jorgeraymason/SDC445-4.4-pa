import React, { useState } from 'react';

function TextForum() {
    const [text, setText] = useState("");
    const handleChange = (e) => { setText(e.target.value); }

    return (
        <div>
            <h1>Text: {text}</h1>  
        
            <input type="text" placeholder="Enter Text Here" onChange={handleChange} value={text} />

        </div>
    )
}


export default TextForum;