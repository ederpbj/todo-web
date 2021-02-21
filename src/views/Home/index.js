//useEffect é disparada toda vez que a tela é carregada 
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

//MEUS COMPONENTES 
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

import api from '../../services/api';


function Home() {
    //useState, atualiza o estado e notifica todos da aplicação
    const [filterActived, setFilterActived] = useState('all');

    //Armazenar o response, em uma coleção vazia
    const [taks, setTasks] = useState([]);

    //quantas tarefas tem atrasadas
    const [lateCount, setLateCount] = useState();

    //Iniciando conexão com api
    async function loadTasks() {
        await api.get(`/task/filter/${filterActived}/11:1a:95:9d:68:16`)
            .then(response => {
                setTasks(response.data)
                //console.log(response.data)
                //console.log('<<<<<<<<<<<<<<<<<<<')

            })
    }

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
        loadTasks(); //pega no DB
        lateVerify(); //número de tarefas atrasadas
    }, [filterActived])

    return (
        <div className="App">
            <S.Container>
                {/*lateCount: passa a informação para outras páginas*/}
                <Header lateCount={lateCount} clickNotification={Notification} />
                <S.FilterArea>
                    <button type="button" onClick={() => setFilterActived("all")}>
                        <FilterCard title="Todos" actived={filterActived === 'all'} />
                    </button>
                    <button type="button" onClick={() => setFilterActived("today")}>
                        <FilterCard title="Hoje" actived={filterActived === 'today'} />
                    </button>
                    <button type="button" onClick={() => setFilterActived("week")}>
                        <FilterCard title="Semana" actived={filterActived === 'week'} />
                    </button>
                    <button type="button" onClick={() => setFilterActived("month")}>
                        <FilterCard title="Mês" actived={filterActived === 'month'} />
                    </button>
                    <button type="button" onClick={() => setFilterActived("year")}>
                        <FilterCard title="Ano" actived={filterActived === 'year'} />
                    </button>
                </S.FilterArea>

                <S.Title>
                    <h3>{filterActived === 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h3>
                </S.Title>

                <S.Content>
                    {
                        //Pega tasks de forma dinâmica
                        taks.map(t => (
                            <Link to={`/task/${t._id}`}>
                                <TaskCard type={t.type} title={t.title} when={t.when} />
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
