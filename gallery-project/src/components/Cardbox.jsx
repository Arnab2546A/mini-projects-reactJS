import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const CardBox = () => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Fetch photos
  useEffect(() => {
    const getCards = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          `https://picsum.photos/v2/list?page=${page}&limit=20`
        );

        console.log("API response:", response.data);

        setCards((prev) => [...prev, ...response.data]);
      } catch (error) {
        console.log("API error:", error);
      } finally {
        setLoading(false);
      }
    };

    getCards();
  }, [page]);

  return (
 <div className="relative rounded-3xl border border-slate-800 bg-slate-900/60 p-5 sm:p-8 shadow-2xl">

      {/* Background decoration */}
      {/* Cards */}
<div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {cards.map((card) => (
    <Card key={card.id} card={card} />
  ))}
</div>

{/* Button always stays after all cards */}
<div className="relative flex justify-center mt-10">
  <button
    onClick={() => setPage((prev) => prev + 1)}
    disabled={loading}
    className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold
               hover:bg-indigo-500 transition duration-200
               disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {loading ? "Loading..." : "View More"}
  </button>
</div>

    </div>
  );
};

export default CardBox;