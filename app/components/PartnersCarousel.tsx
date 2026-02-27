interface PartnersCarouselProps {
  showTitle?: boolean;
  title?: string;
  className?: string;
  animationDelay?: string;
}

export default function PartnersCarousel({ 
  showTitle = true, 
  title = "Our Partners",
  className = "",
  animationDelay = "0.8s"
}: PartnersCarouselProps) {
  const brandLogosImages = [
    "/logos/kultura_logo.png",
    "/logos/s&r_logo.png",
    "/logos/hilton_and_resorts_logo.png",
    "/logos/lcc_logo.png",
    "/logos/puregold_logo.png",
  ];

  return (
    <div className={`w-full mt-16 mb-8 opacity-0 animate-slideUpFadeIn ${className}`} style={{ animationDelay }}>
      {showTitle && (
        <h2 className="text-4xl md:text-5xl text-[#FFE4CC] font-poppinsBold text-center mb-12 mt-20">
          {title}
        </h2>
      )}
      <div className="relative w-full overflow-hidden group py-8">
        <div className="flex animate-brandCarousel group-hover:[animation-play-state:paused]">
          {/* First set of logos */}
          {brandLogosImages.map((logoPath, index) => {
            const brandName = logoPath.split('/').pop()?.replace(/_/g, ' ').replace('.png', '').replace('logo', '').trim() || `Brand ${index + 1}`;
            return (
              <div key={`brand-1-${index}`} className="flex-shrink-0 mx-12 flex items-center justify-center h-32 w-48">
                <img
                  src={logoPath}
                  alt={brandName}
                  className="h-full w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105"
                />
              </div>
            );
          })}
          {/* Duplicate set for seamless loop */}
          {brandLogosImages.map((logoPath, index) => {
            const brandName = logoPath.split('/').pop()?.replace(/_/g, ' ').replace('.png', '').replace('logo', '').trim() || `Brand ${index + 1}`;
            return (
              <div key={`brand-2-${index}`} className="flex-shrink-0 mx-12 flex items-center justify-center h-32 w-48">
                <img
                  src={logoPath}
                  alt={brandName}
                  className="h-full w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
