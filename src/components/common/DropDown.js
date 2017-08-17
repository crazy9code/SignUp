import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, Image, View, ListView, StyleSheet } from 'react-native';

class DropDown extends Component {
    constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(this.props.items),
          showList: false, selected: this.props.title
        };
      }
      onClick() {
        this.setState({ showList: !this.state.showList })
      }
      onSelected(rowData, sec, i) {
        this.setState({ selected: rowData, showList: !this.state.showList })
      }
      renderRow(rowData, sec, i) {
        return (
          <TouchableWithoutFeedback onPress={() => this.onSelected(rowData, sec, i)}>
            <View style={{ height: 30 }}>
              <Text style={{ padding: 10 }}>{rowData}</Text>
            </View>
          </TouchableWithoutFeedback>
        );
      }
      renderItems() {
        if (this.state.showList) {
        return (
          <View style={{ height: 100, width: 200, backgroundColor: 'gray' }}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData, sec, i) => this.renderRow(rowData, sec, i)}
            />
          </View>
        );
      }
     }
      render() {
        return (
          <View style={styles.container}>
              <TouchableWithoutFeedback onPress={this.onClick.bind(this)}>
                <View style={{ width: 200, height: 40, backgroundColor: 'white' }}>
                  <Text style={{ padding: 20 }}>{this.state.selected}</Text>
                </View>
              </TouchableWithoutFeedback>
                {this.renderItems()}
          </View>
        );
      }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    listView: {
      width: 200,
      height: 40,
      marginLeft: 10,
      backgroundColor: 'gray'
    }
  });
export { DropDown };
