import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Qr from 'qrcode.react';
import { Redirect } from 'react-router-dom';

//MEUS COMPONENTES 
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function QrCode() {
    const [mac, setMac] = useState();
    const [redirect, setRedirect] = useState();

    async function SaveMac() {
        //Se o que tem no mac for vazio
        if (!mac) {
            alert('Você precisa informar o número que apareceu no celular!')
        } else {
            //armazena informações dentro do navegador
            //o que eu quero aramzenar
            await localStorage.setItem('@todo/macaddress', mac);

            //para fazer redirecionamento
            setRedirect(true);

            //refresh na página
            window.location.reload();
        }
    }

    return (
        <S.Container>
            {/* Se redirect for verdadeiro redireciona */}
            {redirect && <Redirect to="/" />}
            <Header />
            <S.Content>
                <h1>CAPTURE QRCODE PELO APP</h1>
                <p>suas atividades serão sincronizadas com a do celular</p>
                <S.QrCodeArea>
                    <Qr value='getmacaddress' size={200} />
                </S.QrCodeArea>

                <S.ValidationCode>
                    <span>Digite a numeração que aparece no seu celular</span>
                    {/* Estado que pega o endereço armazenado */}
                    <input type="text" onChange={e => setMac(e.target.value)} />
                    <button type="button" onClick={SaveMac}>SINCRONIZAR</button>
                </S.ValidationCode>
            </S.Content>
            <Footer />
        </S.Container>
    );
}

export default QrCode;