import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Service } from '../http/ApiService'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import styles from './CreateChatPage.module.css'
import Chat from './Chat'
export default function CreateChatPage() {

    const { idInstance, apiTokenInstance } = useContext(AuthContext)
    const navigate = useNavigate()
    const [number, setNumber] = useState('')
    const [chats, setChats] = useState([])
    useEffect(() => {
        Service.getAllChats({ idInstance, apiTokenInstance })
            .then(data => {
                console.log(data);
                setChats(data)
            })
            .catch(err => console.log(err))
        // eslint-disable-next-line
    }, [])
    return (
        <div className={styles.body}>
            <div className={styles.back_side}>

            </div>
            <div className={styles.user_page}>
                <div>
                    <div className={styles.tools}>
                            write number and create chat
                            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
                            <button onClick={() => navigate(`/chat/${number}`)}>Create</button>
                        </div>

                    <ul className={styles.ul}>
                        {chats && chats.map(chat =>
                        <div className={styles.contact}>              
                            <img width={40} src={'https://cdn-icons-png.flaticon.com/512/1946/1946429.png'} alt="" />
                        
                            <li key={chat.id} style={{ cursor: 'pointer' }}   >
                                <Link to={`/chat/${chat.id}`}>
                                {chat.id}
                                </Link>
                            </li>
                            </div>    
                        )}
                    </ul>
                </div>
               

            </div>
        </div>
    )
}
