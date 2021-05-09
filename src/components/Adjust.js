import { Header, Segment, Button, Icon } from "semantic-ui-react";

const Adjust = ({
  isPlaying,
  breakLength,
  setBreakLength,
  sessionLength,
  setSessionLength,
  setTimeLeft,
}) => {
  const increment = (data, setData, bool) => {
    if (data < 60) {
      if (bool) {
        setTimeLeft((data + 1) * 60);
      }
      return setData(data + 1);
    }
  };
  const decrement = (data, setData, bool) => {
    if (data > 1) {
      if (bool) {
        setTimeLeft((data - 1) * 60);
      }
      return setData(data - 1);
    }
  };

  return (
    <Segment.Group horizontal>
      <Segment textAlign="center">
        <Header id="break-label">Break Length</Header>
        <Header id="break-length">{breakLength}</Header>
        <Button.Group>
          <Button
            id="break-decrement"
            onClick={
              isPlaying
                ? null
                : () => decrement(breakLength, setBreakLength, false)
            }
          >
            <Icon name="angle down"></Icon>
          </Button>
          <Button
            id="break-increment"
            onClick={
              isPlaying
                ? null
                : () => increment(breakLength, setBreakLength, false)
            }
          >
            <Icon name="angle up"></Icon>
          </Button>
        </Button.Group>
      </Segment>
      <Segment textAlign="center">
        <Header id="session-label">Session Length</Header>
        <Header id="session-length">{sessionLength}</Header>
        <Button.Group>
          <Button
            id="session-decrement"
            onClick={
              isPlaying
                ? null
                : () => decrement(sessionLength, setSessionLength, true)
            }
          >
            <Icon name="angle down"></Icon>
          </Button>
          <Button
            id="session-increment"
            onClick={
              isPlaying
                ? null
                : () => increment(sessionLength, setSessionLength, true)
            }
          >
            <Icon name="angle up"></Icon>
          </Button>
        </Button.Group>
      </Segment>
    </Segment.Group>
  );
};

export default Adjust;
