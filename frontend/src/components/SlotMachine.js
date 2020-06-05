import React from 'react'
import PropTypes from 'prop-types'

import SlotBase from './SlotBase'

class SlotMachine extends React.Component {
    render() {
        return (
            <div>
                <h1 className="title"> The Thing From The Future</h1>
                <SlotBase />

            </div>
        )
    }
}

export default SlotMachine