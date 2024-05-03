import { useEffect, useState } from "react";

type Bird = {
  Id: number;
  BirdMyanmarName: string;
  BirdEnglishName: string;
  Description: string;
  ImagePath: string;
};

export const UseFetchHook = (url: string) => {
  const [data, setData] = useState<Bird[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Something went wrong");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setData(data);
        setError(null);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
      });
  }, [url]);
  return { data, loading, error };
};
