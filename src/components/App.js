import React from 'react';
import socketio from 'socket.io-client';
import { Form } from './chatForm';

const socket = socketio.connect('http://localhost:3005');

const App = () => {
  const [logs, setLogs] = useState({ logs: [] });

  useEffect(() => {
    socket.on('chatMessage', (obj) => {
      const logs2 = logs;
      obj.key = 'key_' + (logs.length + 1);
      console.log(obj);
      logs.unshift(obj);
      setLogs({ logs: logs2 });
    });
  }, []);

  const messages = logs.map((e) => {
    <div key={e.key}>
      <span>{e.name}</span>
      <span>{e.message}</span>
      <p />
    </div>;
  });
  return (
    <div>
      <h1 id="title">React Chat</h1>
      <Form />
      <div id="log">{messages}</div>
    </div>
  );
};

export default App;
