import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../hooks/auth"
import { api } from '../../services/api';

export function Header() {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()
  
  function handleSignOut() {
    navigate("/")
    signOut()
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container>
      <Profile to="/profile">
        <img
          src={avatarUrl}
          alt={user.name}
        />

        <div>
          <span>Bem Vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}