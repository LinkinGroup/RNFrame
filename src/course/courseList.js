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

class CourseList extends Component {

  // 初始化模拟数据
  constructor(props) {
    super(props);
    //console.log(ScreenWidth);
    const ds = new ListView.DataSource({ rowHasChanged : (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource : ds.cloneWithRows([
        { title : '制作职称外语等级考试报名表', date : '2016-11-7' },
        { title : '制作职称外语等级考试报名表', date : '2016-11-7' },
        { title : '制作职称外语等级考试报名表', date : '2016-11-7' },
        { title : '制作职称外语等级考试报名表', date : '2016-11-7' },
        { title : '制作职称外语等级考试报名表', date : '2016-11-7' },
        { title : '制作职称外语等级考试报名表', date : '2016-11-7' },
        { title : '制作职称外语等级考试报名表', date : '2016-11-7' },
        { title : '制作职称外语等级考试报名表', date : '2016-11-7' },
        { title : '制作职称外语等级考试报名表', date : '2016-11-7' },
        { title : '制作职称外语等级考试报名表', date : '2016-11-7' },
        { title : '制作职称外语等级考试报名表', date : '2016-11-7' },
        { title : '制作职称外语等级考试报名表', date : '2016-11-7' }
      ])
    };
    this.handleSelectRow = this.handleSelectRow.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  //toNews1d1() {
  //  this.props.navigator.push({ id : "news1d1" });
  //}

  handleSelectRow() {
    this.props.navigator.push({ videoPage : true, title : "课程详情" });
  }

  handleBack() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={[styles.flexRowMargin]}>
        <ListView
          style={{ width : ScreenWidth, flex : 1 }}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <View>
              <TouchableHighlight underlayColor='rgba(24,36,35,0.1)' onPress={this.handleSelectRow}>
                <View style={[styles.listCell]}>
                  <Image
                    onPress={this.handleSelectRow}
                    style={styles.pict}
                    source={require('../../img/courseList1.jpeg')}
                  />
                  <View style={[styles.textBlock]}>
                    <Text style={[styles.listTitle]}>{ rowData.title }</Text>
                    <Text style={[styles.listText]}>{ '讲师：暂无'}</Text>
                    <View style={[styles.flexRow]}>
                      <Text style={[styles.listDate]}>{ '课程：1'}</Text>
                      <Text style={[styles.listDate]}>{ '浏览：12'}</Text>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
              <View>
                <Text style={[styles.listLine]}> </Text>
              </View>
            </View>}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  flexRowMargin : {
    flexDirection : 'row',
    flex : 1,
    marginTop : 44
  },
  flexRow : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    flex : 1,
    marginTop : 3
  },
  listCell : {
    height : 102,
    flexDirection : 'row',
  },
  pict : {
    width : 150,
    height : 90,
    resizeMode : Image.resizeMode.cover,
    marginTop : 6,
    marginLeft : 6,
    marginRight : 6,
    borderRadius : 15
  },
  textBlock : {
    flex : 1,
  },
  listTitle : {
    fontSize : 20,
    marginLeft : 9,
    lineHeight : 24,
    marginRight : 9,
    marginTop : 6,
    //marginBottom : 9
  },
  listText : {
    fontSize : 16,
    marginLeft : 9,
    marginRight : 9,
    marginTop : 3,
    //marginBottom : 9
  },
  listDate : {
    flex : 1,
    fontSize : 12,
    marginLeft : 9,
    color : '#666',
    marginBottom : 9
  },
  listLine : {
    height : 1,
    width : ScreenWidth,
    backgroundColor : '#eee',
  },
});

export default CourseList;