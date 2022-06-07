import { Balance } from './components/Balance';
import { Spending } from './components/Spending';
import { Container } from './styles/App';

function App() {
  return (
    <Container>
      <Balance />
      <Spending />
    </Container>
  );
}

export default App;
