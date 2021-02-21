import React, { useMemo } from 'react'
import { format } from 'date-fns';
import * as S from './styles';

//import iconDefault from '../../assets/default.png'; //Deixei de usar

import typeIcons from '../../utils/typeIcons';


function TaskCard({ type, title, when, done }) {
    //Converte data em formato de texto para formato de data
    const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'));
    const hour = useMemo(() => format(new Date(when), 'HH:mm'));

    return (
        <S.Container done={done}>
            <S.TopCard>
                <img src={typeIcons[type]} alt="Icone da tarefa" />
                <h3>{title}</h3>
            </S.TopCard>
            <S.BottomCard>
                <strong>{date}</strong>
                <span>{hour}</span>
            </S.BottomCard>
        </S.Container>
    );
}

export default TaskCard;
