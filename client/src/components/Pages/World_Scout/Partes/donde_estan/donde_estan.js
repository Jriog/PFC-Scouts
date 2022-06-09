import { t } from 'i18next';
import React from 'react';
import './donde_estan.css';
import mapa_WOSM from "./map_wosm.jpg";

import { useTranslation } from 'react-i18next';
import '../../../../i18n.js';

function Donde_estan() {

  const { t, i18n } = useTranslation();
  
  return (
    <div id='D_E'>
      <br></br>
      <br></br>
      <br></br>
      <div className='grid grid-cols-5 gap5'>
        <div></div>
        <div className='col-span-2 DE'>
          <br></br>
          <br></br>
          <h1 id="titulo_movS">{t('where_t')}</h1>
          <br></br>
          <p>
            {t('txt_DE_1')}
          </p>
          <br></br>
          <p>
           {t('txt_DE_2')}
          </p>
          <br></br>
        </div>
        <div>
          <div><img class="mapa" src={mapa_WOSM}></img></div>
        </div>
      </div>
    </div>
  );
}

export default Donde_estan;