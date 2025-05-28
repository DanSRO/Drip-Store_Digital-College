import { useState } from "react"
import { ProductListing } from "../components/ProductListing"
import { Section } from "../components/Section"

export const ProductListingPage = () =>{
    const[sortBy, setSortBy] = useState('');
    return(
        <div style={{maxWidth:'1280px', margin:'0 auto', padding:'32px 24px', fontSize:'14px', display:'flex', gap:'40px', alignItems:'flex-start'}}>
            <aside style={{marginTop:'156px', justifyItems:'flex-start', width:'240px', backgroundColor:'#fff', borderRadius:'8px', padding:'16px', fontSize:'14px', color:'var(--primary)'}}>
                <h2 style={{fontWeight:'600', marginBottom:'16px'}}>Filtrar por</h2>
                <hr />
                <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'flex-start', marginBottom:'24px'}}>
                    <h3 style={{fontWeight:'500'}}>Marca</h3>
                    <label><input type="checkbox"/>Adidas</label><br />
                    <label><input type="checkbox"/>K-Swiss</label><br />
                    <label><input type="checkbox"/>Nike</label><br />
                    <label><input type="checkbox"/>Puma</label><br />
                    <label><input type="checkbox"/>Calenciaga</label><br />
                </div>
                
                <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'flex-start',marginBottom:'24px'}}>
                    <h3 style={{fontWeight:'500'}}>Categoria</h3>
                    <label><input type="checkbox"/>Esporte e lazer</label><br />
                    <label><input type="checkbox"/>Utilitário</label><br />
                    <label><input type="checkbox"/>Corrida</label><br />
                    <label><input type="checkbox"/>Casual</label><br />
                </div>
                
                <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'flex-start',marginBottom:'24px'}}>
                    <h3 style={{fontWeight:'500'}}>Gênero</h3>
                    <label><input type="checkbox"/>Masculino</label><br />
                    <label><input type="checkbox"/>Feminino</label><br />
                    <label><input type="checkbox"/>Unissex</label><br />
                </div>
                
                <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'flex-start',fontWeight:'600', marginBottom:'24px'}}>
                    <h3 style={{fontWeight:'500', }}>Estado</h3>
                    <label><input type="checkbox"/>Novo</label><br />
                    <label><input type="checkbox"/>Usado</label><br />                    
                </div>
            </aside>

            <div style={{flex:'1'}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center',marginBottom:'24px'}}>
                    <span style={{color:'#555', fontWeight:'bold'}}>Resultados para "<strong>Tênis</strong> - 389 produtos"</span>
                    <div>
                        <label style={{marginRight:'8px', fontSize:'14px', color:'#333'}}>Ordenar por: </label>
                        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
                            style={{border:'1px solid #ccc', borderRadius:'4px', padding:'8px', fontSize:'14px'}}
                            >
                            <option value="">Mais relevantes</option>
                            <option value="lowest">Menor preço</option>
                            <option value="highest">Maior preço</option>
                            <option value="newest">Mais recente</option>
                        </select>
                    </div>
                </div>
                <Section title="">                
                    <ProductListing/>
                </Section>
            </div>
        </div>
    )
} 
