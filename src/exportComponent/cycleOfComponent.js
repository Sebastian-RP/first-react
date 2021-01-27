import React from 'react'

// here we learn about de lifrecycle of components in react. Use of setState
class Card extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            image: 'deku-to-react.jpg',
        }
    }
    timeTicking(){
        console.log("hello I guest");
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                image: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/bulbasaur.png?alt=media&token=567caf19-af47-414e-a9d4-3854ab24c7dc'
            })
        }, 5000)
    }
    render(){
        const { image } = this.state
        return(
            <div>
            <h2>are you programing son?</h2>
            <img src={this.state.image} alt="I guess something comes here"></img>
            </div>
        )
    }
}

export default Card;