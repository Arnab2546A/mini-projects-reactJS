const Card = ({ card }) => {
  return (
    <a
      href={card.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="border-8 border-white bg-slate-900 shadow-lg rounded-2xl overflow-hidden">
        <img
          src={card.download_url}
          alt={card.author}
          className="block w-full h-64 object-cover"
        />

        <div className="p-3 text-center">
          <h2 className="text-white font-semibold">
            {card.author}
          </h2>
        </div>
      </div>
    </a>
  );
};

export default Card;