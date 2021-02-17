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

    button {
        background: none;
        border: none;
    }
`

// export const Button = styled.button`
//     background: none;
//     border: none;
// `

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap; //se não cabe na linha vai para baixo
    justify-content: center;
`

export const Title = styled.div`
    width: 100%;
    border-bottom: 1px solid #20295F;
    //text-align: center; //não deu certo
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    h3{
        color: #20295F;
        position: relative;
        top: 30px;
        background: #FFF;
        padding: 0 20px;
    }
`
