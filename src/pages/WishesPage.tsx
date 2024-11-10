import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

function WishesPage() {
  const [wishes, setWishes] = useState<any[]>([]);

  useEffect(() => {
    const fetchWishes = async () => {
      const querySnapshot = await getDocs(collection(db, 'wishes'));
      setWishes(querySnapshot.docs.map((doc) => doc.data()));
    };
    fetchWishes();
  }, []);

  return (
    <div className="wishes-wall">
      <h2>Birthday Wishes</h2>
      <div className="wishes-container">
        {wishes.map((wish, index) => (
          <div key={index} className="wish-card">
            <h3>{wish.name}</h3>
            <p>{wish.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishesPage;
