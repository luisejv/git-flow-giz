import axios, { AxiosError, AxiosResponse } from "axios";
import React, { useState } from "react";
import useSWR from "swr";
import "./App.css";
import Button from "./components/Button";
import Image from "./components/Image";
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
      <Image />
      <div>Hola</div>
      <p>
        Aliquip aute do ullamco eiusmod et. Reprehenderit reprehenderit est sit
        ex adipisicing incididunt cupidatat voluptate eiusmod pariatur cupidatat
        qui. Consectetur occaecat elit eu culpa fugiat labore reprehenderit
        consectetur. Quis consectetur esse do excepteur. Eiusmod officia
        excepteur Lorem tempor ut ad ut ipsum.
      </p>
      <div>Que tal</div>
    </div>
  );
}

export default App;
