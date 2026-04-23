import { useState } from 'react';
import { X } from 'lucide-react';

const galleryData = [
  { image: '/assets/slide1.png', category: 'Motion' },
  { image: '/assets/slide2.png', category: 'Branding' },
  { image: '/assets/slide3.png', category: 'Web' },
  { image: '/assets/slide4.png', category: 'Print' },
  { image: '/assets/slide5.png', category: 'Branding' },
  { image: '/assets/slide6.png', category: 'Web' },
];

interface GalleryItemProps {
  image: string;
  onClick: (image: string) => void;
}

function GalleryItem({ image, onClick }: GalleryItemProps) {
  return (
    <div 
      className="relative aspect-[4/5] rounded-[2rem] overflow-hidden cursor-pointer group bg-white/5 shadow-xl"
      onClick={() => onClick(image)}
    >
      <img 
        src={image} 
        alt="Portfolio work" 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-fuchsia-900/0 group-hover:bg-fuchsia-900/20 transition-colors duration-500" />
    </div>
  );
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filterCategories = ["All Projects", "Branding", "Web", "Print", "Motion"];
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [displayedItems, setDisplayedItems] = useState(() => 
    [...galleryData].sort(() => Math.random() - 0.5)
  );

  const handleFilterClick = (cat: string) => {
    setActiveFilter(cat);
    if (cat === "All Projects") {
      setDisplayedItems([...galleryData].sort(() => Math.random() - 0.5));
    } else {
      setDisplayedItems(galleryData.filter(item => item.category === cat));
    }
  };

  return (
    <section className="bg-kroma-600 py-24 px-6 md:px-12 lg:px-24 w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-8">
        <div>
          <span className="text-fuchsia-600 font-bold uppercase tracking-widest text-sm mb-4 block">
            Portfolio
          </span>
          <h2 className="text-white text-5xl md:text-7xl font-black tracking-tighter leading-none">
            SELECTED WORKS
          </h2>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          {filterCategories.map(cat => (
            <button 
              key={cat}
              onClick={() => handleFilterClick(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                activeFilter === cat 
                  ? 'bg-fuchsia-600 text-white' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedItems.map((item) => (
          <GalleryItem key={item.image} image={item.image} onClick={setSelectedImage} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-16">
        <button className="px-10 py-4 rounded-full border border-fuchsia-600/50 text-fuchsia-500 font-bold uppercase tracking-widest text-sm hover:bg-fuchsia-600 hover:text-white transition-colors duration-300">
          Load More Projects
        </button>
      </div>

      {/* Lightbox / Visionneuse */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm px-6"
             onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <img 
            src={selectedImage} 
            alt="Viewed work" 
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}