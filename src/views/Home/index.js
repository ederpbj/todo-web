//useEffect é disparada toda vez que a tela é carregada 
import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as S from './styles';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

//MEUS COMPONENTES 
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';


function Home() {
    //useState, atualiza o estado e notifica todos da aplicação
    const [filterActived, setFilterActived] = useState('all');

    //Armazenar o response, em uma coleção vazia
    const [tasks, setTasks] = useState([]);

    const [redirect, setRedirect] = useState(false);

    //quantas tarefas tem atrasadas
    //const [lateCount, setLateCount] = useState();

    //Iniciando conexão com api
    async function loadTasks() {
        await api.get(`/task/filter/${filterActived}/${isConnected}`)
            .then(response => {
                setTasks(response.data)
            })
    }

    //Tarefas atrasadas
    /*
    async function lateVerify() {
        await api.get(`/task/filter/late/11:1a:95:9d:68:16`)
            .then(response => {
                setLateCount(response.data.length)
            })
    }
    */

    //Função para notificação
    function Notification() {
        setFilterActived('late');
    }


    //Toda vez que a tela recarregar, chame load tasks
    useEffect(() => {
        loadTasks(); //pega no DB

        if (!isConnected)
            setRedirect(true);

        //lateVerify(); //número de tarefas atrasadas
    }, [filterActived, loadTasks])

    return (
        <div className="App">
            <S.Container>
                {/*lateCount: passa a informação para outras páginas*/}
                {/*redirect && <Redirect to="/qrcode" />*/}
                <Header clickNotification={Notification} />

                <S.FilterArea>
                    <button type="button" onClick={() => setFilterActived("all")}>
                        <FilterCard title="Todos" actived={filterActived == 'all'} />
                    </button>
                    <button type="button" onClick={() => setFilterActived("today")}>
                        <FilterCard title="Hoje" actived={filterActived == 'today'} />
                    </button>
                    <button type="button" onClick={() => setFilterActived("week")}>
                        <FilterCard title="Semana" actived={filterActived == 'week'} />
                    </button>
                    <button type="button" onClick={() => setFilterActived("month")}>
                        <FilterCard title="Mês" actived={filterActived == 'month'} />
                    </button>
                    <button type="button" onClick={() => setFilterActived("year")}>
                        <FilterCard title="Ano" actived={filterActived == 'year'} />
                    </button>
                </S.FilterArea>

                <S.Title>
                    <h3>{filterActived === 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h3>
                </S.Title>

                <S.Content>
                    {
                        //Pega tasks de forma dinâmica
                        tasks.map(t => (
                            <Link to={`/task/${t._id}`}>
                                <TaskCard type={t.type} title={t.title} when={t.when} done={t.done} />
                            </Link>
                        ))
                    }
                </S.Content>

                <Footer />
            </S.Container>
        </div>
    );
}

export default Home;
