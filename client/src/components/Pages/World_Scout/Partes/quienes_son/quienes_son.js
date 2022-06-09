import React from 'react';
import './quienes_son.css';
import foto_QS from './scouts.jpg';
import { useTranslation } from 'react-i18next';
import '../../../../i18n.js';

function Quienes_son() {
    const { t, i18n } = useTranslation();
    return (
        <div id='Q_S' className=''>
            <div className='grid grid-cols-5 gap5'>
                <div></div>
                <div className='col-span-2'>
                    <br></br>
                    <h1 id="titulo_movS">{t('mov_scout')}</h1>
                    <br></br>
                    <p>
                        {t('mov_scout_txt_1')}
                    </p>
                    <br></br>
                    <p>
                        <h3><b>{t('tittle_mision')}</b></h3>
                       {t('text_mision')}
                    </p>
                    <br></br>
                    <ul>
                        <li type='disc'>{t('li_mision_1')}</li>
                        <li type='disc'>{t('li_mision_2')}</li>
                        <li type='disc'>{t('li_mision_3')}</li>
                        <li type='disc'>{t('li_mision_4')}</li>
                    </ul>
                    
                </div>

                <div>
                    <div><img class="QS" src={foto_QS}></img></div>
                </div>
            </div>
            <br></br>
            <br></br>
        </div>
    );
}

export default Quienes_son;