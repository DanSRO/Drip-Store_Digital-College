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
                            color:'#c92071',
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
