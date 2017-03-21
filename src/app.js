import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChatRoom from './components/ChatRoom';

//aw naw, this is opposite from how python does it

class App extends Component {
    
    render(){
        return(
            <div>
            Right, what's all this then?
            <ChatRoom />
            </div>
        );
    }
    
}

ReactDOM.render(<App />, document.getElementById('app'))