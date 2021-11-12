import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.content}>
        {/* todo form */}
        <View style={styles.list}>
          <FlatList data={todos} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
