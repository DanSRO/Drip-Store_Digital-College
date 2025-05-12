import { Link } from "react-router-dom";
import ornamentImage from '/Ornament 11.png';

export const ProductOptions = () => {
  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'space-around', // Distribui o espaço entre os elementos
        alignItems: 'center',
        // flexDirection: 'row-reverse',
        backgroundColor: '#f9f9f9', // Cor de fundo clara
        width: '100%', // Ocupa toda a largura
        height: 'auto', // Altura similar ao Gallery anterior
        padding: '40px 20px', // Adiciona um pouco de espaço interno
        position: 'relative', // Para posicionar elementos absolutos dentro (como os pontos)
        overflow:'hidden',
      }}
    >
      <div style={{ maxWidth: '50%', textAlign: 'left' }}> 
        <h6 style={{ color: '#ff9800', fontSize: '0.9em', marginBottom: '8px' }}>Melhores ofertas personalizadas</h6>
        <p style={{ fontFamily:'inter', fontWeight: '800', fontSize: '64px', lineHeight:'132px', letterSpacing:'1px', marginBottom: '12px', color:'rgba(31,31,31,1)' }}> 
          Queima de estoque Nike 🔥 
        </p>
        <p style={{ lineHeight: '1.5', marginBottom: '20px' }}>
          Consequat culpa exercitation mollit nisi excepteur do tempor laboris eiusmod irure consectetur. {/* Mantive o texto */}
        </p>
        <div>
          <button
            className="button-primary"
            style={{
              width:'200px',
              margin:'20px',
              backgroundColor: '#e91e63', // Cor magenta do botão
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1em',
            }}
          >
            Ver Ofertas
          </button>
        </div>
      </div>
      <div style={{ maxWidth: '50%' }}> {/* Largura máxima para a imagem */}
        <Link to={'/detalhes-do-produto'}>
          <img
            src="/White-Sneakers-PNG-Clipart 1.png"
            alt="imagem de tênis"
            className="img-options"
            style={{ maxWidth: '100%', height: '431.61px', width:'733.51px', transform:'rotate(-19.34deg)' }} // Garante que a imagem seja responsiva dentro da sua div
          />
        </Link>
      </div>      
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '30px',
          width:'140px',
          height:'140px',
          opacity:0.4,
          backgroundImage: `url(${ornamentImage})`,
          backgroundSize:'cover',
        }}
      >
      </div>
    </section>
  );
};