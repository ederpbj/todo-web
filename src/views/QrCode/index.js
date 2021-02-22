import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Qr from 'qrcode.react';

//MEUS COMPONENTES 
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function QrCode() {
    return (
        <S.Container>
            <Header />
            <S.Content>
                <h1>CAPTURE QRCODE PELO APP</h1>
                <p>suas atividades serão sincronizadas com a do celular</p>
                <S.QrCodeArea>
                    <Qr value='getmacaddress' size={200} />
                </S.QrCodeArea>

                <S.ValidationCode>
                    <span>Digite a numeração que aparece no seu celular</span>
                    <input type="text" />
                    <button type="button">SINCRONIZAR</button>
                </S.ValidationCode>
            </S.Content>
            <Footer />
        </S.Container>
    );
}

export default QrCode;