import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { Tag } from '../../components/Tag'




import { ButtonText } from '../../components/ButtonText'


export function Home() {
  return (
    <Container>
      <Brand>
        <h1>
          Travels Tour
        </h1>
      </Brand>

      <Header />

      <Menu>
        <li> <ButtonText title="Destinos" />  </li>
        <li> <ButtonText title="Passeios" />  </li>

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