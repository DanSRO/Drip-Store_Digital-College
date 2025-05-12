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

import React, { useState } from "react";
import arrowLeftIcon from '../assets/arrow-left.svg';
import arrowRightIcon from '../assets/arrow-right.svg';
import './Gallery.css'; // arquivo CSS para estilos mais complexos

interface ImageItem {
  src: string;
}

interface GalleryProps {
  className?: string;
  width?: string;
  height?: string;
  radius?: string;
  showThumbs?: boolean;
  images: ImageItem[];
}

export const Gallery: React.FC<GalleryProps> = ({
  className = '',
  width = '600px',
  height = '400px',
  radius = '0px',
  showThumbs = false,
  images,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`gallery-container ${className}`} style={{ width, height, position: 'relative', overflow: 'hidden' }}>
      {/* Botão de navegação para a esquerda */}
      <button
        onClick={prevImage}
        disabled={currentIndex === 0}
        className="gallery-nav-button gallery-nav-left"
        style={{ opacity: currentIndex === 0 ? 0.3 : 1, cursor: currentIndex === 0 ? 'not-allowed' : 'pointer' }}
      >
        <img src={arrowLeftIcon} alt="Anterior" />
      </button>

      {/* Imagem principal */}
      {images[currentIndex] && (
        <img
          src={images[currentIndex].src}
          alt={`Imagem ${currentIndex + 1}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: radius,
            position: 'absolute', // Para sobrepor as imagens
            transition: 'transform 0.3s ease-in-out', // Adiciona uma transição suave
            transform: `translateX(-${currentIndex * 100}%)`, // Controla o slide horizontal
          }}
        />
      )}

      {/* Botão de navegação para a direita */}
      <button
        onClick={nextImage}
        disabled={currentIndex === images.length - 1}
        className="gallery-nav-button gallery-nav-right"
        style={{ opacity: currentIndex === images.length - 1 ? 0.3 : 1, cursor: currentIndex === images.length - 1 ? 'not-allowed' : 'pointer' }}
      >
        <img src={arrowRightIcon} alt="Próximo" />
      </button>

      {/* Thumbnails (renderizadas se showThumbs for true) */}
      {showThumbs && (
        <div className="gallery-thumbnails-container">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={`Miniatura ${idx + 1}`}
              onClick={() => handleThumbnailClick(idx)}
              className={`gallery-thumbnail ${idx === currentIndex ? 'selected' : ''}`}
              style={{
                width: '117px',
                height: '95px',
                objectFit: 'cover',
                borderRadius: radius,
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};