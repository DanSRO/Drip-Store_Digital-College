// import { useState } from "react";

// interface ImageItem{
//     src:string;
// }

// interface GalleryProps{
//     className?:string;
//     width?:string;
//     height?:string;
//     radius?:string;
//     showThumbs?:boolean;
//     images:ImageItem[];
// }
// export const Gallery:React.FC<GalleryProps> = ({
//         className = '',
//         width = '600px',
//         height = '400px',
//         radius = '0px',
//         showThumbs = false,
//         images,
//     }) =>{
//         const[currentIndex, setCurrentIndex] = useState(0);
//         const nextImage = () => {
//             if(currentIndex < images.length - 1){
//                 setCurrentIndex(currentIndex + 1);
//             }
//         };

//         const prevImage = () => {
//             if(currentIndex > 0){
//                 setCurrentIndex(currentIndex - 1);
//             }
//         };

//         const handleThumbnailClick = (index:number) => {
//             setCurrentIndex(index);
//         }        
        
//     return(
//         <div className={className}
//             style={{
//                 position:'relative',
//                 width,
//                 height,
//                 overflow: 'hidden'
//             }}
//         >
//         <button
//             onClick={prevImage}
//             disabled={currentIndex === 0}
//             style={{
//                 position:'absolute',
//                 top:'50%',
//                 left:'10px',
//                 transform:'translateY(-50%)',
//                 opacity:currentIndex === 0 ? 0.3 : 1,
//                 cursor:currentIndex === 0 ? 'not-allowed' : 'pointer',
//                 background:'none',
//                 border:'none'
//             }}
//         >
//             <img src='../assets/arrow-left.svg' alt="Anterior"/>
//         </button>
//         <button
//             onClick={nextImage}
//             disabled={currentIndex === images.length - 1}
//             style={{
//                 position: "absolute",
//                 top: "50%",
//                 right: "10px",
//                 transform: "translateY(-50%)",
//                 opacity: currentIndex === images.length - 1 ? 0.3 : 1,
//                 cursor: currentIndex === images.length - 1 ? "not-allowed" : "pointer",
//                 background: "none",
//                 border: "none",
//             }}
//         >
//             <img src="../assets/arrow-right.svg" alt="Próximo" />
//         </button>
//         {showThumbs && (
//             <div
//                 style={{
//                     display: "flex",
//                     gap: "8px",
//                     position: "absolute",
//                     bottom: "10px",
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                     backgroundColor: "rgba(255,255,255,0.8)",
//                     padding: "8px",
//                     borderRadius: "6px",
//                 }}
//             >
//                 {images.map((img, idx) => (
//                     <img
//                         key={idx}
//                         src={img.src}
//                         alt={`Thumb ${idx + 1}`}
//                         onClick={() => handleThumbnailClick(idx)}
//                         style={{
//                             width: "117px",
//                             height: "95px",
//                             objectFit: "cover",
//                             borderRadius: radius,
//                             border: idx === currentIndex ? "2px solid #007bff" : "2px solid transparent",
//                             cursor: "pointer",
//                         }}
//                     />
//                 ))}
//             </div>
//             )}
//         </div>
//     );
// }



// import React, { useState } from "react";
// import arrowLeftIcon from '../assets/arrow-left.svg';
// import arrowRightIcon from '../assets/arrow-right.svg';
// import './Gallery.css'; // arquivo CSS para estilos mais complexos

// interface ImageItem {
//   src: string;
// }

// interface GalleryProps {
//   className?: string;
//   width?: string;
//   height?: string;
//   radius?: string;
//   showThumbs?: boolean;
//   images: ImageItem[];
// }

// export const Gallery: React.FC<GalleryProps> = ({
//   className = '',
//   width = '600px',
//   height = '400px',
//   radius = '0px',
//   showThumbs = false,
//   images,
// }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextImage = () => {
//     if (currentIndex < images.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const prevImage = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   const handleThumbnailClick = (index: number) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className={`gallery-container ${className}`} style={{ width, height, position: 'relative', overflow: 'hidden' }}>
//       {/* Botão de navegação para a esquerda */}
//       <button
//         onClick={prevImage}
//         disabled={currentIndex === 0}
//         className="gallery-nav-button gallery-nav-left"
//         style={{ opacity: currentIndex === 0 ? 0.3 : 1, cursor: currentIndex === 0 ? 'not-allowed' : 'pointer' }}
//       >
//         <img src={arrowLeftIcon} alt="Anterior" />
//       </button>

