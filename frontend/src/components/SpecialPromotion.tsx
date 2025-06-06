
export const SpecialPromotion = () => {
    return(        
        <>            
            <div style={{display:'flex', margin:'5px', padding:'20px'}}>
                <div style={{position:"relative"}}>
                    <div
                        style={{
                        position: "absolute",
                        bottom:"70px",
                        left: "89px",
                        width: "550px",
                        height: "440px",
                        borderRadius: "110%",
                        background: "rgba(255, 77, 77, 0.1)",
                        zIndex: -1,
                        }}
                    />

                    <img src="/Laye.png" alt="Tênis destaque amarelo" style={{width:'700px', height:'500px'}} />
                </div>
                <div style={{textAlign:'left'}}>
                    <h6 style={{color:"#c92071", fontSize:"1.1em"}}>Oferta especial</h6>
                    <h2><strong>Air Jordan edição de colecionador</strong></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptatem at, sequi eveniet sint excepturi, blanditiis impedit consectetur ratione modi vitae saepe delectus porro. Quasi magnam atque aliquam ex nemo.</p>
                    <div style={{display:'flex', alignItems:'flex-start'}}>
                        <button 
                        className="button-primary"
                        
                        style={{
                            backgroundColor: "#e91e63",
                            width:"200px",
                            margin:"20px",
                            color: "white",
                            border: "none",
                            padding: "10px 20px",
                            borderRadius: "8px",
                            fontWeight: "bold",
                            cursor: "pointer",
                            fontSize: "1em",
                            transition: "background-color 0.3s",
                        }}                        
                    >Ver oferta</button>
                    </div>
                </div>
            </div>
            <section>
                <title style={{color:'darkgray-2'}}></title>
            </section>
        </>
    );

}