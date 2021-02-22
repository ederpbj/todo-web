import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

//recuperar a propriedade lateCount e clickNotification lá de home
function Header({ clickNotification }) {
    const [lateCount, setLateCount] = useState();

    //Foi removido das views, veio para components
    async function lateVerify() {
        //await api.get(`/task/filter/late/${isConnected}`)
        await api.get(`/task/filter/late/${isConnected}`)
            .then(response => {
                setLateCount(response.data.length)
            })
    }

    //Vai na api e busca as informações
    useEffect(() => {
        lateVerify();
    })

    async function Logout() {
        localStorage.removeItem('@todo/macaddress');
        window.location.reload();
    }

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

                {!isConnected ?
                    <Link to="/qrcode">SINCRONIZAR CELULAR</Link>
                    :
                    <button type="button" onClick={Logout}>SAIR</button>
                }
                {
                    //só mostra o sino se tiver tarefa atrasada
                    lateCount &&
                    <>
                        <span className="dividir" />
                        <button onClick={clickNotification}>
                            <img src={bell} alt="Notificação" />
                            <span>{lateCount}</span>
                        </button>
                    </>
                }
            </S.RightSide>
        </S.Container>
    );
}

export default Header;
