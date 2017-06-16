import React from 'react'
import { StyleSheet, Text, View, Button, Image, ListView, RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import { fetchCatFacts } from '@jlegrone/lerna-example-redux-lib/lib/actions'
import cat from '../images/cat.png'

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
  },
  row: {
    marginLeft: 5,
    marginRight: 5,
  },
  'separator-lined': {
      height: StyleSheet.hairlineWidth,
      backgroundColor: '#8E8E8E',
      marginTop: 10,
      marginBottom: 10,
  },
  'separator-unlined': {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'transparent',
    marginTop: 10,
    marginBottom: 10,
  }
});

const NUM_FACTS = 1

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCatFacts(NUM_FACTS))
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    return (
      <ListView
        refreshControl={
          <RefreshControl
            refreshing={this.props.isFetching}
            onRefresh={() => this.props.dispatch(fetchCatFacts(NUM_FACTS))}
          />
        }
        dataSource={ds.cloneWithRows(this.props.list)}
        renderHeader={() => <View style={styles.header}><Image source={cat} /></View>}
        renderRow={fact => <Text style={styles.row}>{fact}</Text>}
        renderSeparator={(_, index) => <View style={styles[index < NUM_FACTS-1 ? 'separator-lined' : 'separator-unlined']} />}
        enableEmptySections={true}
      />
    )
  }
}

function mapStateToProps(state) {
  return state.facts
}

export default connect(mapStateToProps)(Home)
