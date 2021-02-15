import React from 'react'
import * as S from './styles';

//MEUS COMPONENTES 
import Header from '../../components/Header';


function Home() {
    return (
        <div className="App">
            <S.Container>
                <Header />
            </S.Container>
        </div>
    );
}

export default Home;
