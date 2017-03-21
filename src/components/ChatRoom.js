import React, { Component } from 'react';
/*global firebase */
class ChatRoom extends Component {
    
    constructor(props, context) {
    super(props, context)
    this.updateMessage = this.updateMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.state = {
        message: '',
        messages: []
    }
}

    //firebase life cycle method
    componentDidMount() {
    console.log("We are LIVE now.")
    firebase.database().ref('messages/').on('value', (snapshot) => {
        const currentMessages = snapshot.val()

        if (currentMessages != null) {
            this.setState({
                messages: currentMessages
            })
        }
    })
}

    
    
    
    updateMessage(e) {
            console.log("Message update:" + e.target.value)
            this.setState({
                message: e.target.value
                //this constantly updates the message depending on what's in the box
            })
            
            //target value is the stuff in the text box
        }
        
    submitMessage(e){
        //this is called in the onClick property of the button
        console.log("Submit message:" + this.state.message); //not e!
        const nextMessage = { //Create the new message
            id: this.state.messages.length,
            text: this.state.message
        }
        firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)
        
        //make a new list with the old messages in there
        // var list = Object.assign([], this.state.messages);
        // list.push(nextMessage); //add the new message
        // this.setState({
        //     messages: list//change the state to the new, completed list
          
        // })
        
        
    }
    render(){
        //change each member of the array into an LI in JSX
        const currentMessages = this.state.messages.map((message, i) => {
        return (<li key = {message.id}>{message.text} </li>
            )
        })
        return( //pass in the messages object instead of each message individually
             <div>
                <ol>
                    {currentMessages}
                </ol>
                <input onChange = {this.updateMessage} type="text" placeholder="Message"/>
                <button onClick = {this.submitMessage}>Submit Message</button>   
             </div>   
        )
    }
}

export default ChatRoom