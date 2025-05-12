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

// import { Gallery } from '../components/Gallery';
// import { ProductListing } from '../components/ProductListing';
// import { ProductOptions } from '../components/ProductOptions';
// import { Section } from '../components/Section';

// export const HomePage = () => {
//   const bannerImages = [
//     { src: '/public/collection-1.png' }, 
//     { src: '/public/collection-2.png' },
//     { src: '/public/collection-3.png' },
//   ];

//   const collectionImages = [
//     { src: '/public/product-thumb-1.png' }, 
//     { src: '/public/product-thumb-2.png' },
//     { src: '/public/product-thumb-3.png' },
//     { src: '/public/product-thumb-4.png' },
//     // ... mais imagens de coleções
//   ];

//   return (
//     <>
//       <ProductOptions />
//       {/* Banner principal */}
//       <Gallery
//         width="1440px"
//         height="681px"
//         radius="4px"
//         showThumbs // Ativa as "thumbnails" (bolinhas neste caso)
//         images={bannerImages}
//       />
//       {/* Seção de Coleções em Destaque */}
//       <Section title="Coleções em Destaque" titleAlign="left" link={{ text: '', href: '' }}>
//         <div style={{ overflowX: 'auto' }}> {/* Container para rolagem horizontal */}
//           <Gallery
//             width="auto" // Largura automática para se ajustar ao conteúdo
//             height="auto" // Altura automática para as imagens das coleções
//             radius="4px"
//             images={collectionImages}
//             className="collections-gallery" // Classe para estilos específicos
//           />
//         </div>
//       </Section>
//       <Section
//           title="Produtos em Alta"
//           titleAlign="left"
//           link={{text:'Ver todos →', href:'/produtos'}}                
//       >
//       <ProductListing/>
//       </Section>
//     </>
//   );
// };

// import { Gallery } from '../components/Gallery';
// import { CollectionsGallery } from "../components/CollectionsGallery";
// import { ProductOptions } from "../components/ProductOptions";
// import { Section } from "../components/Section";
// import { ProductListing } from "../components/ProductListing";
// import "../components/Gallery.css";

// export const HomePage = () => {
//   const bannerImages = [
//     // { src: "/public/collection-1.png" },
//     { src: "/White-Sneakers-PNG-Clipart 1.png" },
//     { src: "/public/collection-2.png" },
//     { src: "/public/collection-3.png" },
//   ]

//   const collectionImages = [
//     {
//       src: "/public/product-thumb-1.png",
//       title: "Novo drop Supreme",
//       discount: "10% OFF",
//       link: "/colecao/supreme",
//     },
//     {
//       src: "/public/product-thumb-2.png",
//       title: "Coleção Adidas",
//       discount: "15% OFF",
//       link: "/colecao/adidas",
//     },
//     {
//       src: "/public/product-thumb-3.png",
//       title: "Novo Beats Bass",
//       discount: "20% OFF",
//       link: "/colecao/beats",
//     },
//     {
//       src: "/public/product-thumb-4.png",
//       title: "Coleção Nike",
//       discount: "25% OFF",
//       link: "/colecao/nike",
//     },
//     // Você pode adicionar mais imagens conforme necessário
//   ]

//   return (
//     <>
//       <ProductOptions />

//       {/* Banner principal */}
//       <div style={{ maxWidth: "100%", overflow: "hidden" }}>
//         <Gallery width="100%" height="681px" radius="4px" showThumbs={true} images={bannerImages} />
//       </div>

//       {/* Seção de Coleções em Destaque */}
//       <Section title="Coleções em destaque" titleAlign="left" link={{ text: "", href: "" }}>
//         <CollectionsGallery images={collectionImages} />
//       </Section>

//       {/* Seção de Produtos em Alta */}
//       <Section title="Produtos em Alta" titleAlign="left" link={{ text: "Ver todos →", href: "/produtos" }}>
//         <ProductListing />
//       </Section>
//     </>
//   )
// }


import { Gallery } from "../components/Gallery"
import { CollectionsGallery } from "../components/CollectionsGallery"
import { BannerSlide } from "../components/BannerSlide"
import { ProductOptions } from "../components/ProductOptions"
import { Section } from "../components/Section"
import { ProductListing } from "../components/ProductListing"
import "../components/Gallery.css"

export const HomePage = () => {
  // Dados para os banners principais
  const bannerSlides = [
    {
      src: "/public/collection-1.png", // Este é apenas um placeholder, o componente real será usado
      component: (
        <BannerSlide
          title="Queima de estoque Nike"
          subtitle="O tênis que você esperou muito nas redes sociais do tempo agora também é uma conversação."
          imageSrc="/public/collection-1.png" // Substitua pelo caminho da imagem do tênis Nike branco
          buttonText="Ver ofertas"
          buttonLink="/ofertas/nike"
          discount="Melhores ofertas personalizadas"
          backgroundColor="#f5f7fa"
        />
      ),
    },
    {
      src: "/public/collection-2.png",
      component: (
        <BannerSlide
          title="Coleção Adidas 2023"
          subtitle="Descubra os novos modelos da Adidas com descontos exclusivos para você."
          imageSrc="/public/collection-2.png"
          buttonText="Explorar coleção"
          buttonLink="/colecao/adidas"
          discount="Até 30% OFF"
          backgroundColor="#f0f8ff"
        />
      ),
    },
    {
      src: "/public/collection-3.png",
      component: (
        <BannerSlide
          title="Novos Beats Bass"
          subtitle="A melhor qualidade de som agora com preços imperdíveis. Confira nossa seleção."
          imageSrc="/public/collection-3.png"
          buttonText="Ver produtos"
          buttonLink="/produtos/beats"
          discount="Lançamento"
          backgroundColor="#fff5f5"
        />
      ),
    },
  ]

  // Dados para as coleções em destaque
  const collectionImages = [
    {
      src: "/public/product-thumb-1.png",
      title: "Novo drop Supreme",
      discount: "10% OFF",
      link: "/colecao/supreme",
    },
    {
      src: "/public/product-thumb-2.png",
      title: "Coleção Adidas",
      discount: "15% OFF",
      link: "/colecao/adidas",
    },
    {
      src: "/public/product-thumb-3.png",
      title: "Novo Beats Bass",
      discount: "20% OFF",
      link: "/colecao/beats",
    },
    {
      src: "/public/product-thumb-4.png",
      title: "Coleção Nike",
      discount: "25% OFF",
      link: "/colecao/nike",
    },
  ]

  return (
    <>
      <ProductOptions />

      {/* Banner principal com slides personalizados */}
      <div style={{ maxWidth: "100%", overflow: "hidden" }}>
        <Gallery
          width="100%"
          height="681px"
          radius="4px"
          showThumbs={true}
          images={bannerSlides}
          autoPlay={true}
          autoPlayInterval={6000}
        />
      </div>

      {/* Seção de Coleções em Destaque */}
      <Section title="Coleções em destaque" titleAlign="left" link={{ text: "", href: "" }}>
        <CollectionsGallery images={collectionImages} />
      </Section>

      {/* Seção de Produtos em Alta */}
      <Section title="Produtos em Alta" titleAlign="left" link={{ text: "Ver todos →", href: "/produtos" }}>
        <ProductListing />
      </Section>
    </>
  )
}
