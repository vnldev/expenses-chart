import { Chart } from '../Chart';
import { Container } from './styles';
import data from '../../data.json';

export function Spending() {
  return (
    <Container>
      <h1>Spending - Last 7 days</h1>
      <section>
        <Chart spendingData={data} />
      </section>
      <footer>
        <section>
          <p>Total this month</p>
          <h2>$478.33</h2>
        </section>
        <section>
          <strong>+2.4%</strong>
          <p>from last month</p>
        </section>
      </footer>
    </Container>
  );
}
