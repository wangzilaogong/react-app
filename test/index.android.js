/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class test extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={{backgroundColor:"red",flex:1}}>
              1
          </Text>
          <Text style={{backgroundColor:"green",height:30,width:90}}>
              2
          </Text>
          <Text style={{backgroundColor:"blue",height:30}}>
              3
          </Text>
          <Text style={{backgroundColor:"pink",height:30}}>
              4
          </Text>
          <Text style={{backgroundColor:"purple",height:30}}>
              5
          </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
   backgroundColor:'green',
      width:400,
      height:100,
      flexDirection:'row',//主轴方向
       justifyContent:'space-around',//主轴对齐方式
      marginTop:200,//上边距
      alignItems:'center',  //侧轴对齐方式
      flexWrap:'wrap'//显示不下，换一行。
  },
    innerViewStyle:{
        backgroundColor:'pink',
        flex:2,
        width:30

    },
    innerViewStyle1:{
        backgroundColor:'green',
        flex:2,
        width:30

    },  innerViewStyle2:{
        backgroundColor:'green',
        flex:2,
        width:30

    },
    innerViewStyle3:{
        backgroundColor:'green',
        flex:2,
        width:30

    },  innerViewStyle4:{
        backgroundColor:'green',
        flex:2,
        width:30

    }

});

AppRegistry.registerComponent('test', () => test);
