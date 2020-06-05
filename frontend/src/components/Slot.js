import React from 'react'

const styles = {
    transition: 'all 2s ease-out'
}

class Slot extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            spin: false,
            list: '',
            btnText: 'Spin',
            position: 0,
            targetNum: null,
        }
        this.baseState = this.state
    }

    spinReel() {
        const { spin } = this.state

        const choiceNum = this.props.list.length

        const target = Math.floor(Math.random() * choiceNum)

        const id = this.props.data.targetId

        if (spin) {
            this.setState(this.baseState)
            this.props.data.updateTarget(id, null)
        } else {
            this.setState({
                spin: true,
                position: -((choiceNum) * 100 + (target + 1) * 100),
                btnText: 'Reset',
                targetNum: target,
            })
            this.props.data.updateTarget(id, target)
        }
    }


    render() {
        const { btnText, position } = this.state

        const choice = this.props.list
        const choiceList = choice.map((choice) =>
            <li>{choice}</li>)

        return (
            <div className="slot" >
                <div className="slot-reel">
                    <ul
                        className="choiceList"
                        style={{ ...styles, transform: 'translate( 0px,' + position + 'px)' }}
                    >
                        <li>--選択--</li>
                        {choiceList}
                        {choiceList}
                    </ul>
                </div>
                <button className="individualButton" onClick={() => this.spinReel()}>{btnText}</button>
            </div >
        )

    }

}

export default Slot