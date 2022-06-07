import { ChartBarContainer } from './styles';

interface ChartBarProps {
  day: string;
  amount: number;
}

export function ChartBar({ day, amount }: ChartBarProps) {
  function convertDayToNumber(day: string) {
    switch (day) {
      case 'sun':
        return 0;
      case 'mon':
        return 1;
      case 'tue':
        return 2;
      case 'wed':
        return 3;
      case 'thu':
        return 4;
      case 'fri':
        return 5;
      case 'sat':
        return 6;
    }
  }
  const dayNumber = convertDayToNumber(day);
  const isToday = new Date().getDay() === dayNumber;

  return (
    <ChartBarContainer barHeight={amount * 1.5} isToday={isToday}>
      <span>${amount}</span>
      <div />
      <p>{day}</p>
    </ChartBarContainer>
  );
}
