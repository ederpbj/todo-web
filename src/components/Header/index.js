import React from 'react'

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';


import * as S from './styles';

function Header() {
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
                <a href="#" id="notification">
                    <img src={bell} alt="Notificação" />
                    <span>5</span>
                </a>
            </S.RightSide>
        </S.Container>
    );
}

export default Header;
