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
    display: flex;
    justify-content: center;
    /* height: 300px;
    background: red; */
`

export const ValidationCode = styled.div`
    display: flex;
    flex-direction: column; //uma coisa a baixo da outra
    margin: 10px;

    span{
        text-transform: uppercase; //tudo maiúsculo
        font-weight: bold;
    }    

    input{
        font-size: 18px;
        padding: 10px;
        text-align: center;
    }

    button{
        font-weight: bold;
        background:  #EE6B26;
        color: #FFF;
        font-size: 18px;
        padding: 10px;
        border-radius: 30px;
        border: none;
        cursor: pointer;
        margin-top: 10px;

        &:hover{
            color: #20295F;
        }
    }
`