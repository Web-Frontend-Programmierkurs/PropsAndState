import React, { Component } from 'react'
import List from './List'
import BeverageDetails from './BeverageDetails'
import BeverageInput from './BeverageInput'
import { immutableMove } from './lib/arrayHelper'

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

  removeBeverage = id => {
    this.setState(state => ({
      beverages: state.beverages.filter(b => b.id !== id)
    }))
  }

  addBeverage = newBeverage => {
    this.setState(state => ({
      beverages: [...state.beverages, newBeverage]
    }))
  }

  changeBeveragePosition = (from, to) => {
    this.setState(state => ({
      beverages: immutableMove(state.beverages, from, to)
    }))
  }

  render() {
    const { beverages, activeBeverageId } = this.state
    const activeBeverage = beverages.find(b => b.id === activeBeverageId)
    return [
      <BeverageInput key={0} addBeverage={this.addBeverage} />,
      <List
        key={1}
        data={beverages}
        onItemClick={this.setActiveBeverageId}
        removeItem={this.removeBeverage}
        changeItemPosition={this.changeBeveragePosition}
      />,
      activeBeverage && (
        <BeverageDetails
          key={2}
          name={activeBeverage.name}
          description={activeBeverage.description}
        />
      )
    ]
  }
}

export default App
