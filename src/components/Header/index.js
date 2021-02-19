import React from 'react'

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';


import * as S from './styles';

//recuperar a propriedade lateCount e clickNotification lá de home
function Header({ lateCount, clickNotification }) {
    return (
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt="Logo" />
            </S.LeftSide>
            <S.RightSide>
                <a href="#">INÍCIO</a>
                <span className="dividir" />
                <a href="#">NOVA TAREFA</a>
                <span className="dividir" />
                <a href="#">SINCRONIZAR COM CELULAR</a>
                <span className="dividir" />
                {/* <button onClick={clickNotification} id="notification"> id não usado*/}
                <button onClick={clickNotification} id="notification">
                    <img src={bell} alt="Notificação" />
                    <span>{lateCount}</span>
                </button>
            </S.RightSide>
        </S.Container>
    );
}

export default Header;
