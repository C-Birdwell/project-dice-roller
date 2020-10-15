import React, { Component } from 'react'
import { Roller } from '../components'

export class DashboardPage extends Component {
  render() {
    return (
      <div>
        <Roller number={6} />
        <Roller number={20} />
        <Roller number={100} />
      </div>
    )
  }
}
