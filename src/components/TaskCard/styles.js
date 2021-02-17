import styled from 'styled-components';

export const Container = styled.div`
    width: 250px;
    height: 200px;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75); // Gerado no box-shadow
    border-radius: 10px;

    display: flex;
    align-items: center; //centraliza na vertical
    justify-content: center; // centraliza na horizontal
    flex-direction: column;

    margin: 20px;

    cursor: pointer; //mouse vira mão
    transition: all 0.3s ease;

    &:hover{
        opacity: 0.5;
    }

`
export const TopCard = styled.div`
    display: flex;
    align-items: center; //centraliza na vertical
    justify-content: center; // centraliza na horizontal
    flex-direction: column;

`
export const BottomCard = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-around;
   
   strong {
       color: #EE6B26; //cor do texto
       font-weight: bold; //negrito
   }

   span {
       color: #707070;
   }
`
