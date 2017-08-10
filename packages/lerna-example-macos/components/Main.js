import React from 'react'
import { StyleSheet, Text, View, Button, ListView, RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import fetchCatFacts from '@jlegrone/lerna-example-redux-lib/lib/actions/fetchCatFacts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
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
  },
  button: {
    width: 200,
  },
})

const NUM_FACTS = 5

class Main extends React.Component {
  constructor() {
    super(...arguments)
    this.fetch = () => this.props.dispatch(fetchCatFacts(NUM_FACTS))
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    const hasFacts = this.props.list.length > 0

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Cat Facts!
        </Text>
        {hasFacts && <ListView
          dataSource={ds.cloneWithRows(this.props.list)}
          renderRow={fact => <Text style={styles.row}>{fact}</Text>}
          renderSeparator={(_, index) => <View style={styles[index < NUM_FACTS-1 ? 'separator-lined' : 'separator-unlined']} />}
          enableEmptySections={true}
        />}
        <Button
          onPress={this.fetch}
          style={styles.button}
          title={hasFacts ? "Get more facts..." : "Subscribe"}
        />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return state.facts
}

export default connect(mapStateToProps)(Main)
