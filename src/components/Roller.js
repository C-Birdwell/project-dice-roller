import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export class Roller extends Component {
  renderDice() {
    const { number } = this.props

    return <div>{number}</div>
  }

  render() {
    return (
      <div className="row">
        <FontAwesomeIcon icon={faDiceD20} />
        {this.renderDice()}
        <p>&#177;</p>
        <input />
        <FontAwesomeIcon icon={faChevronUp} />
        <FontAwesomeIcon icon={faChevronDown} />
        <button>Add dice</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

function mapDispatchToProps() {
  return bindActionCreators({})
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Roller)
