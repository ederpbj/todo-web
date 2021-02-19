//useEffect é disparada toda vez que a tela é carregada 
import React, { useState, useEffect } from 'react';
import * as S from './styles';

//MEUS COMPONENTES 
import Header from '../../components/Header';
import Footer from '../../components/Footer';


import api from '../../services/api';

function Task() {
    //useState, atualiza o estado e notifica todos da aplicação
    const [filterActived, setFilterActived] = useState('all');

    //quantas tarefas tem atrasadas
    const [lateCount, setLateCount] = useState();

    //Tarefas atrasadas
    async function lateVerify() {
        await api.get(`/task/filter/late/11:1a:95:9d:68:16`)
            .then(response => {
                setLateCount(response.data.length)
            })
    }

    //Função para notificação
    function Notification() {
        setFilterActived('late');
    }

    //Toda vez que a tela recarregar, chame load tasks
    useEffect(() => {
        lateVerify(); //número de tarefas atrasadas
    }, [])

    return (
        <div className="App">
            <S.Container>
                {/*lateCount: passa a informação para outras páginas*/}
                <Header lateCount={lateCount} />
                <S.Form>

                </S.Form>
                <Footer />
            </S.Container>
        </div>
    );
}

export default Task;
