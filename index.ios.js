/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import  React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TabBarIOS,
    TouchableHighlight,
    Navigator
} from 'react-native';

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

export default React.createClass({
    render() {
        return <ScrollableTabView
            style={{marginTop: 20, }}
            initialPage={0}
            renderTabBar={() => <ScrollableTabBar />}
        >
            <Text tabLabel='Tab #1'>My</Text>
            <Text tabLabel='Tab #2 word word'>favorite</Text>
            <Text tabLabel='Tab #3 word word word'>project</Text>
            <Text tabLabel='Tab #4 word word word word'>favorite</Text>
            <Text tabLabel='Tab #5'>project</Text>
        </ScrollableTabView>;
    },
});

class AwesomeProject extends Component {
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state={
            selectedTab: '历史',
            notifCount: 0,
            presses: 0,
            historyDate: ds.cloneWithRows([{name:'jkl'}, {name:'uio'}, {name:'fda'}, {name:'uisdfgo'}]),
        };
    }
    //进行渲染页面内容
    _renderContent(color:string, pageText: string, num?: number) {
        // 历史页面中的
        if (this.state.selectedTab === '历史'){
            return (
                <View style={[styles.tabContent, {backgroundColor: color}]}>
                    <ScrollableTabView
                        style={{marginTop: 20, }}
                        initialPage={0}
                        renderTabBar={() => <ScrollableTabBar />}
                    >
                        <Text tabLabel='Tab #1'>
                            <Text style={styles.tabText}>{pageText}</Text>
                            <Text style={styles.tabText}>第 {num} 次重复渲染{pageText}</Text>
                            <ListView style={{width:300,height:500}}
                            dataSource={this.state.historyDate}
                            renderRow={(rowData) => <Text style={[styles.listViewCell]}>{rowData.name}</Text>}
                            />
                        </Text>
                        <Text tabLabel='Tab #2 word word'>favorite</Text>
                        <Text tabLabel='Tab #3 word word word'>project</Text>
                        <Text tabLabel='Tab #4 word word word word'>favorite</Text>
                        <Text tabLabel='Tab #5'>project</Text>
                    </ScrollableTabView>
                </View>
            );
        }else{
            return (
            <View style={[styles.tabContent, {backgroundColor: color}]}>
            <Text style={styles.tabText}>{pageText}</Text>
            <Text style={styles.tabText}>第 {num} 次重复渲染{pageText}</Text>
        </View>
    );
        }
    }
    render() {
        return (
            <View style={{flex:1}}>
                <Text style={styles.welcome}>
                    {this.state.selectedTab}
                </Text>
                <TabBarIOS
                    style={{flex:1,alignItems:"flex-end"}}
                    tintColor="white"
                    barTintColor="darkslateblue">
                    <TabBarIOS.Item
                        title="自定义"
                        //icon={require('./images/flux.png')}
                        selected={this.state.selectedTab === '自定义'}
                        onPress={() => {
                            this.setState({
                                selectedTab: '自定义',
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
                                selectedTab: '历史',
                                notifCount: this.state.notifCount + 1,
                            });
                        }}
                    >
                        {this._renderContent('#ffffff', '历史记录', this.state.notifCount)}
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon="downloads"
                        selected={this.state.selectedTab === '下载'}
                        onPress={() => {
                            this.setState({
                                selectedTab: '下载',
                                presses: this.state.presses + 1
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
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        backgroundColor:'#ffffff',
        textAlign: 'center',
        marginTop: 20,
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
    listViewCell:{
        fontSize:20,
        marginLeft:9,
        marginTop:9,
        marginBottom:9
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);