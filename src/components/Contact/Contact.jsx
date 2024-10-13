import { useDispatch } from 'react-redux';
import s from './Contact.module.css';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { deleteContact } from '../../redux/contactsSlice';

 const Contact =({ id, name, number })=> {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(id))
    }

    return (
        <div className={s.item}>
            <p className={s.contact}>
                <span className={s.name}>
                    <FaUser className={s.icon} />
                    {name}
                </span> 
                <span className={s.number}><FaPhoneAlt className={s.icon} />{number}</span>
            </p>
            <button onClick={handleDelete} className={s.button}>
                Delete
            </button>
        </div>
    );
};

export default Contact;