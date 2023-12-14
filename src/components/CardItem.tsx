import { Card, Text } from "react-native-paper";

type CardItemProps = {
  title: string,
  crew: string,
  model: string,
  hyperdrive: string,
  cost: string
};

export const CardItem = ({title, crew, model, hyperdrive, cost}: CardItemProps) => (
  <>
    <Card>
        <Card.Title title={title} />
        <Card.Cover source={{ uri: 'https://picsum.photos/seed/car/400/200' }} />
        <Card.Content>
            <Text >{crew}</Text>
            <Text >{model}</Text>
            <Text >{hyperdrive}</Text>
            <Text >{cost}</Text>
        </Card.Content>
    </Card>
  </>
);
