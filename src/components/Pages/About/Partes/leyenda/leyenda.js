import React from 'react';
import './leyenda.css';
import foto_SJyD from './SJyD.jpg'

function Leyenda() {
    return (
        <div id='leyenda'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div id='aboutUs' class=" grid grid-cols-5 gap-4">
                <div></div>
                <div className='col-span-3'>
                    <a className='titulo'>
                        San Jorge, Patrón de los Scouts
                    </a>
                    <br></br>
                    <br></br>
                    <p className='leyenda_p'>
                        Los ciudadanos tenían la obligación de entregar al dragón a varias personas de la ciudad con cierta regularidad.

                        Una de esas veces, le tocó a la hija del rey ser devorada por el dragón.

                        La dejaron junto a la fuente, sola.

                        En aquel momento pasó San Jorge por allí, mató al monstruo y rescató a la princesa, liberando a la ciudad de su castigo.

                        Se dice que en el lugar donde se derramó la sangre de la bestia creció una rosa roja.
                        <br></br>
                        <br></br>
                        Es una de las leyendas más extendidas del mundo, y la creencia en San Jorge y su historia existe en muchos países y culturas, adaptada a la religión correspondiente.
                        <br></br>
                        San Jorge tiene también mucha importancia como patrón y símbolo en muchas zonas y ciudades.

                        <br></br> <br></br>
                        Fue patrón de Inglaterra durante muchos años, es el ideal del caballero medieval y la llamada “cruz de San Jorge”
                        (roja sobre fondo blanco, a veces con los extremos rematados por flores de Lis)
                        está presente en muchas banderas, entre ellas la de Reino Unido y la de Cataluña.

                        <br></br> <br></br>
                        Baden Powell eligió a San Jorge como patrón de los scouts de todo el mundo.
                        En “<a href='https://es.wikipedia.org/wiki/Escultismo_para_muchachos'>Escultismo para muchachos</a>” escribió lo siguiente sobre el santo:
                        “Tenían por patrón (los Caballeros de la Mesa Redonda) a San Jorge, porque éste era el único santo a caballo.
                        Es el santo patrón de la Caballería y de Inglaterra.
                    </p>

                    <br></br>
                    <br></br>
                </div>
                <div></div>
            </div>
            <div class="grid grid-cols-5 gap-4"><div></div><div className='col-span-3'><img src={foto_SJyD} alt='' className='foto_desription' /></div></div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}

export default Leyenda;