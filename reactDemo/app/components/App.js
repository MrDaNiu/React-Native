import React,{ Component } from 'react';
import {
  Text,
  Navigator,
  View,
  StyleSheet,
  TextInput,
  ListView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Scene from './Scene'

// class App extends Component {
//   render(){
//     return(
//       <Navigator
//         style = {styles.container}
//         initialRoute={{ title:'My Initial Scene', index:0 }}
//         renderScene={(route, navigator) =>
//           <Scene
//             title = {route.title}
//             onForward = { ()=> {
//               const nextIndex = route.index + 1;
//               navigator.push({
//                 title: 'Scene' + nextIndex,
//                 index: nextIndex,
//               });
//             }}
//             onBack = { () => {
//               if (route.index > 0){
//                 navigator.pop();
//               }
//             }}
//           />
//         }
//       />
//     )
//   }
// }
//
// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { showText: true };
//
//     // 每1000毫秒对showText状态做一次取反操作
//     setInterval(() => {
//       this.setState({ showText: !this.state.showText });
//     }, 1000);
//   }
//
//   render() {
//     // 根据当前showText的值决定是否显示text内容
//     let display = this.state.showText ? this.props.text : ' ';
//     return (
//       <Text>{display}</Text>
//     );
//   }
// }
//
// class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Blink text='I love to blink' />
//         <Blink text='Yes blinking is so great' />
//         <Blink text='Why did they ever take this out of HTML' />
//         <Blink text='Look at me look at me look at me' />
//       </View>
//     );
//   }
// }

// class App extends Component {
//   // 初始化模拟数据
//   constructor(props) {
//     super(props);
//     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     this.state = {
//       dataSource: ds.cloneWithRows([
//         'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
//         , 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
//         , 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
//         , 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
//         , 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
//         , 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
//         , 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
//         , 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
//         , 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
//       ])
//     };
//   }
//   render() {
//     return (
//       <View style={{flex: 1, paddingTop: 22}}>
//         <ListView
//           dataSource={this.state.dataSource}
//           renderRow={(data,index) =>
//             <TouchableOpacity>
//               <Text key={index}>{data}</Text>
//             </TouchableOpacity>}
//         />
//       </View>
//     );
//   }
// };
//
// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     marginTop:25,
//   }
// });
// module.exports = App;


class CustomTag extends Component{
  render(){
    return(
      <Text>Hello {this.props.name}</Text>
    )
  }
}
export default class HelloWorld extends Component{
  render(){
    return(
      <View style={styles.contentBody}>
        <Text>Hello World!</Text>
        <CustomTag name="liuxi"/>
        <CustomTag name="liuxi.."/>
        <CustomTag name="liuxi...."/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contentBody: {
    marginTop:20,
  }
})