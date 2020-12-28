import React, { useState, useEffect } from 'react';
import * as S from './styles';

import api from '../../services/api';

//nossos componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard'

function Home() {
  const [filterActived, setFilterActived] = useState('all');

  /**Uma variavel para guardar temporariamente todas as informações que veio da api */
  const[tasks, setTasks] = useState([]);

  /**Carregar os dados da api */
  async function loadTasks(){
    await api.get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
    .then(response =>{
      setTasks(response.data)
      console.log(response.data)
    })
  }
  
  /** */
  /**ATENÇÂO: Caso não apareça nada do back para p front, muito possivelmente vc esqueceu de configurar o CORS
   * CORS e o que permite que as aplicações se conversem, então volte la no backend e configure a pasta
   * primeira coisa na pasta backend abra o terminal e instale o cors
   * 'npm install cors'
   * Agr vá ate o index do backend e crie uma variavel lá do cors
   * 'const cors = require('cors');'
   * agr utilize ele
   * 'server.use(cors());'
  */
  /** */

  /**E uma função do react para que toda vez que a tela recarregar ele faça alguma coisa */
  /**nesse caso o react quando recarregar a pagina
   * vai chamar o loadTasks para que busque as informações na api
   * e quando o estado do filtro muda o filterActived ele vai recarregar a pagina 
   * so que com outras informaçoes do banco dependendo do filtro que foi escolhido
   */
  useEffect(() =>{
    loadTasks();
  }, [filterActived])


  return (
    <S.Container>
        <Header/>
          <S.FilterArea>
            <button type="button" onClick={() => setFilterActived("all")}>
              <FilterCard title="Todos" actived={filterActived === 'all'}/>
            </button>
            <button type="button" onClick={() => setFilterActived("today")}>
              <FilterCard title="Hoje" actived={filterActived === 'today'}/>
            </button>
            <button type="button" onClick={() => setFilterActived("week")}>
              <FilterCard title="Semana" actived={filterActived === 'week'}/>
            </button>
            <button type="button" onClick={() => setFilterActived("month")}>
              <FilterCard title="Mês" actived={filterActived === 'month'}/>
            </button>
            <button type="button" onClick={() => setFilterActived("year")}>
              <FilterCard title="Ano" actived={filterActived === 'year'}/> 
            </button>
          </S.FilterArea>

          <S.Title>
              <h2>TAREFAS</h2>
          </S.Title>

          <S.Content>
            {
              /**o map ele vai percorrer item por item */
              tasks.map(t => (
                <TaskCard type={t.type} title={t.title} when={t.when} />
              ))
            }
          </S.Content>  
        <Footer/>
    </S.Container>
  )
}

export default Home;
