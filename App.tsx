import React from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Text, View, TextInput } from 'react-native';

export default function App() {

  const [calcTotal, setCalcTotal] = React.useState('0');

  return (
    <SafeAreaView style={styles.container}>

      
      <View style={styles.calculatorTotal}>
        <TextInput
          style={styles.textSize}
          value={calcTotal}
        />
      </View>
      
      <View style={styles.calculatorLayout}>
      <TouchableOpacity
        style={styles.clearButton}
        onPress={() => console.log("you have pressed Clear")}
        >
          <Text style={styles.textSize}>C</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.numButton}
        onPress={() => console.log("you have pressed ")}
        >
          <Text style={styles.textSize}></Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.numButton}
        onPress={() => console.log("you have pressed ")}
        >
          <Text style={styles.textSize}></Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.signButton}
        onPress={() => console.log("you have pressed ÷")}
        >
          <Text style={styles.textSize}>÷</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.calculatorLayout}>
      <TouchableOpacity
        style={styles.numButton}
        onPress={() => setCalcTotal}
        >
          <Text style={styles.textSize}>7</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.numButton}
        onPress={() => console.log("you have pressed 8")}
        >
          <Text style={styles.textSize}>8</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.numButton}
        onPress={() => console.log("you have pressed 9")}
        >
          <Text style={styles.textSize}>9</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signButton}
        onPress={() => console.log("you have pressed x")}
        >
          <Text style={styles.textSize}>x</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.calculatorLayout}>
      <TouchableOpacity
        style={styles.numButton}
        onPress={() => console.log("you have pressed 4")}
        >
          <Text style={styles.textSize}>4</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.numButton}
        onPress={() => console.log("you have pressed 5")}
        >
          <Text style={styles.textSize}>5</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.numButton}
        onPress={() => console.log("you have pressed 6")}
        >
          <Text style={styles.textSize}>6</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signButton}
        onPress={() => console.log("you have pressed -")}
        >
          <Text style={styles.textSize}>-</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.calculatorLayout}>
      <TouchableOpacity
        style={styles.numButton}
        onPress={() => console.log("you have pressed 1")}
        >
          <Text style={styles.textSize}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.numButton}
        onPress={() => console.log("you have pressed 2")}
        >
          <Text style={styles.textSize}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.numButton}
        onPress={() => console.log("you have pressed 3")}
        >
          <Text style={styles.textSize}>3</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signButton}
        onPress={() => console.log("you have pressed +")}
        >
          <Text style={styles.textSize}>+</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.calculatorLayout}>
      <TouchableOpacity
        style={styles.zeroButton}
        onPress={() => console.log("you have pressed 0")}
        >
          <Text style={styles.textSize}>0</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signButton}
        onPress={() => console.log("you have pressed =")}
        >
          <Text style={styles.textSize}>=</Text>
      </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignContent: 'center',
  },
  calculatorTotal: {
    marginTop: 50,
    alignItems: 'flex-end',
    padding: 10,
  },
  calculatorLayout: {
    flexDirection: 'row',
  },
  clearButton: {
    alignItems: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
    height: 100,
    width: 100,
    marginTop: 20,
  },
  signButton: {
    alignItems: 'center',
    backgroundColor: 'gray',
    justifyContent: 'center',
    height: 100,
    width: 100,
    margin: 20,
  },
  numButton: {
    alignItems: 'center',
    backgroundColor: 'orange',
    justifyContent: 'center',
    height: 100,
    width: 100,
    marginTop: 20,
  },
  zeroButton: {
    alignItems: 'center',
    backgroundColor: 'orange',
    justifyContent: 'center',
    height: 100,
    width: 300,
    marginTop: 20,
  },
  textSize: {
    fontSize: 50,
    color: 'white'
  }
});
