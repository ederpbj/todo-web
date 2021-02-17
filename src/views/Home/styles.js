import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`
export const FilterArea = styled.div`
    width: 100%;
    display: flex; //coloca os cartões um ao lado do outro
    justify-content: space-around; //espaço entre os cartões
    flex-wrap: wrap; //ao diminuir a tela, cartões mantem o padrão, ficam um a baixo do outro
    margin-top: 30px; //Distância da margem para topo
`

export const Button = styled.button`
    background: none;
    border: none;
`