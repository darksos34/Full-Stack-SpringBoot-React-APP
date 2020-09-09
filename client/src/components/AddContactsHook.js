import React, { useState, useEffect } from "react";

function AddContactsHooks(){
    const [addContact, setAddContact] = useState();

    useEffect(() =>{
        const id = setInterval  (() => {
            setAddContact(addContact + 1)
        }, 1000);
        return () => clearInterval(id)
    }, [])

    // submitContact(event) {
    //     event.preventDefault();
    //
    //     const contact = {
    //         firstName: this.refs.firstName.value,
    //         lastName: this.refs.firstName.value,
    //         email: this.refs.email.value
        }

function addContact() {

}

fetch("http://localhost:8080/api/contacts", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addContact),
        })
            .then(response => response.json());

        window.location.reload()






        return (

            <div className="row">
                <form className="col s12" onSubmit={addContact}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Placeholder" ref="firstName" type="text" className="validate"/>
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input ref="lastName" type="text" className="validate"/>
                            <label htmlFor="lastName">Last Name</label>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input ref="email" type="email" className="validate"/>
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>

                        <div className="row">
                            <button className="waves-effect waves-light btn" type="submit" name="action">Submit</button>

                        </div>
                    </div>
                </form>
            </div>

        )


export default AddContactsHooks;

