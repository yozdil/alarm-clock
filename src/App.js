import { useEffect, useRef, useState } from "react";
import { Container, Header, Segment, Divider, Button } from "semantic-ui-react";
import Adjust from "./components/Adjust";
import Clock from "./components/Clock";

function App() {
  const alarm = useRef();

  const [isPlaying, setIsPlaying] = useState(false);
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [currState, setCurrState] = useState("Session");

  useEffect(() => {
    const switchState = () => {
      if (currState === "Session") {
        setCurrState("Break");
        setTimeLeft(breakLength * 60);
      } else {
        setCurrState("Session");
        setTimeLeft(sessionLength * 60);
      }
    };

    if (isPlaying) {
      setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      if (timeLeft === 0) {
        playSound();
        switchState();
      }
    }
  }, [timeLeft, isPlaying, breakLength, currState, sessionLength]);

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
            setTimeLeft={setTimeLeft}
          />
          <Divider />
          <Clock
            timeLeft={timeLeft}
            setTimeLeft={setTimeLeft}
            playSound={playSound}
            stopSound={stopSound}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            sessionLength={sessionLength}
            setSessionLength={setSessionLength}
            setBreakLength={setBreakLength}
            currState={currState}
            setCurrState={setCurrState}
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
