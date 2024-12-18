import { Container, Form, Background } from './styles';
import { Button } from '../../components/Button'
import { FiMail, FiLock } from 'react-icons/fi'
import { Input } from '../../components/input';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export function SignIn() {

  const data = useAuth()
  console.log("Meu contexto =>", data)

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