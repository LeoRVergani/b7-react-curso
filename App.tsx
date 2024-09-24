import { Text, View } from "react-native";
import { Welcome } from "./components/welcome";

function App() {
  return (
    <View>
      <Text>Seja bem vindo</Text>
      <Welcome name="Leonardo" age={36} />
      <Welcome name="Rodrigo" age={20} />
      <Welcome name="Harry" age={360} />
    </View>
  )
}

export default App;