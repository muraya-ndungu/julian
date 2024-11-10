import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function TimeCapsulePage() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    await addDoc(collection(db, 'timeCapsule'), {
      name,
      message,
      timestamp: new Date().toISOString(),
    });

    setName('');
    setMessage('');
    alert('Your message has been saved for the future!');
  };

  return (
    <div className="time-capsule">
      <h2>Leave a Message for the Future</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="input"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your message to the future"
        className="textarea"
      ></textarea>
      <button onClick={handleSubmit} className="submit-button">
        Save Message
      </button>
    </div>
  );
}

export default TimeCapsulePage;
