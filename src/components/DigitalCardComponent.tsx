import { useState } from 'react';

function DigitalCardComponent() {
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('#FFDDC1');

  const handleSendCard = () => {
    alert('Digital card sent!');
    setMessage('');
  };

  return (
    <div className="digital-card">
      <h3>Design Your Digital Card</h3>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
        className="card-message"
      ></textarea>
      <label>Choose Background Color:</label>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="color-picker"
      />
      <button onClick={handleSendCard}>Send Card</button>
    </div>
  );
}

export default DigitalCardComponent;
