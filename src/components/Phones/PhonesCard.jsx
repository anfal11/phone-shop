import { Link } from "react-router-dom";
import PropTypes from 'prop-types';  
import Rating from "react-rating";


const PhonesCard = ({phone}) => {
    const {id, phone_name, brand_name, price, rating, image} = phone || {} ;
  return (
    <div>
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img
            src={image}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-center">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {brand_name}
            </p>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {phone_name}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              ${price}
            </p>
          </div>
           
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
          <Rating
            emptySymbol={<svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
    
    >
      <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z" />
    </svg>}
  fullSymbol={<svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
    
    >
      <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
    </svg>}
  initialRating={rating}
  readonly
/>
          </p>
        </div>
        <div className="p-6 pt-0">
         <Link to={`/phones/${id}`} state={phone_name}>
         <button
            className="block bg-gray-300 w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"> See Details </button>
         </Link>
        </div>
      </div>
    </div>
  );
};


PhonesCard.propTypes = {
    phone: PropTypes.shape({
        id: PropTypes.number.isRequired,
        phone_name: PropTypes.string.isRequired,
        brand_name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    })
}
export default PhonesCard;
