import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ListView
} from 'react-native';

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import NewsList from './news1'
import Navigation from '../navigator';

var ScreenWidth = Dimensions.get('window').width;

/*<View style={{ width : 300, height : 500 }}>
 <NewsList style={{ width : 300, height : 500 }}/>
 </View>*/
export default React.createClass({
  render() {
    return <ScrollableTabView style={{ marginTop : 0 }}
                              tabBarActiveTextColor="#3D96F7"
                              tabBarInactiveTextColor="#3D96F7"
                              tabBarUnderlineStyle={{ backgroundColor : "#3D96F7", borderColor : "#3D96F7" }}
                              initialPage={0}
                              renderTabBar={() => <ScrollableTabBar />}>
      <Text tabLabel='新闻动态'>
        <View style={{ width : ScreenWidth, height : 500 }}>
          <Navigation style={{ width : ScreenWidth, height : 500 }}/>
        </View>
      </Text>
      <Text tabLabel='通知公告'>favorite</Text>
      <Text tabLabel='社区教育工作简报'>project</Text>
      <Text tabLabel='志愿服务'>favorite</Text>
    </ScrollableTabView>;
  },
});
