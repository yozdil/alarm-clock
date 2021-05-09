import {
  Container,
  Header,
  Segment,
  Divider,
} from "semantic-ui-react";
import Adjust from "./components/Adjust";
import Clock from "./components/Clock";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Segment padded="very">
          <Header as="h1" textAlign="center">
            25 + 5 Clock
          </Header>
          <Adjust />
          <Divider />
          <Clock />
          <a href="https://yamacozdil.com/">
            <Header floated="right" color="blue" as="h4">
              by Yamac Ozdil
            </Header>
          </a>
        </Segment>
      </Container>
    </div>
  );
}

export default App;
