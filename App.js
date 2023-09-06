import React, {Component} from 'react';
import { SafeAreaView, TouchableOpacity, Text, View } from 'react-native';
import calculator, { initialTotal } from "./src/calculator";
import styles from "./src/styles";

export default class App extends Component {
    state = initialTotal;

    HandleInput = (type, value) => {
        this.setState((state) => calculator(type, value, state));
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>

                <View style={styles.calculatorTotal}>
                    <Text style={styles.totalSize}>
                        {parseFloat(this.state.currentValue).toLocaleString()}
                    </Text>
                </View>

                <View style={styles.calculatorLayout}>
                    <TouchableOpacity
                        style={styles.clearButton}
                        onPress={() => this.HandleInput('clear')}
                    >
                        <Text style={styles.textSize}>clear</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.signButton}
                        onPress={() => this.HandleInput('operator', '/')}
                    >
                        <Text style={styles.textSize}>÷</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.calculatorLayout}>
                    <TouchableOpacity
                        style={styles.numButton}
                        onPress={() => this.HandleInput('number', 7)}
                    >
                        <Text style={styles.textSize}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.numButton}
                        onPress={() => this.HandleInput('number', 8)}
                    >
                        <Text style={styles.textSize}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.numButton}
                        onPress={() => this.HandleInput('number', 9)}
                    >
                        <Text style={styles.textSize}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.signButton}
                        onPress={() => this.HandleInput('operator', 'x')}
                    >
                        <Text style={styles.textSize}>x</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.calculatorLayout}>
                    <TouchableOpacity
                        style={styles.numButton}
                        onPress={() => this.HandleInput('number', 4)}
                    >
                        <Text style={styles.textSize}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.numButton}
                        onPress={() => this.HandleInput('number', 5)}
                    >
                        <Text style={styles.textSize}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.numButton}
                        onPress={() => this.HandleInput('number', 6)}
                    >
                        <Text style={styles.textSize}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.signButton}
                        onPress={() => this.HandleInput('operator', '-')}
                    >
                        <Text style={styles.textSize}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.calculatorLayout}>
                    <TouchableOpacity
                        style={styles.numButton}
                        onPress={() => this.HandleInput('number', 1)}
                    >
                        <Text style={styles.textSize}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.numButton}
                        onPress={() => this.HandleInput('number', 2)}
                    >
                        <Text style={styles.textSize}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.numButton}
                        onPress={() => this.HandleInput('number', 3)}
                    >
                        <Text style={styles.textSize}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.signButton}
                        onPress={() => this.HandleInput('operator', '+')}
                    >
                        <Text style={styles.textSize}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.calculatorLayout}>
                    <TouchableOpacity
                        style={styles.zeroButton}
                        onPress={() => this.HandleInput('number', 0)}
                    >
                        <Text style={styles.textSize}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.numButton}
                        onPress={() => this.HandleInput('number', '.')}
                    >
                        <Text style={styles.textSize}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.signButton}
                        onPress={() => this.HandleInput('equal', '=')}
                    >
                        <Text style={styles.textSize}>=</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        );
    }
}