//       {/* Imagem principal */}
//       {images[currentIndex] && (
//         <img
//           src={images[currentIndex].src}
//           alt={`Imagem ${currentIndex + 1}`}
//           style={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//             borderRadius: radius,
//             position: 'absolute', // Para sobrepor as imagens
//             transition: 'transform 0.3s ease-in-out', // Adiciona uma transição suave
//             transform: `translateX(-${currentIndex * 100}%)`, // Controla o slide horizontal
//           }}
//         />
//       )}

//       {/* Botão de navegação para a direita */}
//       <button
//         onClick={nextImage}
//         disabled={currentIndex === images.length - 1}
//         className="gallery-nav-button gallery-nav-right"
//         style={{ opacity: currentIndex === images.length - 1 ? 0.3 : 1, cursor: currentIndex === images.length - 1 ? 'not-allowed' : 'pointer' }}
//       >
//         <img src={arrowRightIcon} alt="Próximo" />
//       </button>

//       {/* Thumbnails (renderizadas se showThumbs for true) */}
//       {showThumbs && (
//         <div className="gallery-thumbnails-container">
//           {images.map((img, idx) => (
//             <img
//               key={idx}
//               src={img.src}
//               alt={`Miniatura ${idx + 1}`}
//               onClick={() => handleThumbnailClick(idx)}
//               className={`gallery-thumbnail ${idx === currentIndex ? 'selected' : ''}`}
//               style={{
//                 width: '117px',
//                 height: '95px',
//                 objectFit: 'cover',
//                 borderRadius: radius,
//                 cursor: 'pointer',
//               }}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// "use client"

// import type React from "react"
// import { useState, useEffect } from "react"

// interface ImageItem {
//   src: string
// }

// interface GalleryProps {
//   className?: string
//   width?: string
//   height?: string
//   radius?: string
//   showThumbs?: boolean
//   images: ImageItem[]
// }

// export const Gallery: React.FC<GalleryProps> = ({
//   className = "",
//   width = "600px",
//   height = "400px",
//   radius = "0px",
//   showThumbs = false,
//   images,
// }) => {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isTransitioning, setIsTransitioning] = useState(false)

//   // Auto-play functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (images.length > 1) {
//         nextImage()
//       }
//     }, 5000) // Change slide every 5 seconds

//     return () => clearInterval(interval)
//   }, [currentIndex, images.length])

//   const nextImage = () => {
//     if (isTransitioning) return

//     setIsTransitioning(true)
//     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))

//     setTimeout(() => setIsTransitioning(false), 500) // Match this with CSS transition time
//   }

//   const prevImage = () => {
//     if (isTransitioning) return

//     setIsTransitioning(true)
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))

//     setTimeout(() => setIsTransitioning(false), 500) // Match this with CSS transition time
//   }

//   const handleThumbnailClick = (index: number) => {
//     if (isTransitioning || index === currentIndex) return

//     setIsTransitioning(true)
//     setCurrentIndex(index)
//     setTimeout(() => setIsTransitioning(false), 500)
//   }

//   // Ensure we have images to display
//   if (!images || images.length === 0) {
//     return (
//       <div className={`gallery-container ${className}`} style={{ width, height }}>
//         Nenhuma imagem disponível
//       </div>
//     )
//   }

//   return (
//     <div
//       className={`gallery-container ${className}`}
//       style={{ width, height, position: "relative", overflow: "hidden", borderRadius: radius }}
//     >
//       {/* Carousel Track */}
//       <div
//         className="gallery-track"
//         style={{
//           display: "flex",
//           width: `${images.length * 100}%`,
//           height: "100%",
//           transition: "transform 0.5s ease-in-out",
//           transform: `translateX(-${(100 / images.length) * currentIndex}%)`,
//         }}
//       >
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="gallery-slide"
//             style={{
//               width: `${100 / images.length}%`,
//               height: "100%",
//               position: "relative",
//             }}
//           >
//             <img
//               src={image.src || "/placeholder.svg"}
//               alt={`Slide ${index + 1}`}
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 borderRadius: radius,
//               }}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       {images.length > 1 && (
//         <>
//           <button
//             onClick={prevImage}
//             className="gallery-nav-button gallery-nav-left"
//             aria-label="Anterior"
//             style={{
//               position: "absolute",
//               top: "50%",
//               left: "20px",
//               transform: "translateY(-50%)",
//               background: "rgba(255, 255, 255, 0.7)",
//               border: "none",
//               borderRadius: "50%",
//               width: "40px",
//               height: "40px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               cursor: "pointer",
//               zIndex: 10,
//             }}
//           >
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </button>

