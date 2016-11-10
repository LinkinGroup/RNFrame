import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  ListView,
  Image,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

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
        { title : '海门市三厂社区教育中心开展“世界勤俭日”主题活动', date : '2016-11-7' },
        { title : '海门市三厂社区教育中心开展法制教育进校园活动', date : '2016-11-7' },
        { title : '海门市三厂社区教育中心开展“世界勤俭日”主题活动', date : '2016-11-7' },
        { title : '海门市三厂社区教育中心开展法制教育进校园活动', date : '2016-11-7' },
        { title : '海门市三厂社区教育中心开展“世界勤俭日”主题活动', date : '2016-11-7' }
      ])
    };
    this.handleSelectRow = this.handleSelectRow.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  //toNews1d1() {
  //  this.props.navigator.push({ id : "news1d1" });
  //}

  handleSelectRow() {
    this.props.navigator.push({ detail : true, title : "资讯详情" });
  }

  handleBack() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={[styles.flexColumn]}>
        <ListView
          style={{ width : ScreenWidth, flex: 1}}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <TouchableHighlight underlayColor='rgba(24,36,35,0.1)' onPress={this.handleSelectRow}>
              <View>
                <Text style={[styles.listTitle]}>{ rowData.title }</Text>
                <Text style={[styles.listDate]}>{ rowData.date }</Text>
                <Text style={[styles.listLine]}> </Text>
              </View>
            </TouchableHighlight>}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  flexColumn : {
    flexDirection : 'column',
    flex : 1
  },
  listTitle : {
    fontSize : 14,
    marginLeft : 9,
    marginTop : 9,
    marginBottom : 9
  },
  listDate : {
    fontSize : 12,
    marginLeft : 9,
    color : '#666',
    marginBottom : 9
  },
  listLine : {
    height : 1,
    width : ScreenWidth,
    backgroundColor : '#eee',
  }
});

export default ListViewBasics;