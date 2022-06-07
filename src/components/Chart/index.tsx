import { ChartBar } from './ChartBar';
import { Container } from './styles';

interface ChartProps {
  spendingData: {
    day: string;
    amount: number;
  }[];
}

export function Chart({ spendingData }: ChartProps) {
  return (
    <Container>
      {spendingData.map((report) => (
        <ChartBar day={report.day} amount={report.amount} />
      ))}
    </Container>
  );
}
