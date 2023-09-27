import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { AuthContext } from '../context/AuthContext'
import { Service } from '../http/ApiService'
import styles from './Chat.module.css'
export default function Chat({ props }) {
    const params = useParams()
    const { idInstance, apiTokenInstance } = useContext(AuthContext)
    const [message, setMessage] = useState('')
    const [refreshed, setRefreshed] = useState(false)
    const [lastMessages, setLastMessages] = useState([])
    const [loading, setLoading] = useState(false)
    const sendMessage = () => {
        Service.sendMessage({ idInstance, apiTokenInstance, chatId: params.chatId, message })
            .then(data => {
                setMessage('')
                setRefreshed(refresh => !refresh)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        setLoading(true)
        Service.getLastMessages({ idInstance, apiTokenInstance, chatId: params.chatId })
            .then(data => setLastMessages(data))
            .catch(err => console.log(err))
            .finally(setLoading(false))
    }, [refreshed])
    return (
        <div>
            {loading ?
                <p>Loading ...</p>
                : <ul>
                    {lastMessages.map(item =>
                        <li>
                            {item?.extendedTextMessage?.text}
                        </li>
                    )}
                </ul>
            }
            {/* <ul>

            {lastMessages.length && lastMessages.map(item => 
                <li>
                    {item.extendedTextMessage.text}
                </li>
                )}
            </ul> */}
            <button onClick={() => setRefreshed(refresh => !refresh)}>Refresh</button>
            <div className={styles.user_info}>
                <p>chat id: {props}{params.chatId}</p>
            </div>
            <div>
                <div className={styles.get_massage}></div>
                <input type="text" className={styles.post_massage} value={message} onChange={(e) => setMessage(e.target.value)} />
                <button className={styles.send_btn} onClick={sendMessage}>send</button>
            </div>
        </div>
    )
}
