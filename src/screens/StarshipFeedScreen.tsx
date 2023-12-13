import React from "react";
import { StyleSheet, StatusBar, View, Text, FlatList } from "react-native";
import { Card } from "react-native-paper";

import { default as data } from "~/../api/data.json";
import { useStarships } from "~/hooks/useStarships";

const {data, error, status} = useStarships();

type ItemProps = {
    title: string,
    crew: string,
    model: string,
    hyperdrive: string,
    cost: string
};

const RenderItem = ({title, crew, model, hyperdrive, cost}: ItemProps) => (
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

export const StarshipFeedScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <FlatList
        data={data.results}
        renderItem={({item}) => <RenderItem title={item.name} crew={item.crew} model={item.model} hyperdrive={item.hyperdrive_rating} cost={item.cost_in_credits}/>}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0, // only for Android to avoid status bar overlap
  },
  headerContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
});