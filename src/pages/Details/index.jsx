import { useNavigate, useParams } from "react-router-dom"
import { ButtonText } from '../../components/ButtonText'
import { Container, Links, Content } from "./styles"
import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { Button } from "../../components/Button"
import { useState, useEffect } from "react"
import { Tag } from '../../components/Tag'
import { api } from "../../services/api"


export function Details() {
  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

  function handleBack(){
    navigate("/")
  }

  return (
    <Container>
      <Header />

      {
        data && //se tem conteudo mostra o data, se não, não renderiza
        <main>
          <Content>

            <ButtonText title="Excluir Nota" />

            <h1>
              {data.title}
            </h1>
            <p>
              {data.description}
            </p>

            {data.links &&
              <Section title="Links úteis">
                <Links>
                  {
                    data.links.map(link => (
                      <li key={String(link.id)}>
                        <a
                          href={link.url} target="_blanck">
                          {link.url}
                        </a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }

            {data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => (
                  <Tag 
                  key={String(tag.id)}
                  title={tag.name} />
                  ))
                }
              </Section>
            }
            <Button 
            title="Voltar"
            onClick={handleBack} />

          </Content>
        </main>
      }
    </Container >
  )
}
