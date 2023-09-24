/* eslint-disable react/no-unknown-property */
import PropTypes from 'prop-types';  
import Rating from 'react-rating';
import swal from 'sweetalert';
import Swal from 'sweetalert2';


const PhoneCard = ({phone}) => {

    const {id, phone_name, brand_name, price, image, rating} = phone || {} ;

    const handleAddToFavorites = ()=> {
      const addedFavoritesArray = [];
        const favoriteItems = JSON.parse(localStorage.getItem('favorites'));

      if ( !favoriteItems){
        addedFavoritesArray.push(phone);
        localStorage.setItem('favorites', JSON.stringify(addedFavoritesArray));
      } else{

        const isExist = favoriteItems.find(phone => phone.id === id);

        if (!isExist){
          addedFavoritesArray.push(...favoriteItems, phone);
          localStorage.setItem('favorites', JSON.stringify(addedFavoritesArray));
          swal("Good job!", "Products added to favorites", "success"); 
        } else{
          Swal.fire({
            title: 'Products already added to favorites',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        }


      }
    }

  return (
    <div className='flex items-center justify-center h-[70vh]'>
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={image}
            alt="image"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {brand_name}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {phone_name}
          </h4>
          <p className="mb-8 block font-sans text-xl font-bold leading-relaxed text-gray-700 antialiased">
            ${price}
          </p>
          <p className="mb-8 block font-sans text-xl font-bold leading-relaxed text-gray-700 antialiased">
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
          <a className="inline-block" href="#">
            <button onClick={handleAddToFavorites}
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Add to Favorites
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
PhoneCard.propTypes = {
    phone: PropTypes.shape({
        id: PropTypes.number.isRequired,
        phone_name: PropTypes.string.isRequired,
        brand_name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    })
}
export default PhoneCard;
