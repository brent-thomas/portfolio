import React, {useState, useEffect, useRef} from 'react'
import styles from './antitherapy.module.css'


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
            text: "Welcome to AntiTherapy. I'm your virtual therapist, Maggie. What's on your mind today?"
        }
    ])

    useEffect(() => {
        const chatbox = chatboxRef.current;
        if (chatbox) {
            chatbox.scrollTop = chatbox.scrollHeight;
        }
    }, [messages]);


    const handleSubmit = () => {
        if (inputText && inputText.length > 1) {
            setLoading(true);
    
            // Add user's input to the messages array
            const newMessage = {
                avatar: "https://dbl9c3jtrxi8u.cloudfront.net/koala_avatar.png",
                text: inputText
            };
            setMessages(messages => [...messages, newMessage]);
    
            setInputText('');
    
            
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
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSubmit();
                    }
                }}
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