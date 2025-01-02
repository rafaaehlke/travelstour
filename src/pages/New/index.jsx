import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/input'
import { Container, Form } from './styles'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { TbUvIndex } from 'react-icons/tb'

export function New() {
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  function handleAddLink() {
    setLinks(beforeState => [...beforeState, newLink])
    setNewLink("")
  }

  function handleRemoveLink(deleted) {
    setLinks(beforeState => beforeState.filter(link => link !== deleted))
  }

  function handleAddTag() {
    setTags(beforeState => [...beforeState, newTag])
    setNewTags("")
  }

  function HandleRemoveTag(deleted) {
    setTags(beforeState => beforeState.filter(tag => tag !== deleted))
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

          <Input placeholder="Titulo" />

          <Textarea placeholder="Observações" />

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
                    onClick={() => HandleRemoveTag(tag)}
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

          <Button title="Salvar" />
        </Form>
      </main>

    </Container >
  )
}