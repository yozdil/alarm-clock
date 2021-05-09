import { Header, Segment, Button, Icon } from "semantic-ui-react";

const Adjust = () => {
  return (
    <Segment textAlign="center">
      <Header id="timer-label" as="h2">
        {"Session"}
      </Header>
      <Header id="time-left">{"60:00"}</Header>
      <Button.Group>
        <Button id="start_stop">
          {true ? <Icon name="play"></Icon> : <Icon name="pause"></Icon>}
        </Button>
        <Button id="reset">
          <Icon name="undo"></Icon>
        </Button>
      </Button.Group>
    </Segment>
  );
};

export default Adjust;
