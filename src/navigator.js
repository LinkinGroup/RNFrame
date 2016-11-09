import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View } from 'react-native';

import News from './news/newsIndex';
//import News1 from './news/news1';
import News2 from './news/news2';
//import news1d1 from './news/news1d1';

class navigationApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id : 'News' }}
        renderScene={this.renderScene}
        /*renderScene={(route, navigator) =>
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
         }*/
      />

    )
  }
  renderScene(route, nav) {
    switch (route.id) {
      case 'News':
        return <News
          navigator={nav}
          id={route.id}
          onForward={() => {
            var nextIndex = route.index + 1;
            navigator.push('News2');
          }}
          onBack={() => {
            navigator.pop();
          }}
        />;
      case 'News2':
        return <News2 navigator={nav}/>;
    }
  }

}

module.exports = navigationApp;