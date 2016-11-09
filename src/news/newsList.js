import React, { Component, PropTypes } from 'react';
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
  //static propTypes = {
  //  title : PropTypes.string.isRequired,
  //  onForward : PropTypes.func.isRequired,
  //  onBack : PropTypes.func.isRequired,
  //}

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
    this.handleSelectRow = this.handleSelectRow.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  //toNews1d1() {
  //  this.props.navigator.push({ id : "news1d1" });
  //}

  handleSelectRow() {
    this.props.navigator.push({ detail : true });
  }

  handleBack() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={{ flex : 1, paddingTop : 22 }}>
        <Image
          style={styles.pict}
          source={require('../../img/news1Pic1.jpg')}
        />
        <TouchableHighlight underlayColor='rgba(24,36,35,0.1)' onPress={this.handleBack}>
          <Text style={styles.pictText}> 测试返回</Text>
        </TouchableHighlight>
        <Text style={styles.pictText}> 先锋街道社区教育中心举行《准则》《条例》宣讲</Text>
        <ListView
          style={{ width : ScreenWidth, height : 500 }}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <TouchableHighlight underlayColor='rgba(24,36,35,0.1)' onPress={this.handleSelectRow}>
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
    color : '#666',
    marginBottom : 9
  },
  pict : {
    width : ScreenWidth,
    resizeMode : Image.resizeMode.cover,
    height : 160,
    marginTop : -30
  },
  pictText : {
    height : 21,
    fontSize : 12,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : "rgba(123,123,123,0.5)",
    color : "#fff",
  }
});

export default ListViewBasics;