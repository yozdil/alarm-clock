import { Header, Segment, Button, Icon } from "semantic-ui-react";

const Clock = ({
  remaining,
  setRemaining,
  playSound,
  stopSound,
  isPlaying,
  setIsPlaying,
  sessionLength,
  setSessionLength,
  setBreakLength,
}) => {
  const handleReset = () => {
    stopSound();
    setBreakLength(5);
    setSessionLength(25);
    setIsPlaying(false);
  };

  const handlePlay = () => {
    return setIsPlaying(!isPlaying);
  };

  return (
    <Segment textAlign="center">
      <Header id="timer-label" as="h2">
        {"Session"}
      </Header>
      <Header id="time-left">{sessionLength}:00</Header>
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
