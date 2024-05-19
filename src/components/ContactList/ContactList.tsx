import Contact from 'components/Contact/Contact';
import { List } from './ContactList.styled';
import { useGetContactsQuery } from 'store/contacts/contactsSlice';
import { useSelector } from 'react-redux';
import { filterSelector } from 'store/filter/filterSelector';

const ContactList = () => {
    const { data: contacts = [], isLoading } = useGetContactsQuery();

    const filter = useSelector(filterSelector);

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(normalizedFilter)
        );
    };

    return (
        <>
            {isLoading ? (
                <div>Wait a moment...</div>
            ) : (
                <>
                    <List>
                        {getVisibleContacts().map(({ id, name, phone }) => (
                            <Contact
                                key={id}
                                id={id}
                                name={name}
                                phone={phone.toString()}
                            ></Contact>
                        ))}
                    </List>
                </>
            )}
        </>
    );
};

export default ContactList;
