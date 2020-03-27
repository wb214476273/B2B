import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    PixelRatio,
    StatusBar
} from 'react-native';

//获取屏幕长宽
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

export default class OZCalculator extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <View style={styles.lineContainer}>
                    <View style={[styles.item,{flexGrow: 2}]}>
                        <Text style={[styles.itemNumber, {paddingRight: ScreenWidth/4}]}>0</Text>
                    </View>
                    <View style={[styles.item]}>
                        <Text style={styles.itemNumber}>.</Text>
                    </View>
                    <View style={[styles.item,{backgroundColor: '#fa8c13'}]}>
                        <Text style={styles.itemSymbol}>=</Text>
                    </View>
                </View>
                <View style={styles.lineContainer}>
                    <View style={styles.item}>
                        <Text style={styles.itemNumber}>1</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.itemNumber}>2</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.itemNumber}>3</Text>
                    </View>
                    <View style={[styles.item,styles.symbolItemColor]}>
                        <Text style={styles.itemSymbol}>+</Text>
                    </View>
                </View>
                <View style={styles.lineContainer}>
                    <View style={styles.item}>
                        <Text style={styles.itemNumber}>4</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.itemNumber}>5</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.itemNumber}>6</Text>
                    </View>
                    <View style={[styles.item,styles.symbolItemColor]}>
                        <Text style={styles.itemSymbol}>-</Text>
                    </View>
                </View>
                <View style={styles.lineContainer}>
                    <View style={styles.item}>
                        <Text style={styles.itemNumber}>7</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.itemNumber}>8</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.itemNumber}>9</Text>
                    </View>
                    <View style={[styles.item,styles.symbolItemColor]}>
                        <Text style={styles.itemSymbol}>×</Text>
                    </View>
                </View>
                <View style={styles.lineContainer}>
                    <View style={[styles.item,styles.topItemColor]}>
                        <Text style={styles.itemNumber}>AC</Text>
                    </View>
                    <View style={[styles.item,styles.topItemColor]}>
                        <Text style={styles.itemNumber}>±</Text>
                    </View>
                    <View style={[styles.item,styles.topItemColor]}>
                        <Text style={styles.itemNumber}>%</Text>
                    </View>
                    <View style={[styles.item,styles.symbolItemColor]}>
                        <Text style={styles.itemSymbol}>÷</Text>
                    </View>
                </View>
                <View style={styles.result}>
                    <Text style={styles.resultText}>

                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: ScreenHeight,
        flexDirection: 'column-reverse',
    },
    lineContainer: {
        height: ScreenWidth / 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    item: {
        backgroundColor: '#d5d6d8',
        borderColor: '#000',
        //这里通过PixelRatiol来获取最小线宽
        borderWidth: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topItemColor:{
        backgroundColor: '#c9cacc',
    },
    symbolItemColor:{
        backgroundColor: '#fa8c13',
    },
    itemNumber: {
        fontSize: 30,
    },
    itemSymbol: {
        color:'#FFF',
        fontSize: 30,
    },
    result: {
        backgroundColor: '#000',
        flexDirection: 'column-reverse',
        alignItems: 'flex-end',
        flex: 1,
    },
    resultText: {
        color: '#FFF',
        marginBottom: 10,
        fontSize: 40,
        fontWeight: 'bold',
    }
});
