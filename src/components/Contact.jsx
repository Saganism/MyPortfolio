import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="contact" id="Contact">
                <h1 className="contact-title py-5">
                    Contact Info
                </h1>
                <div className="contact-info py-5">
                    <p className="name fs-3">Abdulazeez Alabbasi</p>
                    <p className="city fs-3">Baghdad, Iraq</p>
                    <p className="email fs-6">abdulazeezalabbasi74@gmail.com</p>
                </div>
            </div>
        )
    }
}
