import { Section } from "../components/Section";
import { ProductCard } from "./ProductCard";

export const ProductDetails = () => {
  const colors = ["#8b5cf6", "#ec4899", "#06b6d4", "#000000"];
  const products = [
    {
      image: "/public/Layer 1aa.png",
      name: "K-Swiss V8 - Masculino",
      price: 200,
      priceDiscount: 100,
    },
    {
      image: "/public/Layer 1aa.png",
      name: "K-Swiss V8 - Masculino",
      price: 200,
      priceDiscount: 100,
    },
    {
      image: "/public/Layer 1aa.png",
      name: "K-Swiss V8 - Masculino",
      price: 200,
      priceDiscount: 100,
    },
    {
      image: "/public/Layer 1aa.png",
      name: "K-Swiss V8 - Masculino",
      price: 200,
      priceDiscount: 100,
    },
  ];

  return (    
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', paddingRight:'8px', paddingLeft:'12px' }}>
      {/* Seção Principal */}      
      <div style={{display:'flex', flexDirection:window.innerWidth>=1024?'row':'column', gap:'3rem', width:'100%', maxWidth:'72rem'}} >
        {/* Imagem principal */}
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', backgroundColor:'rgba(226,227,255,1)', padding:'6px', borderRadius: "0.5rem", width: window.innerWidth >= 1024 ? '50%':'100%'}}>
          <img
            src="/White-Sneakers-PNG-Clipart 1.png"
            alt="Tênis branco"
            style={{width:'400px', height:'248px', transform:'rotate(12deg)', marginTop:'112px'}}
          />
          {/* Miniaturas (opcional) */}
          {/* <div style={{display:'flex', gap:'2px', marginTop:'4px'}}>
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src="/White-Sneakers-PNG-Clipart 1.png"
                alt="Miniatura"
                style={{width:'12px', height:'12px', borderRadius:'4px'}}
              />
            ))}
          </div> */}
        </div>

        {/* Informações do produto */}        
        <div style={{display:'flex', flexDirection:'column', gap:'4px', width: window.innerWidth >= 1024 ? "50%" : "100%" }}>
          <h1 style={{fontSize:'1.5rem', fontWeight:600}}>
            Tênis Nike Revolution 6 Next Nature Masculino
          </h1>
          <p style={{fontSize:'1.125rem', fontWeight:'bold', color:'ea580c'}}>R$ 219,00</p>
          <p style={{color:'#4b5563', fontSize:'0.875rem'}}>
            Descrição do produto aqui. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla nec lorem est. Suspendisse
            ultricies velit non massa ullamcorper.
          </p>

          {/* Tamanhos */}
          <div>
            <p style={{fontWeight:500}}>Tamanhos:</p>
            <div style={{display:'flex', gap:'0.5rem', marginTop:'0.25rem'}}>
              {["38", "40", "41", "43"].map((size) => (
                <button
                  key={size}
                  style={{
                    padding: "0.25rem 0.75rem", // py-1 = 4px, px-3 = 12px
                    border: "1px solid #d1d5db", // Tailwind border default = gray-300
                    borderRadius: "0.25rem",     // rounded = 4px
                    cursor: "pointer"
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Cores */}
          <div>
            <p style={{fontWeight:500, marginTop:'0.5rem'}}>Cores:</p>
            <div style={{display:'flex', gap:'2px', marginTop:'1px'}}>
                {colors.map((color, i) => (
                  <div
                    key={i}
                    style={{width:'1.5rem', height:'1.5rem', borderRadius:'9999px', backgroundColor:color, border:'1px solid #d1d5db', cursor:'pointer'}}
                  />
                ))}
            </div>
          </div>

          {/* Botão Comprar */}
          <button 
          style={{
              marginTop: "1rem",         // mt-4 = 16px
              padding: "0.5rem 1.5rem",  // py-2 = 8px, px-6 = 24px
              backgroundColor: "#facc15",// yellow-400
              color: "#ffffff",
              fontWeight: "bold",
              borderRadius: "0.25rem",   // rounded = 4px
              cursor: "pointer"
            }}
          >
            COMPRAR
          </button>
        </div>
      </div>
    {/* Miniaturas (opcional) */}
    <div style={{display:'flex', gap:'2px', marginTop:'4px'}}>
        {[...Array(5)].map((_, i) => (
            <img
            key={i}
            src="/White-Sneakers-PNG-Clipart 1.png"
            alt="Miniatura"
            style={{width:'100px', height:'100px', borderRadius:'4px'}}
            />
        ))}
    </div>

      {/* Produtos relacionados */}
      <div style={{ width:'100%', maxWidth:'72rem', marginTop:'4rem'}}>
        <Section title="Produtos Relacionados" link={{ text: "Ver todos", href: "{ProductListing}" }}>
          <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr', gap:'1.5rem'}}>
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
};
