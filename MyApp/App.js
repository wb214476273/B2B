import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View, Alert, Button,} from "react-native";

export default class FlexBoxDemoActivity extends Component {
        render() {
        return (
                    <View style={FlexBoxStyle.rootview}>

                        {/*显示*/}
                        <Text style={FlexBoxStyle.display}>显示区域</Text>

                        <View style={FlexBoxStyle.numKey}>
                            {/*按键*/}
                            <Text style={FlexBoxStyle.numItem}>9</Text>
                            <Text style={FlexBoxStyle.numItem}>8</Text>
                            <Text style={FlexBoxStyle.numItem}>7</Text>
                            <Text style={FlexBoxStyle.numItem}>6</Text>
                            <Text style={FlexBoxStyle.numItem}>5</Text>
                            <Text style={FlexBoxStyle.numItem}>4</Text>
                            <Text style={FlexBoxStyle.numItem}>3</Text>
                            <Text style={FlexBoxStyle.numItem}>2</Text>
                            <Text style={FlexBoxStyle.numItem}>1</Text>
                            <Text style={FlexBoxStyle.numItem}>=</Text>
                            <Text style={FlexBoxStyle.numItem}>.</Text>
                            <Text style={FlexBoxStyle.numItem}>0</Text>
                        </View>

                        {/*右侧逻辑运算符区域*/}
                        <View style={FlexBoxStyle.option}>
                            <Text style={FlexBoxStyle.numItem}>+</Text>
                            <Text style={FlexBoxStyle.numItem}>CE</Text>
                            <Text style={FlexBoxStyle.numItem}>-</Text>
                            <Text style={FlexBoxStyle.numItem}>C</Text>
                            <Text style={FlexBoxStyle.numItem}>*</Text>
                            <Text style={FlexBoxStyle.numItem}>sin</Text>
                            <Text style={FlexBoxStyle.numItem}>%</Text>
                            <Text style={FlexBoxStyle.numItem}>cos</Text>

                        </View>

                    </View>

                )
     }
}

const FlexBoxStyle = StyleSheet.create({

rootview: {
    flexDirection: "row",
    flexWrap: "wrap"
},

display: {
    //相当于TtextView的gravity=center效果
    textAlign: "right",
    textAlignVertical: "center",

    //相当于android里面的weight
    // flexGrow: 1,

    padding: 10,
    marginRight: 10,
    backgroundColor: "grey",
    width: "100%",
    // boxSizing: content-box|border-box|inherit;
    height: 50
},

//数字按键
numKey:{
    flex:3,
    flexWrap:"wrap",
    padding:10,
    backgroundColor:"green",
    flexDirection:"row-reverse",
    justifyContent: 'space-around'
},

//右侧逻辑运算符
option:{
    paddingTop:10,
    paddingLeft:10,
    flex:2,
    flexWrap:"wrap",
    backgroundColor:"blue",
    flexDirection:"row",
    justifyContent: 'space-around'
},

numItem:{
    backgroundColor: "#f0f",
    marginTop: 10,

    //相当于TtextView的gravity=center效果
    textAlign: "center",
    textAlignVertical: "center",

    //和androidMarginRight一样
    marginRight: 20,

    alignContent: "center",
    width: 40,
    height: 40,

}
})
