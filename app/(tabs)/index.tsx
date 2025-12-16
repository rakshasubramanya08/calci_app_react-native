import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [display, setDisplay] = useState("0");
  const [firstValue, setFirstValue] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);

  const handleNumber = (num: string) => {
    if (display === "0") {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

   const handleOperator = (op: string) => {
    setFirstValue(display);
    setOperator(op);
    setDisplay("0");
  };

  const calculate = () => {
    if (!firstValue || !operator) return;

    const a = parseFloat(firstValue);
    const b = parseFloat(display);
    let result = 0;
     
    if (operator === "+") result = a + b;
    if (operator === "-") result = a - b;
    if (operator === "×") result = a * b;
    if (operator === "÷") result = a / b;

    setDisplay(result.toString());
    setFirstValue(null);
    setOperator(null);
  };

  const clear = () => {
    setDisplay("0");
    setFirstValue(null);
    setOperator(null);
  };

  const Button = ({ title, onPress }: any) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

   return (
    <View style={styles.container}>
      <Text style={styles.display}>{display}</Text>

      <View style={styles.row}>
        <Button title="7" onPress={() => handleNumber("7")} />
        <Button title="8" onPress={() => handleNumber("8")} />
        <Button title="9" onPress={() => handleNumber("9")} />
        <Button title="÷" onPress={() => handleOperator("÷")} />
      </View>

      <View style={styles.row}>
        <Button title="4" onPress={() => handleNumber("4")} />
        <Button title="5" onPress={() => handleNumber("5")} />
        <Button title="6" onPress={() => handleNumber("6")} />
        <Button title="×" onPress={() => handleOperator("×")} />
      </View>

      <View style={styles.row}>
        <Button title="1" onPress={() => handleNumber("1")} />
        <Button title="2" onPress={() => handleNumber("2")} />
        <Button title="3" onPress={() => handleNumber("3")} />
        <Button title="-" onPress={() => handleOperator("-")} />
      </View>

      <View style={styles.row}>
        <Button title="0" onPress={() => handleNumber("0")} />
        <Button title="C" onPress={clear} />
        <Button title="=" onPress={calculate} />
        <Button title="+" onPress={() => handleOperator("+")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#21beb1ff",
    justifyContent: "center",
    padding: 10,
  },
  display: {
    color: "#fff",
    fontSize: 48,
    textAlign: "right",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#472258ff",
    padding: 20,
    borderRadius: 10,
    width: "22%",
    marginVertical: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
  },
});