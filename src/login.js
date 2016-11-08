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
  ListView,
  TabBarIOS,
  View,
} from 'react-native';
import TabbarView from './tabbar/tabbar';

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

export default class LogInView extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({ rowHasChanged : (r1, r2) => r1 !== r2 });
    this.state = {
      selectedTab : '历史',
      notifCount : 0,
      presses : 0,
      historyDate : ds.cloneWithRows([{ name : 'jkl' }, { name : 'uio' }, { name : 'fda' }, { name : 'uisdfgo' }]),
    };
  }

  //进行渲染页面内容
  _renderContent(color, pageText, num) {
    // 历史页面中的
    if (this.state.selectedTab === '历史') {
      return (
        <View style={[styles.tabContent, { backgroundColor : color }]}>
          <Text style={styles.tabText}>{pageText}</Text>
          <Text style={styles.tabText}>第 {num} 次重复渲染{pageText}</Text>
        </View>

      );
    } else {
      return (
        <View style={[styles.tabContent, { backgroundColor : color }]}>
          <Text style={styles.tabText}>{pageText}</Text>
          <Text style={styles.tabText}>第 {num} 次重复渲染{pageText}</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={{ flex : 1 }}>
        <Text style={styles.welcome}>
          {this.state.selectedTab}
        </Text>
        <TabBarIOS
          style={{ flex : 1, alignItems : "flex-end" }}
          tintColor="white"
          barTintColor="darkslateblue">
          <TabBarIOS.Item
            title="自定义"
            //icon={require('./images/flux.png')}
            selected={this.state.selectedTab === '自定义'}
            onPress={() => {
              this.setState({
                selectedTab : '自定义',
              });
            }}
          >
            {this._renderContent('#414A8C', '自定义界面')}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            systemIcon="history"
            selected={this.state.selectedTab === '历史'}
            badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
            onPress={() => {
              this.setState({
                selectedTab : '历史',
                notifCount : this.state.notifCount + 1,
              });
            }}
          >
            {this._renderContent('#ffffff', '历史记录')}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            systemIcon="downloads"
            selected={this.state.selectedTab === '下载'}
            onPress={() => {
              this.setState({
                selectedTab : '下载',
                presses : this.state.presses + 1
              });
            }}>
            {this._renderContent('#21551C', '下载页面', this.state.presses)}
          </TabBarIOS.Item>

        </TabBarIOS>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#F5FCFF',
  }
});

