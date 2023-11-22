import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { fetchData } from '../utils/api';
import { getNormalizedData } from '../utils/helpers';
import { randomMemeUrl, getUrl } from '../utils/constants';

export const MemePage = () => {
  const { memeId } = useParams();
  const [meme, setMeme] = useState();

  const isRandom = !memeId;

  useEffect(() => {
    if (memeId) {
      fetchData(getUrl(memeId))
        .then((result) => {
          const data = getNormalizedData(result[0].data);
          setMeme(data[0]);
        })
        .catch((err) => console.log(err));
    }
  }, [memeId]);

  useEffect(() => {
    if (!memeId) {
      let ignore = false;
      fetchData(randomMemeUrl)
        .then((result) => {
          if (!ignore) {
            const data = getNormalizedData(result[0].data);
            setMeme(data[0]);
          }
        })
        .catch((err) => console.log(err));
      return () => {
        ignore = true;
      };
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="pt-3 pb-3">
        {isRandom && (
          <div className="d-flex justify-content-center">
            <h2>Random Meme:</h2>
          </div>
        )}
        <div className="container text-center full-height">
          <img
            src={meme?.url}
            className="rounded img-contain"
            width="70%"
            height="70%"
            alt={meme?.title}
          />
          <h3>{meme?.title ? meme.title : ''}</h3>
          <h4>{meme?.author ? `Автор: ${meme.author}` : ''}</h4>
          <h4>{meme?.subreddit ? `Сообщество: ${meme.subreddit}` : ''}</h4>
        </div>
      </div>
    </div>
  );
};
