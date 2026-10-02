import {useState,useEffect} from 'react'
import axios from "axios";
import Card from "./Card";


const Cardbox = () => {
    const [cards, setCards] = useState([])

    
    useEffect( () => {
        const getUsers=async()=>{
        const response=await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
         setCards(response.data)
    }
        getUsers()
    }, [])
    
  return (
    <div className="min-h-screen bg-slate-950 px-5 py-10 sm:px-8">

      <div className="mx-auto max-w-7xl">

        <h2 className="mb-7 text-3xl font-bold text-white">
          Photo Gallery
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {cards.map((card) => (
            <Card card={card}/>
))}

        </div>
      </div>
    </div>
  );
};

export default Cardbox;