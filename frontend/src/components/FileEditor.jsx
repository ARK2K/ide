import React, { useState } from 'react';

const FileEditor = ({ onSave }) => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');

    const handleSave = () => {
        onSave({ name, content });
    };

    return (
        <div>
            <input
                type="text"
                placeholder="File Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <textarea
                placeholder="Write your code..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={handleSave}>Save File</button>
        </div>
    );
};

export default FileEditor;
