import React from 'react'
import Slot from './Slot'

import { choice1 } from './choice1'
import { choice2 } from './choice2'
import { choice3 } from './choice3'
import { choice4 } from './choice4'


class SlotBase extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            arcList: choice1,
            terrainList: choice2,
            objectList: choice3,
            moodList: choice4,
            renderText: false,
            targetNum: '',
            target1: null,
            target2: null,
            target3: null,
            target4: null,
            text1: null,
            text2: null,
            text3: null,
            text4: null,

        }
    }

    pageRefresh() {
        window.location.reload(true)
    }

    updateTarget(id, newTarget) {
        if (id === 1) {
            this.setState({
                target1: newTarget,
            })
        } else if (id === 2) {
            this.setState({
                target2: newTarget,
            })
        } else if (id === 3) {
            this.setState({
                target3: newTarget,
            })
        } else {
            this.setState({
                target4: newTarget,
            })
        }
    }

    updateText() {
        this.setState((prevState, props) => ({
            text1: this.state.arcList[`${prevState.target1}`],
            text2: this.state.terrainList[`${prevState.target2}`],
            text3: this.state.objectList[`${prevState.target3}`],
            text4: this.state.moodList[`${prevState.target4}`],
        }))

    }



    render() {
        const renderText = this.state.renderText
        return (
            <div>
                <div className="slotmachine">
                    <h3 className="slot-title">Arc</h3>
                    <h3 className="slot-title">Terrain</h3>
                    <h3 className="slot-title">Object</h3>
                    <h3 className="slot-title">Mood</h3>
                    <Slot list={choice1} data={
                        {
                            targetId: 1,
                            targetNum: this.state.targetNum,
                            updateTarget: this.updateTarget.bind(this),
                        }
                    } />
                    <Slot list={choice2} data={
                        {
                            targetId: 2,
                            targetNum: this.state.targetNum,
                            updateTarget: this.updateTarget.bind(this)
                        }
                    } />
                    <Slot list={choice3} data={
                        {
                            targetId: 3,
                            targetNum: this.state.targetNum,
                            updateTarget: this.updateTarget.bind(this)
                        }
                    } />
                    <Slot list={choice4} data={
                        {
                            targetId: 4,
                            targetNum: this.state.targetNum,
                            updateTarget: this.updateTarget.bind(this)
                        }
                    } />
                    <br />
                    <button className="spinbutton" onClick={() => this.pageRefresh()}>Reset</button>
                    <br />
                    <button className="spinbutton" onClick={() => this.updateText()} >Render Text</button>
                </div>
                <div className="renderedtext">
                    <h5>時代背景:{this.state.text1}</h5>
                    <h5>製品に関するテーマ:{this.state.text2}</h5>
                    <h5>想像する製品や技術:{this.state.text3}</h5>
                    <h5>利用により得られる感情:{this.state.text4}</h5>
                </div>

            </div >
        )
    }
}

export default SlotBase
