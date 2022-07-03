import { FC } from 'react';
import { Card } from 'react-bootstrap';

export const CartItem: FC<any> = ({ day }) => {
  const temp = Math.round(day.main.temp) || '';
  const weatherType = day?.weather[0].description || '';
  const ms = day.dt * 1000;
  const weekdayName = new Date(ms).toLocaleString('ru', { weekday: 'long' }) || '';
  const imgURL = 'owf owf-' + day.weather[0].id + ' owf-5x icon-style';

  return (
    <Card className="h-100">
      <Card.Title className="text-muted text-center">{weekdayName}</Card.Title>
      <Card.Body className="d-flex align-items-center flex-column">
        <i className={imgURL} />
        <Card.Text className="fw-bold fs-5">{temp} C</Card.Text>
        <div className="bg-primary px-6 py-2 w-100">
          <Card.Text className="text-white text-center">
            {weatherType}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};
