import  React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  StatusBar
} from 'react-native';

import NewsView from './src/news/news';

var facemash = React.createClass({
  getInitialState() {
    return {
      selectedTab : 'faceMash'
    }
  },
  changeTab(tabName) {
    //StatusBarIOS.setStyle(tabName === 'faceMash' ? 1 : 0);
    this.setState({
      selectedTab : tabName,
    });
    //console.log(StatusBarIOS);
    //StatusBar.setStyle(tabName === 'faceMash' ? 1 : 0);
  },
  render : function () {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title="FaceMash"
          icon={ require('./img/back2.png') }
          onPress={ () => this.changeTab('faceMash') }
          selected={ this.state.selectedTab === 'faceMash' }>

          <NewsView/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Messages"
          icon={ require('./img/back2.png') }
          onPress={ () => this.changeTab('messages') }
          selected={ this.state.selectedTab === 'messages' }>
          <View style={ styles.pageView }>
            <Text>Messages</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Settings"
          icon={ require('./img/back2.png') }
          onPress={ () => this.changeTab('settings') }
          selected={ this.state.selectedTab === 'settings' }>
          <View style={ styles.pageView }>
            <Text>Settings</Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});
var styles = StyleSheet.create({
  pageView : {
    backgroundColor : '#fff',
    flex : 1
  }
});

AppRegistry.registerComponent('AwesomeProject', () => facemash);