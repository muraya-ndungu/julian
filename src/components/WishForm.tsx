import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function WishForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addDoc(collection(db, 'wishes'), {
      name,
      message,
      createdAt: new Date(),
    });
    setName('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="wish-form">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Your Birthday Wish"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">Submit Wish</button>
    </form>
  );
}

export default WishForm;
