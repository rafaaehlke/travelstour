import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { Input } from '../../components/input'
import { Note } from '../../components/Note'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'


export function Home() {

  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
  const [search, setSearchSelected] = useState("")
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  function handleTagSelected(tagName) {
    if(tagName === "all"){
      return setTagsSelected([])
    }

    const alreadySelected = tagsSelected.includes(tagName)

    if (alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== tagName)
      setTagsSelected(filteredTags)
    } else {
      setTagsSelected(beforeState => [...beforeState, tagName])

    }
  }

  function handleDetails(id){
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags")
      setTags(response.data)
    }
    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`) //envia o title dentro de search e tags passando dentro do estado tagsSelected
      setNotes(response.data)
    }

    fetchNotes()
  }, [tagsSelected, search])


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
            onClick={() => handleTagSelected("all")}
            isActive={tagsSelected.length === 0}
          />
        </li>
        {
          tags && tags.map(tag => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              />
            </li>

          ))
        }

      </Menu>

      <Search>
        <Input
          placeholder="Pesquisar pelo Destino"
          icon={FiSearch}
          onChange={(e) => setSearchSelected(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas Notas">
          {
            notes.map(note => (
              <Note
                key={String(note.id)}
                data={note} 
                onClick={() => handleDetails(note.id)}   
              />
            ))
          }
    
        </Section>
      </Content>

      <NewNote to="/New">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}