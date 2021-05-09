import { Header, Segment, Button, Icon } from "semantic-ui-react";

const Adjust = () => {
  return (
    <Segment.Group horizontal>
      <Segment textAlign="center">
        <Header id="break-label">Break Length</Header>
        <Header id="break-length">{"5"}</Header>
        <Button.Group>
          <Button id="break-increment">
            <Icon name="angle up"></Icon>
          </Button>
          <Button id="break-decrement">
            <Icon name="angle down"></Icon>
          </Button>
        </Button.Group>
      </Segment>
      <Segment textAlign="center">
        <Header id="session-label">Session Length</Header>
        <Header id="session-length">{"25"}</Header>
        <Button.Group>
          <Button id="session-increment">
            <Icon name="angle up"></Icon>
          </Button>
          <Button id="session-decrement">
            <Icon name="angle down"></Icon>
          </Button>
        </Button.Group>
      </Segment>
    </Segment.Group>
  );
};

export default Adjust;
