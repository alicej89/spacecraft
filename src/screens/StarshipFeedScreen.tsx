import React from "react";
import { StyleSheet, StatusBar, View, Text, FlatList } from "react-native";
import { Button } from "react-native-paper";
import { CardItem } from "~/components/CardItem";

// import { default as data } from "~/../api/data.json";
import { useStarships } from "~/hooks/useStarships";


export const StarshipFeedScreen = () => {
  const {data, failureReason,  error, status} = useStarships();
  
  if (status === 'pending') {
    return <Text>Loading...</Text>
  }
  
  if (status === 'error') {
    return (
      <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
        <Text>Error...</Text>
        <Text>{JSON.stringify(error)}</Text>
        <Text>{JSON.stringify(failureReason)}</Text>
        <Button>Send an email to the support</Button>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <FlatList
        data={data.results}
        renderItem={({item}) => <CardItem title={item.name} crew={item.crew} model={item.model} hyperdrive={item.hyperdrive_rating} cost={item.cost_in_credits}/>}
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