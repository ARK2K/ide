import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FileEditor from './components/FileEditor';

const App = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchFiles = async () => {
            const { data } = await axios.get('/api/files');
            setFiles(data);
        };
        fetchFiles();
    }, []);

    const handleSave = async (file) => {
        await axios.post('/api/files', file);
        // Refresh file list
        const { data } = await axios.get('/api/files');
        setFiles(data);
    };

    return (
        <div>
            <h1>Mobile IDE</h1>
            <FileEditor onSave={handleSave} />
            <ul>
                {files.map(file => (
                    <li key={file._id}>{file.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
