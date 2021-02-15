import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 50px;
    background: #20295F;
    display: flex;
    border-top: 5px solid #EE6B26;

    position: fixed;

    display: flex;

    bottom: 0; //mantem alinhado com rodapé

    align-items: center; //centraliza na vertical
    justify-content: center; // centraliza na horizontal

    span {
        color: #FFF; //mudar cor do texto
    }
`
