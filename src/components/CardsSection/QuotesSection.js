import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://type.fit/api/quotes";

const QuotesSection = () => {
  // TO GET ALL QUOTES
  // const [quotes, setQuotes] = useState([]);
  // GET ONLY 1 RANDOM QUOTE
  const [randomQuote1, setRandomQuote1] = useState([]);

  // GET 1 RANDOM QUOTE FUNCTION
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      // setQuotes(data);
      const get1RandomQuote = data[Math.floor(Math.random() * data.length)];
      setRandomQuote1(get1RandomQuote);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <div className="container">
        <h3 className="quote-of-the-day">Quote of the day:</h3>
        <p>"{randomQuote1.text}"</p>
        <p>by {randomQuote1.author}</p>
      </div>
    </section>
  );
};

export default QuotesSection;
