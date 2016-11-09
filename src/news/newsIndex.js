import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ListView
} from 'react-native';

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import NewsList1 from './news1'
import NewsList2 from './news2'
import Navigation from '../navigator';

var ScreenWidth = Dimensions.get('window').width;

/*<View style={{ width : 300, height : 500 }}>
 <NewsList style={{ width : 300, height : 500 }}/>
 </View>*/
export default React.createClass({
  render() {
    return <ScrollableTabView
      style={{ marginTop : 0, }}
      initialPage={0}
      renderTabBar={() => <ScrollableTabBar />}
    >
      <Text tabLabel='新闻动态'>
        <View style={{ width : ScreenWidth, height : 500 }}>
          <NewsList1 style={{ width : ScreenWidth, height : 500 }}/>
        </View>
      </Text>
      <Text tabLabel='通知公告'>
        <View style={{ width : ScreenWidth, height : 500 }}>
          <NewsList2 style={{ width : ScreenWidth, height : 500 }}/>
        </View>
      </Text>
      <Text tabLabel='社区教育工作简报'>project</Text>
      <Text tabLabel='志愿服务'>favorite</Text>
    </ScrollableTabView>;
  },
});
var styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#fff'
  },
  header : {
    height : 60,
    backgroundColor : '#ff0000'
  },
  headerTitle : {
    fontSize : 24,
    margin : 50,
    //color : '#ffffff',
    textAlign : 'center',
    marginTop : 240,
  },
  tabTitle : {
    fontSize : 24,
    //margin : 50,
    color : '#000000',
    textAlign : 'center'
    //marginTop : 240,
  }
});