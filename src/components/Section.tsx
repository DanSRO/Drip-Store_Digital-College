interface SectionProps{
    title:string;
    titleAlign?:'left' | 'center';
    link?:{
        text:string;
        href:string;
    };
    children: React.ReactNode;
};

export const Section:React.FC<SectionProps> = ({
    title,
    titleAlign ='left',
    link,
    children,
}) =>{
    return (
        <section style={{padding:'1rem 0'}}>
            <div 
                style={{
                    display:'flex',
                    justifyContent:titleAlign === 'center' ? 'center':'space-between',
                    alignItems:'center',
                    marginBottom:'1rem',
                }}
            >
                <h2 
                    style={{
                        color:'#4F4F4F',
                        fontSize:'24px',
                        textAlign:titleAlign,
                        flex:1, 
                    }}
                >
                    {title}
                </h2>
                {link && (
                    <a 
                        href={link.href}
                        style={{
                            color:'#0070f3',
                            fontSize:'18px',
                            textDecoration:'none',
                            marginLeft:'auto',
                        }}
                    >
                        {link.text}
                    </a>
                )}
            </div>
            <div>{children}</div>
        </section>
    );
};


/* componente que havia usado no final da home para apresentar a oferta especial
<>
            <p>Último component da Home</p>
        <div style={{display:'flex', margin:'5px', padding:'20px'}}>
            <div>                
                <img src="/public/Laye.png" alt="Tênis destaque verde" style={{width:'700px', height:'500px'}} />
            </div>
            <div>
                <h6>Oferta especial</h6>
                <h2><strong>Air Jordan edição de colecionador</strong></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptatem at, sequi eveniet sint excepturi, blanditiis impedit consectetur ratione modi vitae saepe delectus porro. Quasi magnam atque aliquam ex nemo.</p>
                <div>
                    <button className="button-primary">Ver oferta</button>
                </div>
            </div>
        </div>
        <section>
            <title style={{color:'darkgray-2'}}></title>
        </section>
*/