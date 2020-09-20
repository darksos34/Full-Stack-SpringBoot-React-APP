import React, { useState, useEffect } from "react";

const AddContactsHooks = () => {
    const [addContact, setAddContact] = useState();

    useEffect(() => {
        const id = setInterval(() => {
            setAddContact(addContact + 1)
        });
        return () => clearInterval(id)
    }, [])

    function submitContact(event) {
        
    }

    submitContact(event);
    {
        event.preventDefault();

        const contact = {
            firstName: this.refs.firstName.value,
            lastName: this.refs.firstName.value,
            email: this.refs.email.value
        }


        return (

            <div className="row">
                <form className="col s12" onSubmit={addContact}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Placeholder" useRef="firstName" type="text" className="validate"/>
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input useRef="lastName" type="text" className="validate"/>
                            <label htmlFor="lastName">Last Name</label>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input useRef="email" type="email" className="validate"/>
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
    }
}
export default AddContactsHooks;

