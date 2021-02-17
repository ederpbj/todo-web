import React, { useState } from 'react'
import * as S from './styles';

//MEUS COMPONENTES 
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';


function Home() {
    //useState, atualiza o estado e notifica todos da aplicação
    const [filterActived, setFilterActived] = useState();

    return (
        <div className="App">
            <S.Container>
                <Header />
                <S.FilterArea>
                    <S.Button type="button" onClick={() => setFilterActived("all")}>
                        <FilterCard title="Todos" actived={filterActived === 'all'} />
                    </S.Button>
                    <S.Button type="button" onClick={() => setFilterActived("today")}>
                        <FilterCard title="Hoje" actived={filterActived === 'today'} />
                    </S.Button>
                    <S.Button type="button" onClick={() => setFilterActived("week")}>
                        <FilterCard title="Semana" actived={filterActived === 'week'} />
                    </S.Button>
                    <S.Button type="button" onClick={() => setFilterActived("month")}>
                        <FilterCard title="Mês" actived={filterActived === 'month'} />
                    </S.Button>
                    <S.Button type="button" onClick={() => setFilterActived("year")}>
                        <FilterCard title="Ano" actived={filterActived === 'year'} />
                    </S.Button>
                </S.FilterArea>
                <Footer />
            </S.Container>
        </div>
    );
}

export default Home;
