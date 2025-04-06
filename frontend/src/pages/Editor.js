import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { io } from 'socket.io-client';
import { ThemeContext } from '../context/ThemeContext';

const CodeEditor = () => {
  const { roomId } = useParams();
  const { isDarkMode } = React.useContext(ThemeContext);
  const [code, setCode] = useState('');
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(process.env.REACT_APP_SERVER_URL || 'http://localhost:5000');

    socketRef.current.emit('join-room', roomId);

    socketRef.current.on('code-update', (data) => {
      if (data.roomId === roomId) {
        setCode(data.code);
      }
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  const handleEditorChange = (value) => {
    setCode(value);
    socketRef.current.emit('code-change', {
      roomId,
      code: value
    });
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          theme={isDarkMode ? 'vs-dark' : 'light'}
          value={code}
          onChange={handleEditorChange}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: 'on',
            automaticLayout: true
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor; 