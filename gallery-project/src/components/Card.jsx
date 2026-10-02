
const Card = ({ image, name, date }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">

      {/* Image Frame */}
      <div className="aspect-[4/5] overflow-hidden bg-slate-800 p-2">
        <img
          src={image}
          alt={name}
          className="h-full w-full rounded-xl object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Card Details */}
      <div className="px-4 py-3">
        <h3 className="truncate text-lg font-semibold text-white">
          {name}
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          {date}
        </p>
      </div>

    </div>
  );
};

export default Card;