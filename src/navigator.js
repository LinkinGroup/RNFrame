import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View } from 'react-native';

import News1 from './news/news1';
//import news1d1 from './news/news1d1';

var _navigator; //全局navigator对象
class navigationApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id : 'News1' }}
        /*renderScene={this.renderScene}*/
        renderScene={(route, navigator) =>
         <News1
         title={route.title}

         // Function to call when a new scene should be displayed
         onForward={ () => {
         const nextIndex = route.index + 1;
         navigator.push({
         title : 'Scene ' + nextIndex,
         index : nextIndex,
         });
         }}

         // Function to call to go back to the previous scene
         onBack={() => {
         if (route.index > 0) {
         navigator.pop();
         }
         }}
         />
         }
      />

    )
  }

  //renderScene(route, nav) {
  //  switch (route.id) {
  //    case 'News1':
  //      return <News1 navigator={nav}/>;
  //    case 'news1d1':
  //      return <news1d1 navigator={nav}/>;
  //  }
  //}

}

module.exports = navigationApp;