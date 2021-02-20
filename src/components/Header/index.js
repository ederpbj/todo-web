import React from 'react'

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';


import * as S from './styles';

import { Link } from 'react-router-dom';

//recuperar a propriedade lateCount e clickNotification lá de home
function Header({ lateCount, clickNotification }) {
    return (
        <S.Container>
            <S.LeftSide>
                <Link to="/"><img src={logo} alt="Logo" /></Link>
            </S.LeftSide>
            <S.RightSide>
                <Link to="/">INÍCIO</Link>
                <span className="dividir" />
                <Link to="/task">NOVA TAREFA</Link>
                <span className="dividir" />
                <Link to="/sync">SINCRONIZAR COM CELULAR</Link>
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
