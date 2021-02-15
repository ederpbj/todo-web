import React from 'react'
import * as S from './styles';

//MEUS COMPONENTES 
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function Home() {
    return (
        <div className="App">
            <S.Container>
                <Header />
                <Footer />
            </S.Container>
        </div>
    );
}

export default Home;
