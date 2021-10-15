import React from 'react';
import socketio from 'socket.io-client';

const socket = socketio.connect('http//localhost:3005');

export const Form = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const send = () => {
    socket.emit('chatMessage', {
      name: name,
      message: message,
    });
    setMessage('');
  };
  return (
    <div id="Form">
      <div className="Name">
        Name: <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <br />
      <div className="Message">
        Message: <br />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button className="send" onClick={send}>
        Submit
      </button>
    </div>
  );
};
