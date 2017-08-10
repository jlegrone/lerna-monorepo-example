import React from 'react'
import { StyleSheet, Text, View, Image, ListView, RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import fetchCatFacts from '@jlegrone/lerna-example-redux-lib/lib/actions/fetchCatFacts'
import cat from '../images/cat.png'

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginTop: 30
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
  constructor() {
    super(...arguments)
    this.fetch = () => this.props.dispatch(fetchCatFacts(NUM_FACTS))
  }

  componentDidMount() {
    this.fetch()
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    return (
      <ListView
        refreshControl={
          <RefreshControl
            refreshing={this.props.isFetching}
            onRefresh={this.fetch}
          />
        }
        dataSource={ds.cloneWithRows(this.props.list)}
        renderHeader={() => <View key="cat" style={styles.header}><Image source={cat} /></View>}
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
