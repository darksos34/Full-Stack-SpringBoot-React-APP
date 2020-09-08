import React, { useEffect, useState} from 'react';
import SingleContact from './SingleContact';
import AddContacts from './AddContacts';

//Run inspection on browser to analyze error and fix the code
function Contacts() {
    const [contact, setContact] = useState([]);

    useEffect(() => {


        document.title = `You clicked ${contact} times`;
    });


//Basic React will be transformed to React-hooks
//Code is just a demo
// export  default class Contacts extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             contacts: [],
//         };
//     }
//
//     //fetch data will be replaced with Axios
//     componentDidMount() {
//         fetch('http://localhost:8080/api/contacts')
//             .then(response => response.json())
//             .then(data => this.setState({contacts: data}))
//     }
//
//
//     render() {

        return(
            <div>
                <div className="row">
                    <AddContacts/>

                    <button onClick={() => setContact(contact + 1)}>
                        Click me
                    </button>

                </div>
                <div className="row">
                    { this.state.contacts.map((item) =>(
                        <SingleContact key={item.id} item={item}/>
                    ))}

                </div>

            </div>
        )

}
export default new Contacts();
