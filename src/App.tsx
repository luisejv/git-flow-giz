import axios, { AxiosError, AxiosResponse } from "axios";
import React, { useState } from "react";
import useSWR from "swr";
import "./App.css";
import Button from "./components/Button";
import { ApiResponse } from "./types/user";

const fetcher = (url: string): Promise<ApiResponse> => {
  return new Promise<ApiResponse>((resolve, reject) => {
    axios
      .get(url)
      .then((res: AxiosResponse) => {
        console.log(res);
        resolve(res.data);
      })
      .catch((err: AxiosError) => {
        console.log(err);
        reject(err);
      });
  });
};

function App() {
  const [results, setResults] = useState<number>(1);

  const { data, error, isValidating, mutate } = useSWR(
    `https://randomuser.me/api/?results=${results}`,
    fetcher,
    {
      refreshInterval: 0,
      revalidateOnFocus: false,
      revalidateOnMount: true,
      revalidateOnReconnect: true,
    }
  );

  if (isValidating) return <h1>Loading...</h1>;

  return (
    <div>
      <pre>{JSON.stringify(data?.results, null, 2)}</pre>
      <Button mutate={mutate} />
    </div>
  );
}

export default App;
