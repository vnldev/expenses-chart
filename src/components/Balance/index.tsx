import { ReactComponent as Logo } from '../../../public/logo.svg';
import { Container } from './styles';

export function Balance() {
  return (
    <Container>
      <section>
        <h1>My balance</h1>
        <span>$921.48</span>
      </section>
      <Logo />
    </Container>
  );
}
