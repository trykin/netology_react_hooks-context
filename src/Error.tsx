import { useJsonFetch } from "./UseJsonFetch";

export function Error() {
  const { error } = useJsonFetch("http://localhost:7070/", "error");

  return <>{error && <h1>Ошибка</h1>}</>;
}
