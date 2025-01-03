import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/input'
import { useNavigate } from 'react-router-dom'
import { Container, Form } from './styles'
import { api } from '../../services/api'
import { Link } from 'react-router-dom';
import { useState } from 'react'

export function New() {
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const navigate = useNavigate()

  function handleAddLink() {
    setLinks(beforeState => [...beforeState, newLink])
    setNewLink("")
  }

  function handleRemoveLink(deleted) {
    setLinks(beforeState => beforeState.filter(link => link !== deleted))
  }

  function handleAddTag() {
    setTags(beforeState => [...beforeState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(beforeState => beforeState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Campo titulo em branco, favor adicione um titulo para a sua nota")
    }
    if (newLink) {
      return alert("Você não adicionou um link")
    }

    if (newTag) {
      return alert("Você não adicionou a tag, clique para adicionar!")
    }
    await api.post("/notes", {
      title,
      description,
      tags,
      links
    })

    alert("Nota criada com sucesso!")
    navigate("/")
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input
            placeholder="Titulo"
            onChange={e => setTitle(e.target.value)}
          />

          <Textarea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {
              links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              ))
            }
            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />

          </Section>


          <Section title="Marcadores">
            <div className='tags'>

              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }

              <NoteItem
                isNew
                placeholder="Nova tag"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />

            </div>
          </Section>

          <Button
            title="Salvar"
            onClick={handleNewNote}
          />
        </Form>
      </main>

    </Container >
  )
}