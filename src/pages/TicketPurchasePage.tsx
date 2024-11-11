import { useState } from 'react';
import { FaTicketAlt } from 'react-icons/fa';

function TicketPurchasePage() {
  // Define ticketType with a union type of the valid ticket values ('100', '200', '500', etc.)
  const [ticketType, setTicketType] = useState<'100' | '200' | '500' | '1000' | '10000'>('200'); // Default to General Ticket

  // Payment links mapped by ticket price
  const paymentLinks: { [key in '100' | '200' | '500' | '1000' | '10000']: string } = {
    '100': 'https://payment.intasend.com/pay/9a08aec7-a59b-4b87-972d-5a8911ea8142/',
    '200': 'https://payment.intasend.com/pay/7565f265-647b-4e18-8ddf-3147eaf878c8/',
    '500': 'https://payment.intasend.com/pay/93b367db-9695-4352-8468-584f10c0aa68/',
    '1000': 'https://payment.intasend.com/pay/20f8d627-d1ec-463d-b509-c10bfe0fa46e/',
    '10000': 'https://payment.intasend.com/pay/2eaaf8fc-eb78-4b24-b2d0-a06d803316c3/',
  };

  // Handle purchase by redirecting to the appropriate payment link
  const handlePurchase = () => {
    const paymentLink = paymentLinks[ticketType];
    if (paymentLink) {
      window.location.href = paymentLink;
    } else {
      alert('Payment link not available');
    }
  };

  return (
    <div className="ticket-purchase max-w-md mx-auto p-6 bg-gradient-to-br from-yellow-100 to-orange-200 rounded-lg shadow-2xl text-center">
      <h2 className="text-3xl font-extrabold mb-4 text-orange-800">
        🎉 Buy a Ticket 🎟️
      </h2>
      <p className="mb-6 text-lg text-gray-700">Celebrate with us! Select your ticket type below and join the fun!</p>

      <div className="text-yellow-600 flex justify-center items-center space-x-2 mb-4">
        <FaTicketAlt size={24} />
        <select
          value={ticketType}
          onChange={(e) => setTicketType(e.target.value as '100' | '200' | '500' | '1000' | '10000')} // Type assertion for ticketType
          className="ticket-select w-full p-2 bg-white border border-orange-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="200">🎈 General Ticket - 200 Ksh</option>
          <option value="500">🎉 VIP Ticket - 500 Ksh</option>
          <option value="1000">🥳 VVIP Ticket - 1000 Ksh</option>
        </select>
      </div>

      <button
        onClick={handlePurchase}
        className="purchase-button w-full bg-orange-500 text-white p-3 rounded-lg font-bold text-lg hover:bg-orange-600 transition relative overflow-hidden"
      >
        <span className="relative z-10">🎊 Purchase Ticket 🎊</span>
        <div className="absolute inset-0 bg-yellow-400 opacity-0 hover:opacity-20 transition-transform transform scale-105 rounded-lg mix-blend-screen animate-pulse"></div>
      </button>
    </div>
  );
}

export default TicketPurchasePage;
