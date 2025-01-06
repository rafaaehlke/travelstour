import { ButtonText } from '../../components/ButtonText'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/input'
import { useNavigate } from 'react-router-dom'
import { Container, Form } from './styles'
import { api } from '../../services/api'
import { useState } from 'react'

export function New() {
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)  //volta uma rota anterior sem pesar no histórico de navegaçao
  }

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
    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText
              title="Voltar"
              onClick={handleBack} />
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