import { Button, StyleSheet, Text, View } from "react-native";

function Index() {
  function handleSubmit() {
    const name = "Thiago";
    alert(`Olá, ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World</Text>
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "blue",
    fontSize: 26,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    gap: 12,
  },
});

export default Index;
