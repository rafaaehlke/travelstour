import { Container, Form, Avatar } from './styles';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Input } from '../../components/input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>

        <Avatar>
          <img src="https://github.com/rafaaehlke.png" alt="Foto do Usuário"></img>

          <label htmlFor="avatar"> 
            <FiCamera /> 
            <input id='avatar' type="file" />
            </label>
        </Avatar>

        <Input placeholder="Nome" type="text" icon={FiUser}></Input>
        <Input placeholder="E-mail" type="text" icon={FiMail}></Input>
        <Input placeholder="Senha Atual" type="password" icon={FiLock}></Input>
        <Input placeholder="Nova Senha" type="password" icon={FiLock}></Input>

        <Button title="Salvar"></Button>
      </Form>
    </Container>
  )
}