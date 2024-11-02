import axios from "axios";
import { useEffect, useState } from "react";
const apiUrlForQuotes = import.meta.env.VITE_QUOTES_API_URL;

export const useDailyQuote = () => {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    const getQuote = async () => {
      const { data } = await axios.get(apiUrlForQuotes);
      setQuote(data.quote);
    };
    getQuote();
  }, []);
  return { quote };
};
