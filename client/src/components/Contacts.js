import React, {Component} from 'react';
import SingleContact from './SingleContact';
import AddContacts from './AddContacts';


//Basic React will be transformed to React-hooks
//Code is just a demo
export  default class Contacts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        };
    }

    //fetch data will be replaced with Axios
    componentDidMount() {
        fetch('http://localhost:8080/api/contacts')
            .then(response => response.json())
            .then(data => this.setState({contacts: data}))
    }


    render() {
        return(
            <div>
                <div className="row">
                    <AddContacts/>

                </div>
                <div className="">
                    { this.state.contacts.map((item) =>(
                        <SingleContact key={item.id} item={item}/>
                    ))}

                </div>

            </div>
        )
    }
}
