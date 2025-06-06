import { Gallery } from "../components/Gallery"
import { CollectionsGallery } from "../components/CollectionsGallery"
import { BannerSlide } from "../components/BannerSlide"
import { Section } from "../components/Section"
import { ProductListing } from "../components/ProductListing"
import "../components/Gallery.css"
import { SpecialPromotion } from "../components/SpecialPromotion"
import { CategoryIcons } from "../components/CategoryIcons"
import "../components/Gallery.css"

// Importando ícones do Lucide React
import {
  ShirtIcon as TShirt,
  LibraryBigIcon as Pants,
  HeadphonesIcon,
  FootprintsIcon as Shoe,
  GraduationCapIcon as Hat,
} from "lucide-react"

export const HomePage = () => {
  // Dados para os banners principais
  const bannerSlides = [
    {
      src: "/White-Sneakers-PNG-Clipart 1.png",
      component: (
        <BannerSlide
          title="Queima de estoque Nike"
          subtitle="O tênis que você esperou muito nas redes sociais do tempo agora também é uma conversação."
          imageSrc="/White-Sneakers-PNG-Clipart 1.png"
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
          imageSrc="/Layer 1aa.png"
          buttonText="Explorar Coleção"
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
          imageSrc="/Laye.png"
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
      src: "/collection-1.png",
      title: "Novo drop Supreme",
      discount: "10% OFF",
      link: "/colecao/supreme",
    },
    {
      src: "/collection-2.png",
      title: "Coleção Adidas",
      discount: "15% OFF",
      link: "/colecao/adidas",
    },
    {
      src: "/collection-3.png",
      title: "Novo Beats Bass",
      discount: "20% OFF",
      link: "/colecao/beats",
    },
    {
      src: "/collection-1.png",
      title: "Novo drop Supreme",
      discount: "10% OFF",
      link: "/colecao/supreme",
    },
    {
      src: "/collection-2.png",
      title: "Coleção Adidas",
      discount: "15% OFF",
      link: "/colecao/adidas",
    },
    {
      src: "/collection-3.png",
      title: "Novo Beats Bass",
      discount: "20% OFF",
      link: "/colecao/beats",
    },
    {
      src: "/product-thumb-1.jpeg",
      title: "Coleção Nike",
      discount: "25% OFF",
      link: "/colecao/nike",
    },
    {
      src: "/collection-3.png",
      title: "Novo Beats Bass",
      discount: "20% OFF",
      link: "/colecao/beats",
    },
    {
      src: "/product-thumb-1.jpeg",
      title: "Coleção Nike",
      discount: "25% OFF",
      link: "/colecao/nike",
    },
  ]

    // Dados para as categorias com ícones
    const categories = [
      {
        name: "Camisetas",
        icon: <TShirt size={32} color="#FF6B9D" />,
        link: "/categoria/camisetas",
      },
      {
        name: "Calças",
        icon: <Pants size={32} color="#7C9C7C" />,
        link: "/categoria/calcas",
      },
      {
        name: "Bonés",
        icon: <Hat size={32} color="#7C9C7C" />,
        link: "/categoria/bones",
      },
      {
        name: "Headphones",
        icon: <HeadphonesIcon size={32} color="#666" />,
        link: "/categoria/headphones",
      },
      {
        name: "Tênis",
        icon: <Shoe size={32} color="#666" />,
        link: "/categoria/tenis",
      },
    ]

  return (
    <div style={{maxWidth:'1280px', marginLeft:'auto', marginRight:'auto', paddingLeft:'1rem', paddingRight:'1rem' }}>
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

      {/* Seção de Coleções em Destaque com ícones */}
      <Section title="Coleções em Destaque" titleAlign="center" link={{ text: "", href: "" }}>
        <CategoryIcons categories={categories} />
      </Section>

      {/* Seção de Produtos em Alta */}
      <Section title="Produtos em Alta" titleAlign="left" link={{ text: "Ver todos →", href: "/produtos" }}>
        <ProductListing />
      </Section>

      {/*Seção de Produtos em oferta especial */}
      <SpecialPromotion/>
    </div>
  )
}
