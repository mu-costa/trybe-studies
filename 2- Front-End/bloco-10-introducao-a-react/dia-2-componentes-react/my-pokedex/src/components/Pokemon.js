import React, {Component} from "react";
import '../index.css'
class Pokemon extends Component {
    render(){
        return (
            <div className='pokemon'>
                <h1>{this.props.name}</h1>
                <img src={this.props.image} alt=''></img>
                <p>{this.props.type}</p>
                <p>{this.props.weight} {this.props.measurementUnit}</p>
            </div>
        )
    }
}

export default Pokemon;