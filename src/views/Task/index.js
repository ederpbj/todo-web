//useEffect é disparada toda vez que a tela é carregada 
import React, { useState, useEffect } from 'react';
import * as S from './styles';

//MEUS COMPONENTES 
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import typeIcons from '../../utils/typeIcons';


import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';




import api from '../../services/api';

function Task() {
    //useState, atualiza o estado e notifica todos da aplicação
    const [filterActived, setFilterActived] = useState('all');

    //quantas tarefas tem atrasadas
    const [lateCount, setLateCount] = useState();

    //captura o tipo do icone selecionado
    const [type, setType] = useState();

    //Tarefas atrasadas
    async function lateVerify() {
        await api.get(`/task/filter/late/11:1a:95:9d:68:16`)
            .then(response => {
                setLateCount(response.data.length)
            })
    }

    //Função para notificação
    function Notification() {
        setFilterActived('late');
    }

    //Toda vez que a tela recarregar, chame load tasks
    useEffect(() => {
        lateVerify(); //número de tarefas atrasadas
    }, [])

    return (
        <div className="App">
            <S.Container>
                {/*lateCount: passa a informação para outras páginas*/}
                <Header lateCount={lateCount} />
                <S.Form>
                    <S.TypeIcons>
                        {//mostra os icones a partir no elemento 1, descantando o zero
                            typeIcons.map((icon, index) => (
                                index > 0 &&
                                <button type="button" onClick={() => setType(index)}>
                                    <img src={icon} alt="Tipo da Tarefa"
                                        //Se type existir e for diferente de index, atribuir classe inative
                                        className={type && type != index && 'inative'} />
                                </button>
                            ))
                        }
                    </S.TypeIcons>

                    <S.Input>
                        <span>Título</span>
                        <input type="text" placeholder="Título da tarefa..."></input>
                    </S.Input>

                    <S.TextArea>
                        <span>Título</span>
                        <textarea rows={5} placeholder="Detalhes da tarefa..." />
                    </S.TextArea>

                    <S.Input>
                        <span>Data</span>
                        <input type="date" placeholder="Data"></input>
                        <img src={iconCalendar} alt="Calendário" />
                    </S.Input>

                    <S.Input>
                        <span>Hora</span>
                        <input type="time" placeholder="Hora"></input>
                        <img src={iconClock} alt="Hora" />
                    </S.Input>
                    <S.Options>
                        <div>
                            <input type="checkbox" />
                            <span>CONCLUÍDO</span>
                        </div>
                        <button type="button">EXCLUÍDO</button>
                    </S.Options>

                    <S.Save>
                        <button type="buttun">SALVAR</button>
                    </S.Save>

                </S.Form>
                <Footer />
            </S.Container>
        </div>
    );
}

export default Task;
