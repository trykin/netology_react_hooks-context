import { Tab, Tabs } from "react-bootstrap";
import { UseEffect } from "./UseEffect";
import { Data } from "./Data";
import { Error } from "./Error";
import { Loading } from "./Loading";

function App() {
  return (
    <Tabs
      defaultActiveKey="useeffect"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="useeffect" title="useEffect">
        <UseEffect />
      </Tab>
      <Tab eventKey="data" title="Data">
        <Data />
      </Tab>
      <Tab eventKey="error" title="Error">
        <Error />
      </Tab>
      <Tab eventKey="Loading" title="Loading">
        <Loading />
      </Tab>
    </Tabs>
  );
}

export default App;
