import { FC, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CartItem, Header } from './components';

const WEATHER_API =
  'https://api.openweathermap.org/data/2.5/forecast?q=Dnipro&lang=ru&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27';

type WeatherItem = {
  dt: number;
  dt_txt: string;
};

type Data = {
  list: WeatherItem[];
};

const App: FC = () => {
  const [days, setDays] = useState<WeatherItem[]>([]);

  useEffect(() => {
    const getWeather = async <T,>(url: string): Promise<T> => {
      const response = await fetch(url);
      const body = response.json();
      return body as Promise<T>;
    };

    getWeather<Data>(WEATHER_API)
      .then((data) => {
        const dailyData = data.list.filter((reading: WeatherItem) =>
          reading.dt_txt.includes('18:00:00')
        );
        setDays(dailyData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header />
      <Container className="app mb-4">
        <Row lg={5} md={3} xs={1} className="g-3">
          {!!days.length &&
            days.map((day) => (
              <Col key={day.dt}>
                <CartItem day={day} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default App;
