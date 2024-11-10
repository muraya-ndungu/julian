import { useState } from 'react';

// Static Data with Image Paths
const giftItems = [
  { id: 1, name: 'Toy Car', price: 200, displayPrice: '200 KSh', imageUrl: '/src/assets/car.png' },
  { id: 2, name: 'Story Book', price: 500, displayPrice: '500 KSh', imageUrl: '/src/assets/storybook.png' },
  { id: 3, name: 'Birthday Outfit', price: 1000, displayPrice: '1000 KSh', imageUrl: '/src/assets/outfit.png' },
  { id: 4, name: 'Lego Set', price: 100, displayPrice: '100 KSh', imageUrl: '/src/assets/legoset.png' },
  { id: 5, name: 'Smart Watch', price: 500, displayPrice: '500 KSh', imageUrl: '/src/assets/smartwatch.png' },
  { id: 6, name: 'Bicycle', price: 5000, displayPrice: '5000 KSh', imageUrl: '/src/assets/bicycle.png' },
  { id: 7, name: 'Smart Toy', price: 10000, displayPrice: '10000 KSh', imageUrl: '/src/assets/jettoy.png' },
  { id: 8, name: 'Sweet', price: 10, displayPrice: '10 KSh', imageUrl: '/src/assets/sweets.png' },
  { id: 9, name: 'Cake', price: 20, displayPrice: '20 KSh', imageUrl: '/src/assets/cake.png' },
  { id: 10, name: 'Yoghurt', price: 50, displayPrice: '50 KSh', imageUrl: '/src/assets/yoghurt.png' },
];

// Payment Links by Price
const giftLinks = {
  10: 'https://payment.intasend.com/pay/6c98b103-7982-4157-8893-24a1aee23ef5/',
  20: 'https://payment.intasend.com/pay/0cb96d4e-4cd3-4108-bf3d-993502151e0e/',
  50: 'https://payment.intasend.com/pay/1e18a5c7-21da-4876-ae21-a6293a9f1fd8/',
  100: 'https://payment.intasend.com/pay/9a08aec7-a59b-4b87-972d-5a8911ea8142/',
  200: 'https://payment.intasend.com/pay/7565f265-647b-4e18-8ddf-3147eaf878c8/',
  500: 'https://payment.intasend.com/pay/93b367db-9695-4352-8468-584f10c0aa68/',
  1000: 'https://payment.intasend.com/pay/20f8d627-d1ec-463d-b509-c10bfe0fa46e/',
  10000: 'https://payment.intasend.com/pay/2eaaf8fc-eb78-4b24-b2d0-a06d803316c3/',
};

// Get closest payment link by price
const getPaymentLink = (price: number): string | null => {
  const sortedPrices = Object.keys(giftLinks).map(Number).sort((a, b) => a - b);
  const closestPrice = sortedPrices.find(linkPrice => linkPrice >= price);
  return closestPrice ? giftLinks[closestPrice] : null;
};

// Gift Item Component
const GiftItem = ({ item }: { item: { id: number; name: string; price: number; displayPrice: string; imageUrl: string } }) => {
  const paymentLink = getPaymentLink(item.price);
  
  return (
    <div
      className={`gift-item border p-4 rounded-lg shadow-lg transform transition ${paymentLink ? 'hover:scale-105 hover:shadow-xl cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
      onClick={() => paymentLink && window.open(paymentLink, '_blank')}
    >
      <img
        src={item.imageUrl}
        alt={item.name}
        onError={(e) => (e.currentTarget.src = '/src/assets/placeholder.png')}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-600">{item.displayPrice}</p>
        <span className={`text-sm mt-2 inline-block ${paymentLink ? 'text-green-600' : 'text-red-500'}`}>
          {paymentLink ? 'Click to purchase gift' : 'No payment link available'}
        </span>
      </div>
    </div>
  );
};

// Main Gift Registry Page Component
const GiftRegistryPage = () => {
  const availableGifts = giftItems.filter(item => getPaymentLink(item.price));

  return (
    <div className="gift-registry max-w-6xl mx-auto p-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Gift Registry for Julian</h2>
      <p className="text-center text-gray-600 mb-6">Choose from the wishlist to contribute a gift,  click on photo you will be directed and choose mpesa option, check your phone and input your pin!</p>

      <div className="gift-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableGifts.map(item => (
          <GiftItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default GiftRegistryPage;
