import React from "react";
import { ScrollView, Text } from "react-native";
import { Button, Card } from "react-native-paper";

export default {
  title: "Card"
};

export const Default = () => (
  <ScrollView>
    <Card mode="elevated">
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
      />
      <Card.Content>
        <Text>Card title</Text>
        <Text>Card content</Text>
      </Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
    <Card mode="outlined">
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
      />
      <Card.Content>
        <Text>Card title</Text>
        <Text>Card content</Text>
      </Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
    <Card mode="contained">
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
      />
      <Card.Content>
        <Text>Card title</Text>
        <Text>Card content</Text>
      </Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  </ScrollView>
);

Default.storyName = "Default";
