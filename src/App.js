// import {ChatEngine} from "react-chat-engine";
import './App.css';
import {ChatEngine} from 'react-chat-engine';
// import { ChatFeed } from 'react-chat-engine';
// import ChatFeed from './components/ChatFeed';
import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from './components/LoginForm';


const projectID="45d27b32-18de-4053-8350-3d2c688c58aa";
const App=()=>{
    if (!localStorage.getItem('username')) return <LoginForm />;
    return(

        <ChatEngine
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            // userName="Harsh Lad"
            // userSecret="1234"
            // userName="Tanishq"
            // userSecret="1234"
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;