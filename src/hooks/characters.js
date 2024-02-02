import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function useCharacters(query, url) {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function fetchApi() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(url, { signal });
        setCharacters(data.results);
      } catch (error) {
        if (!axios.isCancel()) {
          setCharacters([]);
          toast.error(error.response.data.error);
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchApi();

    return () => {
      controller.abort();
    };
  }, [query]);

  return { isLoading, characters };
}
