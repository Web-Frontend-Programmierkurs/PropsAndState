import React, { Component } from 'react'
import List from './List'
import BeverageDetails from './BeverageDetails'

class App extends Component {
  state = {
    beverages: [
      {
        id: 1,
        name: 'Coca Cola',
        description: 'The most famous coke - you might have heard of it.'
      },
      {
        id: 2,
        name: 'Vita Cola',
        description: 'The Coke of Eastern Germany.'
      },
      {
        id: 3,
        name: 'Fritz Cola',
        description: 'Some hipster stuff.'
      }
    ],

    activeBeverageId: null
  }

  setActiveBeverageId = id => {
    this.setState({
      activeBeverageId: id
    })
  }

  render() {
    const { beverages, activeBeverageId } = this.state
    const activeBeverage = beverages.find(b => b.id === activeBeverageId)
    return [
      <List data={beverages} onItemClick={this.setActiveBeverageId} />,
      activeBeverage && (
        <BeverageDetails
          name={activeBeverage.name}
          description={activeBeverage.description}
        />
      )
    ]
  }
}

export default App
