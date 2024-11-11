import { Link } from 'react-router-dom';

// Define the types for the props of the FeatureCard component
interface FeatureCardProps {
  imgSrc: string;
  altText: string;
  linkTo: string;
  buttonText: string;
}

const FeatureCard = ({ imgSrc, altText, linkTo, buttonText }: FeatureCardProps) => (
  <Link
    to={linkTo}
    className="block group relative overflow-hidden rounded-xl shadow-xl transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none"
    aria-label={`Click to view ${buttonText}`}
  >
    <img
      src={imgSrc}
      alt={altText}
      className="w-full h-auto object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-90"
      loading="lazy"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300 ease-in-out" />
    <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
      <span className="text-center">{buttonText}</span>
    </div>
  </Link>
);

const FeaturePhoto = () => (
  <section className="my-8 animate-fade-in w-full max-w-4xl mx-auto px-4 md:px-8">
    {/* First Photo: Existing */}
    <FeatureCard
      imgSrc="/julian/assets/IMG_20240901_140625_728.jpg"
      altText="A cherished moment during the birthday celebration, capturing laughter and joy of the event."
      linkTo="/WishesPage"
      buttonText="Click to Leave a Wish"
    />

    {/* Second Photo: Julian1 */}
    <FeatureCard
      imgSrc="/julian/assets/julian1.jpg"
      altText="Another special moment captured during the birthday event, radiating joy and happiness."
      linkTo="/AnotherPage"
      buttonText="View More Memories"
    />
  </section>
);

export default FeaturePhoto;
