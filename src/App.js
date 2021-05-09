import { useRef, useState } from "react";
import { Container, Header, Segment, Divider, Button } from "semantic-ui-react";
import Adjust from "./components/Adjust";
import Clock from "./components/Clock";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [remaining, setRemaining] = useState(sessionLength * 60);

  const alarm = useRef();

  const playSound = () => {
    alarm.current.play();
  };
  const stopSound = () => {
    alarm.current.pause();
    alarm.current.currentTime = 0;
  };

  return (
    <div className="App">
      <Container fluid>
        <Button onClick={() => playSound()}>HELLO</Button>
        <Segment padded="very">
          <Header as="h1" textAlign="center">
            25 + 5 Clock
          </Header>
          <Adjust
            isPlaying={isPlaying}
            breakLength={breakLength}
            sessionLength={sessionLength}
            setBreakLength={setBreakLength}
            setSessionLength={setSessionLength}
          />
          <Divider />
          <Clock
            remaining={remaining}
            setRemaining={setRemaining}
            playSound={playSound}
            stopSound={stopSound}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            sessionLength={sessionLength}
            setSessionLength={setSessionLength}
            setBreakLength={setBreakLength}
          />
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
