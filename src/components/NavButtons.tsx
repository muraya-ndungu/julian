import { Link } from 'react-router-dom';

const NavButtons = () => (
  <section className="fixed top-4 w-full flex flex-wrap justify-center gap-8 animate-fade-in z-20 px-6 py-6">
    {[ 
      { to: '/WishesPage', label: 'Message Wall', from: 'from-yellow-400', toColor: 'to-yellow-500', icon: '🎉' },
      { to: '/GiftRegistryPage', label: 'Gift Registry', from: 'from-purple-400', toColor: 'to-purple-500', icon: '🎁' },
      { to: '/BirthdayGames', label: 'Birthday Games', from: 'from-pink-400', toColor: 'to-pink-500', icon: '🕹️' },
      { to: '/TicketPurchasePage', label: 'Buy Entry Ticket', from: 'from-blue-400', toColor: 'to-blue-500', icon: '🎟️' },
    ].map((button, i) => (
      <Link key={i} to={button.to} aria-label={`Go to ${button.label}`} className="group w-full sm:w-auto">
        <button
          aria-label={button.label}
          className={`bg-gradient-to-r ${button.from} ${button.toColor} text-white font-bold px-8 py-4 rounded-xl shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:rotate-2 focus:outline-none focus:ring-4 focus:ring-${button.toColor} focus:ring-opacity-60 w-full sm:w-auto`}
        >
          <span className="group-hover:text-white text-sm sm:text-lg md:text-xl flex items-center gap-3">
            <span className="text-2xl">{button.icon}</span> {/* Larger Icon */}
            <span className="truncate">{button.label}</span> {/* Ensures text does not overflow */}
          </span>
        </button>
      </Link>
    ))}
  </section>
);

export default NavButtons;
