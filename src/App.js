// import {ChatEngine} from "react-chat-engine";
import './App.css';
import {ChatEngine} from 'react-chat-engine';
// import { ChatFeed } from 'react-chat-engine';
// import ChatFeed from './components/ChatFeed';
import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from './components/LoginForm';


const projectID="7cdbc2bf-8617-45aa-b0fe-8869919b6903";
const App=()=>{
    if (!localStorage.getItem('username')) return <LoginForm />;
    return(

        <ChatEngine
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            // userName="Harsh"
            // userSecret="1234"
            // userName="Interviewer"
            // userSecret="1234" 
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;