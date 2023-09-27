import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router'
import styles  from './LoginPage.module.css'

export default function LoginPage() {

    const { setIdInstance, setApiTokenInstance } = useContext(AuthContext)
    const [form, setForm] = useState({
        idInstance: '',
        apiTokenInstance: ''
    })
    const navigate = useNavigate()

    const loginRequest = (e) => {
        e.preventDefault()
        setIdInstance(form.idInstance);
        setApiTokenInstance(form.apiTokenInstance)
        navigate('/')
    }
    return (
        <div className='loginPage'>
            <div className={styles.banner} >
                <div className={styles.banner_itam}>
                <img width={50} src="https://www.freedownloadlogo.com/logos/w/whatsapp-business-bg.svg" alt="" />
                <p>WEB WA Business</p>

                </div>
                
            </div>
            
            <form onSubmit={loginRequest} className={styles.form}>
                <p>login</p>
                <input type='text' placeholder='idInstance' className={styles.input}
                    value={form.idInstance}
                    onChange={(e) => setForm({ ...form, idInstance: e.target.value })}
                /> <br />
                <p>password</p>
                <input type='text' placeholder='apiTokenInstance' className={styles.input}
                    value={form.apiTokenInstance}
                    onChange={(e) => setForm({ ...form, apiTokenInstance: e.target.value })}
                /> <br />
                <input type="submit" value="Login" className={styles.btn}/>
            </form>
        </div>
    )
}
