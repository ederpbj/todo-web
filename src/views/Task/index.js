//useEffect é disparada toda vez que a tela é carregada 
import React, { useState, useEffect } from 'react';
import * as S from './styles';

//MEUS COMPONENTES 
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import typeIcons from '../../utils/typeIcons';
import { format } from 'date-fns';


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

    //id da tarefa
    const [id, setId] = useState();

    //tarefa concluída ou não
    const [done, setDone] = useState(false);

    //Dados do form
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [macaddress, setMacaddress] = useState('11:1a:95:9d:68:16');

    //Tarefas atrasadas
    async function lateVerify() {
        await api.get(`/task/filter/late/11:1a:95:9d:68:16`)
            .then(response => {
                setLateCount(response.data.length)
            })
    }

    //Tarefas atrasadas
    async function LoadTaskDetails({ match }) {
        //Pega o id da tarefa que chega pela url
        await api.get(`/task/${match.params.id}`)
            .then(response => {
                setType(response.data.type)
                setTitle(response.data.title)
                setDescription(response.data.description)
                setDate(format(new Date(response.data.when)), 'yyyy-MM-dd')
                setHour(format(new Date(response.data.when)), 'HH:mm')
            })
    }

    //Salva formulário, chamado pelo botão SALVAR
    async function Save() {
        await api.post('/task', {
            macaddress,
            type,
            title,
            description,
            when: `${date}T${hour}:00.000`,
        }).then(() => {
            alert('TAREFA CADASTRADA COM SUCESSO!')
        })
    }

    //Toda vez que a tela recarregar, chame load tasks
    useEffect(() => {
        lateVerify(); //número de tarefas atrasadas
        //LoadTaskDetails(); //carrega os dados pelo id
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
                        <input type="text" placeholder="Título da tarefa..."
                            //captura o input em tempo real
                            onChange={e => { setTitle(e.target.value) }} value={title} />
                    </S.Input>

                    <S.TextArea>
                        <span>Descrição</span>
                        <textarea rows={5} placeholder="Detalhes da tarefa..."
                            onChange={e => { setDescription(e.target.value) }} value={description} />
                    </S.TextArea>

                    <S.Input>
                        <span>Data</span>
                        <input type="date" placeholder="Data"
                            onChange={e => { setDate(e.target.value) }} value={date} />
                        <img src={iconCalendar} alt="Calendário" />
                    </S.Input>

                    <S.Input>
                        <span>Hora</span>
                        <input type="time" placeholder="Hora"
                            onChange={e => { setHour(e.target.value) }} value={hour} />
                        <img src={iconClock} alt="Hora" />
                    </S.Input>
                    <S.Options>
                        <div>
                            <input type="checkbox" checked={done} onChange={() => setDone(!done)} />
                            <span>CONCLUÍDO - {done ? 'concluído' : 'falso'}</span>
                        </div>
                        <button type="button">EXCLUÍDO</button>
                    </S.Options>

                    <S.Save>
                        <button type="button" onClick={Save}>SALVAR</button>
                    </S.Save>

                </S.Form>
                <Footer />
            </S.Container>
        </div>
    );
}

export default Task;
