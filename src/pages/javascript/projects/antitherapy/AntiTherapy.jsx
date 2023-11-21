import React, {useState, useEffect, useRef} from 'react'
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


const Message = ({ message }) => {
    return (
        <div className={styles.message}>
            <img src={message.avatar} alt="Avatar" className={styles.avatar} />
            <p className={styles.text}>{message.text}</p>
        </div>
    );
};

const AntiTherapy = () => {
    const chatboxRef = useRef(null);
    const [inputText, setInputText] = useState('')
    const [loading, setLoading] = useState(false)
    const [messages, setMessages] = useState([
        {
            avatar: "https://dbl9c3jtrxi8u.cloudfront.net/maggie_bot_avatar.png",
            text: "Welcome to AntiTherapy. I'm your virtual therapist, Maggie. What's your name?"
        }
    ])

    useEffect(() => {
        if (chatboxRef.current) {
            chatboxRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, [messages]);


    const handleSubmit = () => {
        if (inputText) {
            setLoading(true);
    
            // Add user's input to the messages array
            const newMessage = {
                avatar: "https://dbl9c3jtrxi8u.cloudfront.net/koala_avatar.png",
                text: inputText
            };
            setMessages(messages => [...messages, newMessage]);
    
            setInputText('');
    
            if (messages.length === 1) {
                // Send insult after first user input
                setTimeout(() => {
                    const insultMessage = {
                        avatar: "https://dbl9c3jtrxi8u.cloudfront.net/maggie_bot_avatar.png",
                        text: getRandomInsult()
                    };
                    setMessages(messages => [...messages, insultMessage]);
                    setLoading(false);
                }, 3000);
            } else {
                // Fetch request for subsequent inputs
                setTimeout(() => {
                    fetch('https://api.itsnotabugitsafeature.com/api/chat', {
                        method: 'POST',
                        mode: 'cors',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ user_input: inputText })
                    })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        const botMessage = {
                            avatar: "https://dbl9c3jtrxi8u.cloudfront.net/maggie_bot_avatar.png",
                            text: data.response
                        };
                        setMessages(messages => [...messages, botMessage]);
                    })
                    .catch(error => {
                        console.error('Fetch error:', error);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
                }, 3000);
            }
        }
    };
    
    

  return (
    <div>
    <div className={styles.logo_container}>
            <img src="https://dbl9c3jtrxi8u.cloudfront.net/anti_therapy_logo.png"/>
        </div>
    
    <div className={styles.container}>
        
        <div className={styles.chatbox} ref={chatboxRef}>
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
               handleSubmit()
            }}>Submit</button>
        </div>
    </div>
    </div>
  )
}

export default AntiTherapy