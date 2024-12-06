import { Container, Form, Background } from './styles';
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom';


import { Input } from '../../components/input';
import { Button } from '../../components/Button'

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Travels Tour</h1>
        <p>Aplicação para salvar e gerenciar seus passeios em viagem.</p>

        <h2>Crie sua conta</h2>
        <Input placeholder="Nome" type="text" icon={FiUser}></Input>
        <Input placeholder="E-mail" type="text" icon={FiLock}></Input>
        <Input placeholder="Senha" type="password" icon={FiMail}></Input>


        <Button title="Cadastrar"></Button>
        <Link to="/">Voltar para o login</Link>

      </Form>

    </Container>
  )
}