import { useEffect, useState } from "react";
import FavoritesCard from "./FavoritesCard";

const Favorites = () => {

    const [favorites, setFavorites] = useState([]);
    const [noFound , setNoFound] = useState(false);
    const [isShow, setIsShow] = useState(false);

    useEffect(()=>{
        const favoriteItems = JSON.parse(localStorage.getItem('favorites'));
        if (favoriteItems) {
            setFavorites(favoriteItems);
        } else{
            setNoFound('No Data Found');
        }
    },[])

    const handleRemove = () => {
        localStorage.removeItem('favorites');
        setFavorites([]);
        setNoFound('No Data Found')
    }
    return (
        <div>
            {
                noFound ? <p className="h-[80vh] flex justify-center items-center font-bold text-4xl">{noFound}</p> 
                : 
                <div>
                {
                    favorites.length > 0 && <button onClick={handleRemove} className="p-3 rounded-e-md bg-green-200 mx-auto block"> Delete All Favorites </button>
                }

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 mb-10">

                {
                    isShow ? favorites.map((phone, index)=>(
                      <FavoritesCard phone={phone} key={index}> </FavoritesCard>
                    )) : 
                    favorites.slice(0,2).map((phone, index)=>(
                      <FavoritesCard phone={phone} key={index}> </FavoritesCard>
                    ))
                }
                

                </div>
                {
                    favorites.length > 2 && <button onClick={()=>setIsShow(!isShow)} className="p-3 rounded-e-md bg-green-200 mx-auto block"> {isShow ? 'Show Less' : 'Show More'} </button>
                }
                </div>

            }
        </div>
    );
};

export default Favorites;