import React, { useState } from 'react';
import Footer from "../components/Footer";
import '../Bitacora/bitacora.css'
import Article from "../Bitacora/Article";
import reunionesData from '../Bitacora/reuniones.json'

const Bitacora = () => {
    const [allOpen, setAllOpen] = useState(false);

    const toggleAll = () => setAllOpen(prev => !prev);

    return (
        <main id="app" className="page-content bitacoraBackground" style={{paddingTop:"2rem"}}>
            <section className="containerBitacora sectionBitacora bitacoraStyle" style={{marginTop:"0"}}>
                <h2>
                    Bitácora
                </h2>
                <div className="btnpadding" style={{textAlign: 'left', marginBottom: '1rem'}}>
                    <button style={{padding:"1rem"}} onClick={toggleAll}>
                        {allOpen ? 'Contraer Entradas' : 'Expandir Entradas'}
                    </button>
                </div>

                <section id="sectionBitacora">
                {reunionesData.map(reunion => (
                    <Article
                    key={reunion.id}
                    titulo={reunion.titulo}
                    fecha={reunion.fecha}
                    info={reunion.info}
                    open={allOpen}
                    />
                ))}
                </section>
            </section>
            <Footer/>
        </main>
    );
}

export default Bitacora;