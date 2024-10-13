import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { selectContacts } from "../../redux/contactsSlice"
import { selectNameFilter } from '../../redux/filtersSlice'


const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <ul className={s.list}>
            {filteredContacts.map(({ id, name, number }) => (
                <Contact
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                />
            ))}
        </ul>
    );
};

export default ContactList;