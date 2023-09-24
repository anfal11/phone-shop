import PropTypes from 'prop-types';  

const FavoritesCard = ({phone}) => {
    return (
        <div>
              <div className="flex items-center justify-center">
                            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                                    <img
                                        src={phone.image}
                                        alt="image"
                                        className="h-[200px] w-full object-contai"
                                    />
                                </div>
                                <div className="p-6">
                                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                                        {phone.brand_name}
                                    </h6>
                                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                        {phone.phone_name}
                                    </h4>
                                    <p className="mb-8 block font-sans text-xl font-bold leading-relaxed text-gray-700 antialiased">
                                        ${phone.price}
                                    </p>
                                </div>
                            </div>
                        </div>
        </div>
    );
};
FavoritesCard.propTypes = {
    phone: PropTypes.object.isRequired,
}
export default FavoritesCard;