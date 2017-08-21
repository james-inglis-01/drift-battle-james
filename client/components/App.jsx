import React from 'react'

// import CarInfo from './CarInfo'

import cardata from '../carData'
console.log(cardata)


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      carBox1: null,
      carBox2: null,
      winner: null,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleBattle = this.handleBattle.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClick(car) {
    if (!this.state.carBox1) {
      return this.setState({
        carBox1: car
      })
    }
    if (!this.state.carBox2) {
      this.setState({
        carBox2: car
      })
    }
  }

  handleBattle() {
    if (this.state.carBox1.horsePower > this.state.carBox2.horsePower) {
      this.setState({ winner: this.state.carBox1 })
    } else {
      this.setState({ winner: this.state.carBox2 })
    }
  }

  handleClose(e) {
    this.setState({
      [e.target.name]: null // <computed properties
    })
  }

  render() {
    return (
      <div className='container'>
        <h1 className='header'>Drift - Battle</h1>
        <h2 className='sub-header'>ド リ フ ト - 	バタル</h2>
        <p className='instructions'>Choose two cars for battle!</p>
        <div className='car-pics'>
          {cardata.map((car) => {
            return (
              <img key={car.id}
                onClick={() => this.handleClick(car)}
                className='item'
                src={`images/${car.image}`}
                alt={`${car.make} ${car.model}`} />)
          })
          }
        </div>
        <div className='boxes'>
          {this.state.carBox1 && <div><img className='carBox1' src={`/images/${this.state.carBox1.image}`} /><button name='carBox1' className='closeBtn' onClick={this.handleClose}>X</button></div>}
          {this.state.carBox1 && this.state.carBox2 && <button onClick={this.handleBattle} className='battle-btn'>Battle!</button>}
          {this.state.carBox2 && <div><img className='carBox2' src={`/images/${this.state.carBox2.image}`} /><button name='carBox2' className='closeBtn' onClick={this.handleClose}>X</button></div>}
        </div>
        <div className='winnerParent'>
          {this.state.winner && <img className='winnerChild' src={`/images/${this.state.winner.image}`} />}
        </div>
      </div>
    )
  }
}

// handleClose(e) {
//   if (e.target.name === 'carBox1') {
//     this.setState({
//       carBox1: null
//     })
//   } else if (e.target.name === 'carBox2') {
//     this.setState({
//       carBox2: null
//     })
//   }
// }