import React, { useState } from "react";

const Gallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [filterType, setFilterType] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const galleryItems = [
    {
        type: "youtube",
        videoId: "pHcFxVcj0-Q",
        title: "Post Partum Depression",
        description: "An informative video about postpartum depression and its effects.",
        thumbnail: "https://img.youtube.com/vi/pHcFxVcj0-Q/maxresdefault.jpg",
      },
      ,
    {
      type: "image",
      src: "/raba-coaching.png",
      title: "Modern Patient Rooms",
      description: "Comfortable and well-equipped patient accommodations",
    },
    {
        type: "youtube",
        videoId: "AclG4Octzkg",
        title: "Understanding Postpartum Depression",
        description: "A detailed explanation and awareness video about postpartum depression.",
        thumbnail: "https://img.youtube.com/vi/AclG4Octzkg/maxresdefault.jpg",
      }
      ,
    {
      type: "image",
      src: "/raba-teaching1.png",
      title: "Expert Medical Team",
      description: "Our dedicated healthcare professionals",
    },
    {
        type: "youtube",
        videoId: "k66r2SZkAXg",
        title: "Understanding Anxiety Disorders",
        description: "A video explaining anxiety disorders, symptoms, and possible treatments.",
        thumbnail: "https://img.youtube.com/vi/k66r2SZkAXg/maxresdefault.jpg",
      }
      ,
    {
      type: "image",
      src: "/raba-couple.png",
      title: "Advanced Technology",
      description: "State-of-the-art medical equipment for precise diagnostics",
    }
  ];

  const stats = [
    { number: "500+", label: "Clients Served" },
    { number: "15+", label: "Years of Excellence" },
    { number: "5+", label: "Our Professional Team" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  const filterOptions = [
    { value: "all", label: "All Media" },
    { value: "images", label: "Images Only" },
    { value: "videos", label: "Videos Only" },
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (filterType === "all") return true;
    if (filterType === "images") return item.type === "image";
    if (filterType === "videos") return item.type === "youtube";
    return true;
  });

  // Show only 3 initially, expand if "View More" clicked
  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 3);

  return (
    <section id="gallery" className="mt-6 pt-12 section-padding bg-white scroll-mt-[100px]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-maroon-900  section-title">Gallery</h2>
          <p className="section-subtitle">
            Take a look at our modern facilities, dedicated team, and <br/> the
            compassionate care we provide to our community every day.
          </p>
        </div>

        {/* Dropdown */}
        <div className="flex justify-center mb-12 relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-gradient-to-r from-maroon-900 to-maroon-800 text-white px-6 py-3 rounded-lg hover:from-maroon-800 hover:to-maroon-700 transition-all duration-200 flex items-center gap-2 shadow-lg"
          >
            <span className="font-medium">
              {filterOptions.find((opt) => opt.value === filterType)?.label}
            </span>
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute mt-14 bg-white border border-maroon-200 rounded-lg shadow-xl z-10">
              {filterOptions.map((option) => (
                <div
                  key={option.value}
                  onClick={() => {
                    setFilterType(option.value);
                    setDropdownOpen(false);
                    setShowAll(false); // reset view on filter change
                  }}
                  className={`px-4 py-3 hover:bg-amber-50 transition-colors duration-200 cursor-pointer ${
                    filterType === option.value ? "bg-amber-100 font-medium" : ""
                  }`}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div
                className="aspect-[4/3] bg-gradient-to-br from-maroon-100 via-amber-50 to-maroon-50 flex items-center justify-center relative"
                onClick={() =>
                  item.type === "youtube" && setSelectedVideo(item.videoId)
                }
              >
                {item.type === "youtube" ? (
                  <>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-maroon-900/40 group-hover:bg-maroon-900/60 transition-all duration-300 flex items-center justify-center">
                      <div className="bg-amber-400 rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
                        ▶
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-maroon-900/90 to-transparent p-4">
                      <h4 className="text-white font-semibold">{item.title}</h4>
                      <p className="text-maroon-100 text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src={item.src}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-maroon-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white p-4">
                        <h4 className="font-semibold mb-2">{item.title}</h4>
                        <p className="text-sm text-maroon-100">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-maroon-900/90 to-transparent p-4 group-hover:opacity-0 transition-opacity duration-300">
                      <h4 className="text-white font-semibold">{item.title}</h4>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {filteredItems.length > 3 && (
          <div className="text-center mb-16">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-amber-400 text-maroon-900 font-semibold rounded-xl hover:bg-amber-500 transition"
            >
              {showAll ? "View Less" : "View More Gallery Content"}
            </button>
          </div>
        )}

        {/* Stats */}
        <div className="bg-gradient-to-r from-maroon-900 to-maroon-800 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Our Impact</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="bg-amber-400 rounded-full p-3 w-fit mx-auto mb-4">
                  ⭐
                </div>
                <div className="text-3xl font-bold text-amber-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-maroon-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 bg-amber-400 hover:bg-amber-500 text-maroon-900 rounded-full p-2 transition"
            >
              ✖
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
