import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { Input } from '../../components/input'
import { Note } from '../../components/Note'
import { useState, useEffect } from 'react'
import { Tag } from '../../components/Tag'
import { api } from '../../services/api'


export function Home() {

  const [tags, setTags] = useState([])

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags")
      setTags(response.data)
    }
    fetchTags()
  }, [])
  return (
    <Container>
      <Brand>
        <h1>
          Travels Tour
        </h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            isActive />
        </li>
        {
          tags && tags.map(tag => (
            <li key={String(tag.id)}> 
              <ButtonText 
              title={tag.name}
               />  </li>

          ))
        }

      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo Destino" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <Note data={{
            title: 'Chile',
            tags: [
              { id: '1', name: 'Passeio' }
            ]
          }
          } />
        </Section>
      </Content>

      <NewNote to="/New">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}