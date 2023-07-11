import { useJsonFetch } from "./UseJsonFetch";

export function Loading() {
  const { data, loading } = useJsonFetch("http://localhost:7070/", "loading");
  return <>{loading ? <h1>"Загрузка"</h1> : <h1>{JSON.stringify(data)}</h1>}</>;
}
