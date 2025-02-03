import { AspectRatio } from "@/components/ui/aspect-ratio";

const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      alt: "Traditional Knafeh",
      title: "Classic Knafeh"
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Coffee Service",
      title: "Our Coffee"
    },
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      alt: "Store Interior",
      title: "Our Space"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <AspectRatio ratio={4/3}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;