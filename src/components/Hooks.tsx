import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Lista from "./Lista";

const Hooks = () => {
  const [nombre, setNombre] = useState<string>("");
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  const [valor, setValor] = useState<number>(0);

  const nombrePrevio = useRef("");
  const input = useRef<HTMLInputElement | null>(null);
  const nombreMayusculas = nombre.toLocaleUpperCase();

  //   const valorProcesado = useMemo((): number => {
  //     for (let i = 0; i < 1000000000; i++) {}
  //     return valor * 3;
  //   }, [valor]);

  useEffect(() => {
    console.log("rerender");
  }, []);

  //   const arreglo = (): number[] => {
  //     for (let i = 0; i < 2000000000; i++) {}
  //     return [valor, valor + 1, valor + 2];
  //   };

  const arreglo = useCallback((): number[] => {
    return [valor, valor + 1, valor + 2];
  }, [valor]);

  const theme = {
    backgroundColor: darkTheme ? "#000" : "#fff",
    color: darkTheme ? "#fff" : "#000",
    height: "100vh",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={valor}
        onChange={(e) => setValor(+e.currentTarget.value)}
      />
      <input ref={input} type="file" style={{ display: "none" }} />
      <button
        style={{ background: "blue", borderRadius: "5px", padding: "10px" }}
        onClick={() => input.current?.click()}
      >
        Selecciona tu archivo
      </button>
      <div>{"Hola mi nombre es " + nombre}</div>
      <div>{nombreMayusculas}</div>
      <div>{nombrePrevio.current}</div>
      {/* <div>{valorProcesado}</div> */}
      <button onClick={() => setDarkTheme(!darkTheme)}>Cambiar tema</button>
      <Lista datos={arreglo}></Lista>
    </div>
  );
};

export default Hooks;
