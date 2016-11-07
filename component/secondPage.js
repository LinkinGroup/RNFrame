// listView
import React, { Component } from 'react';
import { AppRegistry, Text, View, ListView } from 'react-native';

class AwesomeProject extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([{name:'jkl'}, {name:'uio'}]),
        };
    }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text>{rowData.name}</Text>}
            />
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);