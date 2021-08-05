import React from 'react'
import './contact.css'

export const Contact =() => {
    return (
        <div className="contact">
            <form>
                <div>
                    <label htmlFor="Name">Name</label>
                    <input type="text" name="name"required></input>
                </div>
                <div >
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="email" required></input>
                </div>
                <div >
                    <label htmlFor="Subject">Subject</label>
                    <input type="text" name="subject" required></input>
                </div>
                <div >
                    <label htmlFor="Message" >Message</label>
                    <textarea cols="40" rows="20" name="message" required></textarea>
                </div>
                <button type="submit">Send message</button>
            </form>
        </div>
    )
}
