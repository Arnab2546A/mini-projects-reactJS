import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Card from "./Card";

const CardBox = () => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loaderRef = useRef(null);

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

  // Infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        setPage((prev) => prev + 1);
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [loading]);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-5 sm:p-8 shadow-2xl">

      {/* Background decoration */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

      {/* Cards */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>

      {/* Loader */}
      <div
        ref={loaderRef}
        className="relative h-24 flex items-center justify-center"
      >
        {loading && (
          <p className="text-white">
            Loading...
          </p>
        )}
      </div>
    </div>
  );
};

export default CardBox;