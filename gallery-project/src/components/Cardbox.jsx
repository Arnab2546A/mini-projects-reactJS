
import Card from "./Card";

const galleryPhotos = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900",
    name: "Mountain Escape",
    date: "12 June 2026",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900",
    name: "Peaceful Lake",
    date: "18 June 2026",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=900",
    name: "Golden Hour",
    date: "25 June 2026",
  },
];

const Cardbox = () => {
  return (
    <div className="min-h-screen bg-slate-950 px-5 py-10 sm:px-8">

      <div className="mx-auto max-w-7xl">

        <h2 className="mb-7 text-3xl font-bold text-white">
          Photo Gallery
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {galleryPhotos.map((photo) => (
            <Card
              key={photo.id}
              image={photo.image}
              name={photo.name}
              date={photo.date}
            />
          ))}

        </div>
      </div>
    </div>
  );
};

export default Cardbox;