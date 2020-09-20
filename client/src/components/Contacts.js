import React, { Component} from 'react';
import SingleContact from './SingleContact';
import AddContacts from './AddContacts';

function setContact() {
    return undefined;
}


export  default class Contacts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        };
    }

    contact;
    componentDidMount() {
        fetch('http://localhost:8080/api/contacts')
            .then(response => response.json())
            .then(data => this.setState({contacts: data}))
    }


    render() {

        return (
            <div>
                <div className="row">
                    <AddContacts/>

                    <button onClick={() => setContact(this.contact + 1)}>
                        Click me
                    </button>

                </div>
                <div className="row">
                    {this.state.contacts.map((item) => (
                        <SingleContact key={item.id} item={item}/>
                    ))}

                </div>

            </div>
        )
    }
}
