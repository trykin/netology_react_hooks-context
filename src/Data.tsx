import { useJsonFetch } from "./UseJsonFetch";

export function Data() {
  const { data } = useJsonFetch("http://localhost:7070/", "data");
  return (
    <>
      {data && (
        <>
          <h1>Данные</h1>
          <h3>{JSON.stringify(data)}</h3>
        </>
      )}
    </>
  );
}
