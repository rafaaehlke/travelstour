import { Container, Form, Background } from './styles';
import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import { Input } from '../../components/input';
import { Button } from '../../components/Button'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Travels Tour</h1>
        <p>Aplicação para salvar e gerenciar seus passeios em viagem.</p>

        <h2>Faça seu login</h2>
        <Input placeholder="E-mail" type="text" icon={FiMail}></Input>
        <Input placeholder="Senha" type="password" icon={FiLock}></Input>

        <Button title="Entrar"></Button>
        <Link to="/register">Criar Conta</Link>

      </Form>

      <Background />
    </Container>
  )
}