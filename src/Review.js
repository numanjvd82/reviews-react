import React, { useEffect, useState } from 'react';
import people from './data';
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaQuoteRight,
} from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const checkIndex = (index) => {
    if (index > people.length - 1) {
      return 0;
    } else if (index < 0) {
      return people.length - 1;
    } else {
      return index;
    }
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length - 1) + 1;
    setIndex(randomNumber);
    if (randomNumber === index) {
      randomNumber = randomNumber + 1;
    }
    checkIndex(randomNumber);
  };

  return (
    <main>
      <h1>Our Reviews</h1>
      <div className="underline"></div>
      <article key={id}>
        <div className="img-container">
          <img src={image} alt={name} />
          <span className="quote">
            <FaQuoteRight />
          </span>
        </div>
        <h4>{name.toUpperCase()}</h4>
        <span>{job.toUpperCase()}</span>
        <p>{text}</p>
        <div className="button-container">
          <button onClick={() => prevPerson()} className="prev-btn">
            <FaChevronLeft />
          </button>
          <button onClick={() => nextPerson()} className="next-btn">
            <FaChevronRight />
          </button>
        </div>
        <button onClick={randomPerson} className="btn">
          Surprise Me
        </button>
      </article>
    </main>
  );
};

export default Review;
