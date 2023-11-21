import React, {useState, useEffect} from 'react'
import styles from './antitherapy.module.css'

const nameInsults = [
    "Wow, what a great name... How can I assist you today?",
    "Wow, with a name like that, you definitely were an accident. How's your day going?",
    "Ha. You thought I cared what your name was. Need some advice?",
    "Is that the best your parents could come up with? How can I help?",
    "Your name must be a real conversation starter... for all the wrong reasons. Tell me, what's on your mind?",
    "I've heard better names from a random name generator. How's life treating you?",
    "Did your parents lose a bet when they named you? What can I do for you today?"
  ];
  
const getRandomInsult = () => {
    const randomIndex = Math.floor(Math.random() * nameInsults.length);
    return nameInsults[randomIndex];
};

// async function sendChatRequest(userInput) {
//     const requestOptions = {
//         method: 'POST',
//         mode: 'cors',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ user_input: userInput })
//     };

//     try {
//         const response = await fetch('https://3.227.50.118/chat', requestOptions);
//         const data = await response.json();
//         console.log(data); // Logging the response
//         // Handle the response data as needed
//     } catch (error) {
//         console.error('Error during fetch:', error);
//         // Handle the error appropriately
//     }
// }

const handleSendMessage = () => {
    const userInput = 'Hello, how are you?'; // Replace with actual user input
    sendChatRequest(userInput);
};

const Message = (props) => {
    return(
        <div className={styles.message}>
            <img src={props.message.avatar} className={styles.avatar} />
            <p className={styles.text}>
                {props.message.text}
            </p>
        </div>
    )
}


const AntiTherapy = () => {
    const [inputText, setInputText] = useState('')
    const [loading, setLoading] = useState(false)
    const [messages, setMessages] = useState([
        {
            avatar: "https://dbl9c3jtrxi8u.cloudfront.net/maggie_bot_avatar.png",
            text: "Welcome to AntiTherapy. I'm your virtual therapist, Maggie. What's your name?"
        }
    ])

    const handleSubmit = () => {
        if (inputText) {
            setLoading(true)
            const newMessage = {
                avatar: "https://dbl9c3jtrxi8u.cloudfront.net/koala_avatar.png",
                text: inputText
            };
            const updatedMessages = [...messages, newMessage]; // Add user's message and loading indicator
            setInputText('');
            setMessages(updatedMessages);
            // Check if it's the user's first reply (second message in the array)
            if (messages.length === 1) {
                setTimeout(() => {
                const insultMessage = {
                    avatar: "https://dbl9c3jtrxi8u.cloudfront.net/maggie_bot_avatar.png",
                    text: getRandomInsult()
                    
                };
                const updatedMessagesWithInsult = [...updatedMessages, insultMessage];
                setMessages(updatedMessagesWithInsult);
                setLoading(false); 
                }, 3000);
            } else{
                setLoading(false)
            }
            }
};

  return (
    <div>
    <div className={styles.logo_container}>
            <img src="https://dbl9c3jtrxi8u.cloudfront.net/anti_therapy_logo.png"/>
        </div>
    
    <div className={styles.container}>
        
        <div className={styles.chatbox}>
            {messages.map((message,index)=>{
                return(
                    <Message message={message} key={index}/>
                )
            })}

            {loading ?
            <div style={{display:'table'}}>
                <div className={styles.loading}>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                </div>
            </div>
            :
            null
            }
        </div>


        <div className={styles.input}>
            <input 
                type="text" 
                placeholder='Enter A Message'
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <button type="button" onClick={()=>{
                const userInput = "Hello, how are you?"; 
                fetch('http://3.227.50.118/chat', {
                    method: 'POST',
                    mode: 'cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ user_input: userInput })
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Response:', data);
                    // Additional handling of the response data if necessary
                })
                .catch(error => {
                    console.error('Fetch error:', error);
                });
            }}>Submit</button>
        </div>
    </div>
    </div>
  )
}

export default AntiTherapy