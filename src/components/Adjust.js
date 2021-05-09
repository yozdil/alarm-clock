import { Header, Segment, Button, Icon } from "semantic-ui-react";

const increment = (data, setData) => {
  if (data < 60) {
    return setData(data + 1);
  }
};
const decrement = (data, setData) => {
  if (data > 0) {
    return setData(data - 1);
  }
};

const Adjust = ({
  isPlaying,
  breakLength,
  setBreakLength,
  sessionLength,
  setSessionLength,
}) => {
  return (
    <Segment.Group horizontal>
      <Segment textAlign="center">
        <Header id="break-label">Break Length</Header>
        <Header id="break-length">{breakLength}</Header>
        <Button.Group>
          <Button
            id="break-increment"
            onClick={isPlaying ? null : () => increment(breakLength, setBreakLength)}
          >
            <Icon name="angle up"></Icon>
          </Button>
          <Button
            id="break-decrement"
            onClick={isPlaying ? null : () => decrement(breakLength, setBreakLength)}
          >
            <Icon name="angle down"></Icon>
          </Button>
        </Button.Group>
      </Segment>
      <Segment textAlign="center">
        <Header id="session-label">Session Length</Header>
        <Header id="session-length">{sessionLength}</Header>
        <Button.Group>
          <Button
            id="session-increment"
            onClick={isPlaying ? null : () => increment(sessionLength, setSessionLength)}
          >
            <Icon name="angle up"></Icon>
          </Button>
          <Button
            id="session-decrement"
            onClick={isPlaying ? null : () => decrement(sessionLength, setSessionLength)}
          >
            <Icon name="angle down"></Icon>
          </Button>
        </Button.Group>
      </Segment>
    </Segment.Group>
  );
};

export default Adjust;
