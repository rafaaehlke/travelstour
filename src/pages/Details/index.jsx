import { Container, Links, Content } from "./styles"

import { Button } from "../../components/Button"
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'




export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>

          <ButtonText title="Excluir Nota" />

          <h1>
            Chile
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores repellendus dicta soluta illo rem corrupti qui
            possimus sequi laudantium officiis, rerum corporis dolorum nam similique repudiandae sint hic eligendi placeat!
          </p>

          <Section title="Links úteis">
            <Links>
              <li> <a href="#">Link 1</a> </li>
            </Links>
          </Section>

          <Section title="Marcadores">

            <Tag title="Chile" />
            <Tag title="Argentina" />

          </Section>
          <Button title="Voltar" />

        </Content>
      </main>
    </Container >
  )
}
