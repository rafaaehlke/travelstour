import { Container } from './styles';

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container>

      {/* Verifica se tem um icone, se nao tiver nao mostra */}
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  )
}