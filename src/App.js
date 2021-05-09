import { useRef, useState } from "react";
import { Container, Header, Segment, Divider } from "semantic-ui-react";
import Adjust from "./components/Adjust";
import Clock from "./components/Clock";

function App() {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [isRunning, setIsRunning] = useState(false);

  const alarm = useRef();

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
      <audio
        id="beep"
        ref={alarm}
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        type="audio"
      />
    </div>
  );
}

export default App;
