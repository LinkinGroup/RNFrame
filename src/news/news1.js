import React, { Component, PropTypes } from 'react';
import { StyleSheet, Dimensions, ListView, Image, Text, View, TouchableHighlight } from 'react-native';

var ScreenWidth = Dimensions.get('window').width;

class ListViewBasics extends Component {
  // 初始化模拟数据
  constructor(props) {
    super(props);
    //console.log(ScreenWidth);
    const ds = new ListView.DataSource({ rowHasChanged : (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource : ds.cloneWithRows([
        { title : '海门市三厂社区教育中心开展法制教育进校园活动', date : '2016-11-7' },
        { title : '海门市三厂社区教育中心开展“世界勤俭日”主题活动', date : '2016-11-7' },
        { title : '海门市三厂社区教育中心开展法制教育进校园活动', date : '2016-11-7' },
        { title : '海门市三厂社区教育中心开展“世界勤俭日”主题活动', date : '2016-11-7' },
        { title : '海门市三厂社区教育中心开展法制教育进校园活动', date : '2016-11-7' },
        { title : '海门市三厂社区教育中心开展“世界勤俭日”主题活动', date : '2016-11-7' }
      ])
    };
  }

  //toNews1d1() {
  //  this.props.navigator.push({ id : "news1d1" });
  //}

  //static propTypes = {
  //  title : PropTypes.string.isRequired,
  //  onForward : PropTypes.func.isRequired,
  //  onBack : PropTypes.func.isRequired,
  //}

  render() {
    return (
      <View style={{ flex : 1, paddingTop : 22 }}>
        <Image
          style={styles.pict}
          source={require('../../img/news1Pic1.jpg')}
        />
        <Text style={styles.pictText}> 先锋街道社区教育中心举行《准则》《条例》宣讲</Text>
        <ListView
          style={{ width : 300, height : 500 }}
          dataSource={this.state.dataSource}
          onPress=""
          renderRow={(rowData) =>
            <TouchableHighlight underlayColor='rgba(24,36,35,0.1)'>
              <View>
                <Text style={[styles.listTitle]}>{ rowData.title }</Text>
                <Text style={[styles.listDate]}>{ rowData.date }</Text>
              </View>
            </TouchableHighlight>}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  listTitle : {
    fontSize : 14,
    marginLeft : 9,
    marginTop : 9,
    marginBottom : 9
  },
  listDate : {
    fontSize : 12,
    marginLeft : 9,
    color:'#666',
    marginBottom : 9
  },
  pict : {
    width : ScreenWidth,
    //flex:1,
    resizeMode : Image.resizeMode.cover,
    height : 160,
    marginTop : -30
  },
  pictText : {
    position : "absolute",
    fontSize : 12,
    //width : ScreenWidth,
    //flex:1,
    height : 21,
    paddingTop : 4,
    justifyContent : 'center',
    backgroundColor : "rgba(123,123,123,0.5)",
    //marginLeft:9,
    color : "#FFFFFF",
    marginTop : -30
  }
});

module.exports = ListViewBasics;

//AppRegistry.registerComponent('AwesomeProject', () => ListViewBasics);