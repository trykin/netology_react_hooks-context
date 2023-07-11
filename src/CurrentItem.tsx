import { Card } from "react-bootstrap";
import { IData } from "./UseEffect";
import { useEffect, useState } from "react";
import axios from "axios";

export interface IInfo {
  id: number;
  name: string;
  avatar: string;
  details: Details;
}

export interface Details {
  city: string;
  company: string;
  position: string;
}

export function CurrentItem({ info }: { info: IData }) {
  const [data, setData] = useState<IInfo>();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get<IInfo>(
        `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`
      );
      setData(result.data);
    };
    fetchData();
  }, [info]);
  return (
    <>
      {data !== undefined ? (
        <Card style={{ width: "40rem" }}>
          <Card.Img variant="top" src={data.avatar} />
          <Card.Body>
            <Card.Title>
              <h2>{data.name}</h2>
            </Card.Title>
            <Card.Text>
              city: {data.details.city}<br/>
              company: {data.details.company}<br/>
              position: {data.details.position}<br/>
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <h3>Загрузка</h3>
      )}
    </>
  );
}
