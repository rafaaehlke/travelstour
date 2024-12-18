import { Container, Form, Background } from './styles';
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'; // hook para criar estado

import { api } from "../../services/api"

import { Input } from '../../components/input';
import { Button } from '../../components/Button'

export function SignUp() {
  // dentro do parentes definimos um valor inicial, nesse caso um texto vazio, dentro do vetor
  // retorna o valor atual do estado e o segundo acessa funcao para atualizar o estado, sempre usamos set + nome do estado.
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = new useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos")
      navigate("/")
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso")
      })
      .catch(e => {
        if (e.response) {
          alert(e.response.data.message)
        } else {
          alert("Não foi possível cadastrar")
        }
      })
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Travels Tour</h1>
        <p>Aplicação para salvar e gerenciar seus passeios em viagem.</p>

        <h2>Crie sua conta</h2>
        <Input placeholder="Nome" type="text" icon={FiUser} onChange={e => setName(e.target.value)}></Input>
        <Input placeholder="E-mail" type="text" icon={FiLock} onChange={e => setEmail(e.target.value)}></Input>
        <Input placeholder="Senha" type="password" icon={FiMail} onChange={e => setPassword(e.target.value)}></Input>


        <Button title="Cadastrar" onClick={handleSignUp}></Button>
        <Link to="/">Voltar para o login</Link>

      </Form>

    </Container>
  )
}