//           <button
//             onClick={nextImage}
//             className="gallery-nav-button gallery-nav-right"
//             aria-label="Próximo"
//             style={{
//               position: "absolute",
//               top: "50%",
//               right: "20px",
//               transform: "translateY(-50%)",
//               background: "rgba(255, 255, 255, 0.7)",
//               border: "none",
//               borderRadius: "50%",
//               width: "40px",
//               height: "40px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               cursor: "pointer",
//               zIndex: 10,
//             }}
//           >
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M9 6L15 12L9 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </button>
//         </>
//       )}

//       {/* Indicator Dots */}
//       {showThumbs && images.length > 1 && (
//         <div
//           className="gallery-indicators"
//           style={{
//             position: "absolute",
//             bottom: "20px",
//             left: "50%",
//             transform: "translateX(-50%)",
//             display: "flex",
//             gap: "8px",
//             zIndex: 10,
//           }}
//         >
//           {images.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handleThumbnailClick(index)}
//               aria-label={`Ir para slide ${index + 1}`}
//               style={{
//                 width: "12px",
//                 height: "12px",
//                 borderRadius: "50%",
//                 background: index === currentIndex ? "#FF4D4D" : "#FFFFFF",
//                 border: "none",
//                 cursor: "pointer",
//                 padding: 0,
//                 boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
//               }}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface ImageItem {
  src: string
  component?: React.ReactNode
}

interface GalleryProps {
  className?: string
  width?: string
  height?: string
  radius?: string
  showThumbs?: boolean
  images: ImageItem[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

export const Gallery: React.FC<GalleryProps> = ({
  className = "",
  width = "600px",
  height = "400px",
  radius = "0px",
  showThumbs = false,
  images,
  autoPlay = true,
  autoPlayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return

    const interval = setInterval(() => {
      nextImage()
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [currentIndex, images.length, autoPlay, autoPlayInterval])

  const nextImage = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))

    setTimeout(() => setIsTransitioning(false), 500) // Match this with CSS transition time
  }

  const prevImage = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))

    setTimeout(() => setIsTransitioning(false), 500) // Match this with CSS transition time
  }

  const handleThumbnailClick = (index: number) => {
    if (isTransitioning || index === currentIndex) return

    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  // Ensure we have images to display
  if (!images || images.length === 0) {
    return (
      <div className={`gallery-container ${className}`} style={{ width, height }}>
        Nenhuma imagem disponível
      </div>
    )
  }

  return (
    <div
      className={`gallery-container ${className}`}
      style={{ width, height, position: "relative", overflow: "hidden", borderRadius: radius }}
    >
      {/* Carousel Track */}
      <div
        className="gallery-track"
        style={{
          display: "flex",
          width: `${images.length * 100}%`,
          height: "100%",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${(100 / images.length) * currentIndex}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-slide"
            style={{
              width: `${100 / images.length}%`,
              height: "100%",
              position: "relative",
            }}
          >
            {image.component ? (
              image.component
            ) : (
              <img
                src={image.src || "/placeholder.svg"}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: radius,
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="gallery-nav-button gallery-nav-left"
            aria-label="Anterior"
            style={{
              position: "absolute",
              top: "50%",
              left: "20px",
              transform: "translateY(-50%)",
              background: "rgba(255, 255, 255, 0.7)",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={nextImage}
            className="gallery-nav-button gallery-nav-right"
            aria-label="Próximo"
            style={{
              position: "absolute",
              top: "50%",
              right: "20px",
              transform: "translateY(-50%)",
              background: "rgba(255, 255, 255, 0.7)",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}

      {/* Indicator Dots */}
      {showThumbs && images.length > 1 && (
        <div
          className="gallery-indicators"
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "8px",
            zIndex: 10,
          }}
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              aria-label={`Ir para slide ${index + 1}`}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: index === currentIndex ? "#FF4D4D" : "#FFFFFF",
                border: "none",
                cursor: "pointer",
                padding: 0,
                boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
