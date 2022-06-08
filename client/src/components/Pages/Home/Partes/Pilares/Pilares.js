import React from 'react';
import './Pilares.css';
import pergamino from './images/pergaminoBG.png'

import { useTranslation } from 'react-i18next';
import '../../../../i18n.js';


function Pilares() {
  const { t, i18n } = useTranslation();
  return (
    <div className='h-screen '>
      <div id='pilares' class="grid grid-cols-12 content-center ...">
        <div class=""></div>
        <div class="h-96 grid grid-rows-6 col-span-2">
          <div class=""></div>
          <div class="textopilares">{t('el')} <b>método educativo</b> {t('texto_home2')}</div>
          <div class=""></div>
        </div>
        <div class=""></div>
        <div class=""></div>
        <div id='pilar1' class="pilar gap-2 col-span-2" >
        <b>Educación en</b>
        <br></br>
        <b>valores:</b>
        <br></br>
        <div>{t('texto_pilar_1')}</div>
        </div>

        <div id='pilar2'class="pilar gap-2  col-span-2">
          <b>{t('t_pilar_2_1')}</b>
          <br></br>
          <b>{t('t_pilar_2_2')}</b>
          <br></br>
          <div>{t('texto_pilar_2')}</div>
        </div>

        <div id='pilar3'class="pilar gap-2  col-span-2">
          <b>{t('t_pilar_3')}</b>
          <br></br>
          <b>autogestionada: </b>
          <br></br>
          <div>{t('texto_pilar_3')}</div>   
        </div>
        <div class=""></div>
        <div class=""></div>  
      </div>
    </div>
  );
}

export default Pilares;