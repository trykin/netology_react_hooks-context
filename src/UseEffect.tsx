import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { CurrentItem } from "./CurrentItem";

export interface IData {
  id: number;
  name: string;
}

export function UseEffect() {
  const [data, setData] = useState<IData[]>([]);
  const [currentItem, setCurrentItem] = useState<IData>();
  useEffect(() => {
    axios
      .get<IData[]>(
        " https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
      )
      .then((e) => setData(e.data))
      .catch((e) => console.log("error"));
  }, []);
  return (
    <Container>
      <Row>
        <Col md={6}>
          <ListGroup>
            {data?.map((item) => (
              <ListGroup.Item
                key={"item" + item.id.toString()}
                onClick={() => setCurrentItem(item)}
              >
                {item.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={{ span: 6, offset: 0 }}>
          {currentItem !== undefined ? (
            <CurrentItem info={currentItem} />
          ) : null}
        </Col>
      </Row>
    </Container>
  );
}
