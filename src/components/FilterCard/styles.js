import styled from 'styled-components';

export const Container = styled.div`
    width: 220px; //origin 300 - descontando os 10px do padding
    height: 70px; //origin 100 - menos os 10px do padding
    padding: 10px; //afasta das bordas os componentes internos do card
    background: ${props => props.actived ? '#EE6B26' : '#20295F'} ; //se actived for true fica laranja
    border-radius: 5px; //borda arredondada do cartão
    display: flex;
    flex-direction: column; //coloca um a baixo do outro, objetos
    justify-content: space-around; // centraliza na tela
    cursor: pointer; //ao passar mouse aparece a mãozinha

    img {
        width: 25px;
        height: 25px;
    }

    span {
        color: #FFF;
        font-weight: bold;
        align-self: flex-end; //alinha a direita, no final do card
        font-size: 18px; //tamanho do texto
    }

    &:hover {
        background: #EE6B26; //mudar cor quando passar mouse
    }

   
`
