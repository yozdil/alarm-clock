import { Header, Segment, Button, Icon } from "semantic-ui-react";

const Clock = ({
  timeLeft,
  setTimeLeft,
  playSound,
  stopSound,
  isPlaying,
  setIsPlaying,
  sessionLength,
  setSessionLength,
  setBreakLength,
  currState,
  setCurrState,
}) => {
  const handleReset = () => {
    stopSound();
    setCurrState("Session");
    setBreakLength(5);
    setSessionLength(25);
    setIsPlaying(false);
    setTimeout(() => {
      setTimeLeft(sessionLength * 60);
    }, 1000);
  };

  const handlePlay = () => {
    return setIsPlaying(!isPlaying);
  };

  const displayTime = () => {
    let min = Math.floor(timeLeft / 60);
    let sec = timeLeft - min * 60;
    return `${min < 10 ? `0${min}` : min} : ${sec < 10 ? `0${sec}` : sec}`;
  };

  return (
    <Segment textAlign="center">
      <Header id="timer-label" as="h2">
        {currState}
      </Header>
      <Header id="time-left">{displayTime()}</Header>
      <Button.Group>
        <Button id="start_stop" onClick={() => handlePlay()}>
          {isPlaying ? <Icon name="pause"></Icon> : <Icon name="play"></Icon>}
        </Button>
        <Button id="reset" onClick={() => handleReset()}>
          <Icon name="undo"></Icon>
        </Button>
      </Button.Group>
    </Segment>
  );
};

export default Clock;
