// // import { ProductCard } from "../components/ProductCard"
// import { Gallery } from "../components/Gallery"
// import { ProductListing } from "../components/ProductListing"
// import { ProductOptions } from "../components/ProductOptions"
// import { Section } from "../components/Section"

// export const HomePage = () =>{
//     return(
//         <>
//             <ProductOptions/>
//             <Section
//                 title="Coleções em Destaque"
//                 titleAlign="left"
//                 link={{text:'', href:''}}            
//             >                
//                 <Gallery 
//                     width="800px"
//                     height="100px"
//                     radius="4px"
//                     showThumbs
//                     images={[
//                         {src:'/public/collection-1.png'},
//                         {src:'/public/collection-2.png'},               
//                         {src:'/public/collection-3.png'},
//                     ]}
//                 />
//             </Section>
//             <Section
//                 title="Produtos em Alta"
//                 titleAlign="left"
//                 link={{text:'Ver todos →', href:'/produtos'}}                
//             >
//             <ProductListing/>
//             </Section>
//         </>
//     )
// }

import { Gallery } from '../components/Gallery';
import { ProductListing } from '../components/ProductListing';
import { ProductOptions } from '../components/ProductOptions';
import { Section } from '../components/Section';

export const HomePage = () => {
  const bannerImages = [
    { src: '/public/collection-1.png' }, 
    { src: '/public/collection-2.png' },
    { src: '/public/collection-3.png' },
  ];

  const collectionImages = [
    { src: '/public/product-thumb-1.png' }, 
    { src: '/public/product-thumb-2.png' },
    { src: '/public/product-thumb-3.png' },
    { src: '/public/product-thumb-4.png' },
    // ... mais imagens de coleções
  ];

  return (
    <>
      <ProductOptions />
      {/* Banner principal */}
      <Gallery
        width="1440px"
        height="681px"
        radius="4px"
        showThumbs // Ativa as "thumbnails" (bolinhas neste caso)
        images={bannerImages}
      />
      {/* Seção de Coleções em Destaque */}
      <Section title="Coleções em Destaque" titleAlign="left" link={{ text: '', href: '' }}>
        <div style={{ overflowX: 'auto' }}> {/* Container para rolagem horizontal */}
          <Gallery
            width="auto" // Largura automática para se ajustar ao conteúdo
            height="auto" // Altura automática para as imagens das coleções
            radius="4px"
            images={collectionImages}
            className="collections-gallery" // Classe para estilos específicos
          />
        </div>
      </Section>
      <Section
          title="Produtos em Alta"
          titleAlign="left"
          link={{text:'Ver todos →', href:'/produtos'}}                
      >
      <ProductListing/>
      </Section>
    </>
  );
};