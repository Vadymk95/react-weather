import { FC } from 'react';
import { Container } from 'react-bootstrap';

export const Header: FC = () => {
  return (
    <Container className="bg-primary shadow-sm text-center py-4 mb-4 fs-5 text-white">
      Прогноз погода на 5 дней в Днепре
    </Container>
  );
};
