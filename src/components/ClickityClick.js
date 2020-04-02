// Code ClickityClick Component Here
import React from 'react'

 class ClickityClick extends React.Component {

    state ={
        hasBeenClicked: false
    }

    handleclick = () => {
        this.setState(previousState => {
            return {
            hasBeenClicked: !previousState.hasBeenClicked
            }
        })
    }


    render(){
        return(
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleclick}>Click me!</button>
            </div>
        )
    }
}

export default ClickityClick