'use strict';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  ScrollView
} from 'react-native';
import React from 'react';

var lineWidth = Dimensions.get('window').width - 15;

var styles = StyleSheet.create({
  container : {
    marginTop : 64,
    flex : 1,
    backgroundColor : '#fff'
  },
  title : {
    fontSize : 20,
    fontWeight : "500",
    paddingTop : 10,
    paddingBottom : 10,
    paddingLeft : 10,
    paddingRight : 10,
    lineHeight : 28
  },
  flexRow : {
    flexDirection : 'row',
    justifyContent : 'space-between',
  },
  infoBlock : {
    color : '#666',
    marginLeft : 10,
    margin : 10,
  },
  center : {
    flexDirection : 'row',
    justifyContent : 'center',
  },
  listLine : {
    //flexDirection : 'row',
    //justifyContent : 'center',
    //alignItems : 'center',
    height : 1,
    width : lineWidth,
    backgroundColor : '#eee',
  },
  scrollView : {
    paddingTop : 10,
    paddingBottom : 21,
    paddingLeft : 15,
    paddingRight : 15,
  },
  articleTitle : {
    color : '#333',
    fontSize : 24,
    fontWeight : "300",
    paddingBottom : 39,
    paddingLeft : 30,
    paddingRight : 30,
    lineHeight : 30
  },
  article : {
    color : '#333',
    fontSize : 18,
    lineHeight : 30,
    paddingBottom : 18,
  }
});

class NewsContent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.title }>先锋街道社区教育中心举行《准则》《条例》宣讲</Text>
        <View style={styles.flexRow}>
          <Text style={ styles.infoBlock }>来源： 海门街道</Text>
          <Text style={ styles.infoBlock }>2016-11-7</Text>
          <Text style={ styles.infoBlock }>浏览：21</Text>
        </View>
        <View style={styles.center}>
          <Text style={[styles.listLine]}> </Text>
        </View>
        <ScrollView style={ styles.scrollView}>
          <Text style={ styles.articleTitle }>先锋街道社区教育中心举行《准则》《条例》宣讲</Text>
          <Text style={ styles.article }>
            &nbsp;&nbsp;&nbsp;&nbsp;
            先锋街道社区教育中心举行专题讲座，学习贯彻新修订的《中国共产党廉洁自律准则》及《中国共产党纪律处分条例》，区委党校胡永洲副校长做专题辅导，街道全体机关工作人员，村干部，部分单位负责人等150余人参加了活动。
            胡校长从新《准则》新《条例》修订背景、主要内容、学习领会《准则》、《条例》需要把握的几个重点问题及学习贯彻的建议等四个方面进行了细致讲解，并结合相关条款对典型腐败案例进行剖析论证。
            街道纪工委负责人在会上强调，在当前高压反腐新常态下，全体党员干部要有高度的政治敏感性，从严要求自己，规范自己的言与行，主动适应新常态，争做人民满意的基层干部。参加听讲的干部均表示受益匪浅，在今后的工作中将争做新《准则》和新《条例》的践行者，牢记各项廉洁自律要求、严守党纪党章。
            讲座后，大家一起观看了警示教育片《法纪如山 用权当戒》。
            为进一步提高街道、村党员干部职业道德和廉洁从政能力，先锋街道有计划的开展各项集体学习活动，以不断提升基层组织建设水平和干部队伍的整体素质，并把提升农村党员干部素质纳入党建目标管理责任制，作为一项重要工作常态化、制度化加以推进，自去年下半年，一共已举办了五期培训。
          </Text>
        </ScrollView>
      </View>
    );
  }
}
export default NewsContent

