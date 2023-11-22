import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { fetchData } from '../utils/api';
import { getNormalizedData } from '../utils/helpers';
import { url } from '../utils/constants';

const MainPage = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetchData(url)
      .then((result) => {
        if (result) {
          const data = getNormalizedData(result.data);
          setMemes(data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <div className="container text-center d-flex">
        <div className="row justify-content-center">
          {memes.map((meme) => (
            <Card key={meme.id} {...meme} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
