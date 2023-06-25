import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import myImage from './img.png'

 
const steps = [
    {
        id: '0',
        message: 'Hi there! What is your name?',
        trigger: '1',
    }, {
        id: '1',
        user: true,
        trigger: '2'
    }, {
        id: '2',
        message: 'Hi {previousValue}! How can I assist you?',
        trigger: '3',
    }, {
        id: '3',
        message: " Please write your message here.",
        trigger: 4
    }, {
      id: '4',
      user: true,
      trigger: '5',
    },
    {
      id: '5',
        component: (
            <div>
                You can connect with me on Telegram by clicking the button below:
                <br />
                <a
                    href="https://telegram.me/gyashi"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Join & Lets Connect!
                </a>
            </div>
        ),
        end: true,
  },
];
 
// Creating our own theme
const theme = {
    background: 'white',
    headerBgColor: '#F03939',
    headerFontSize: '20px',
    botBubbleColor: '#F03939',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#848484',
    userFontColor: 'white',
};

 
// Set some properties of the bot
const config = {
  
    floating: true,
    background:'#F03939',
    floatingStyle: {
      right: '89px',
      bottom:'20px' // Set the distance from the right side here
  },
  botAvatar: myImage,
    botAvatarStyle: {
        width: '50px',
        height: '50px',
    },
    
};
 
function Chatbot() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="Lets Talk!"
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
        </div>
    );
}
 
export default Chatbot;