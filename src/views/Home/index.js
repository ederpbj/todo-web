//useEffect é disparada toda vez que a tela é carregada 
import React, { useState, useEffect } from 'react';
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

    //Iniciando conexão com api
    async function loadTasks() {
        await api.get(`/task/filter/${filterActived}/11:1a:95:9d:68:16`)
            .then(response => {
                setTasks(response.data)
                console.log(response.data)
                console.log('<<<<<<<<<<<<<<<<<<<')

            })
    }

    //Toda vez que a tela recarregar, chame load tasks
    useEffect(() => {
        loadTasks(); //pega no DB
    }, [filterActived])

    return (
        <div className="App">
            <S.Container>
                <Header />
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
                    <h3>TAREFAS</h3>
                </S.Title>

                <S.Content>
                    {
                        //Pega tasks de forma dinâmica
                        taks.map(t => (
                            <TaskCard type={t.type} title={t.title} when={t.when} />
                        ))
                    }
                </S.Content>

                <Footer />
            </S.Container>
        </div>
    );
}

export default Home;
