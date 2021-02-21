//useEffect é disparada toda vez que a tela é carregada 
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import * as S from './styles';
import { format } from 'date-fns';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

//MEUS COMPONENTES 
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import typeIcons from '../../utils/typeIcons';

import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

function Task({ match }) {
    const [redirect, setRedirect] = useState(false);

    //captura o tipo do icone selecionado
    const [type, setType] = useState();

    const [id, setId] = useState();

    //tarefa concluída ou não
    const [done, setDone] = useState(false);

    //Dados do form
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();

    //Função para carregar os detalhes da API
    //match : tras as informções de parametro de navegação
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function LoadTaskDetails() {
        //Pega o id da tarefa que chega pela url
        await api.get(`/task/${match.params.id}`)
            // await api.get(`/task/${match.params.id}`)
            .then(response => {
                setType(response.data.type)
                setDone(response.data.done)
                setTitle(response.data.title)
                setDescription(response.data.description)
                setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
                setHour(format(new Date(response.data.when), 'HH:mm'))
            })
    }

    //Salva formulário, chamado pelo botão SALVAR
    async function Save() {
        //Validação dos dados
        if (!title)
            return alert("Você precisa informar o título da terefa")
        else if (!description)
            return alert("Você precisa informar a descrição da terefa")
        else if (!type)
            return alert("Você precisa selecionar o tipo da terefa")
        else if (!date)
            return alert("Você precisa definir a data da terefa")
        else if (!hour)
            return alert("Você precisa definir a hora da terefa")


        //Se tem um id, é para atualizar, se não cadastra novo
        if (match.params.id) {
            console.log('>>>>> Aqui <<<<<')

            //Atualizar, pelo id
            // await api.put(`/task/${match.params.id}`, {
            await api.put(`/task/${match.params.id}`, {
                macaddress: isConnected,
                done,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`
            }).then(() =>
                setRedirect(true)
            )

        } else {
            //Cadastrar novo
            await api.post('/task', {
                macaddress: isConnected,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`
            }).then(() =>
                setRedirect(true)
            ).catch(response => {
                alert(response.data.error)
            })
        }
    }

    async function Remove() {
        //windows abre uma janela de confirmação
        const res = window.confirm('Deseja realmente remover a tarefa?')
        if (res == true) {
            await api.delete(`/task/${match.params.id}`)
                //Se der tudo certo, redireciona para página inicial
                .then(() => setRedirect(true));
        }

        //Antigo
        /*
        if(res == true){
            alert('ok, vamos remover')
        }else{
            alert('tudo bem, vamos manter')
        }
        */
    }

    //Toda vez que a tela recarregar, chame load tasks
    useEffect(() => {
        if (!isConnected)
            setRedirect(true);
        LoadTaskDetails(); //carrega os dados pelo id
    }, [LoadTaskDetails])

    return (
        <S.Container>
            {/*se redirect for tru, ele redireciona */}
            { /* redirect && <Redirect to="/" /> */}
            {/*lateCount: passa a informação para outras páginas*/}
            <Header />
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
                    {/* Se existir o math aparece botão EXCLUIR*/}
                    {match.params.id && <button type="button" onClick={Remove}>EXCLUIR</button>}
                </S.Options>

                <S.Save>
                    <button type="button" onClick={Save}>SALVAR</button>
                </S.Save>

            </S.Form>
            <Footer />
        </S.Container>
    );
}

export default Task;
