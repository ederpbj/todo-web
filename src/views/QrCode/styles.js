import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; //tipo colula
    align-items: center; //alinhar ao centro
`
export const Content = styled.div`
    width: 50%;
    //Centralizar
    display: flex;
    flex-direction: column; //tipo colula
    align-items: center; //alinhar ao centro

    h1{
        color: #EE6B26;
    }

    p {
        color: #20295F;
    }
`
export const QrCodeArea = styled.div`
    width: 100%;
    height: 300px;
    background: red;
`