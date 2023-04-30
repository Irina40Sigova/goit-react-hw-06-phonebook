import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/phonebookSlice';
import { selectContacts, selectFilter } from 'redux/selectors';

import { Box, Title, Div } from './Contacts.styled';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectFilter);

  const visibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  return (
    <>
      <Title>Contacts</Title>
      <Box>
        {visibleContacts().map(e => (
          <Div key={e.id}>
            <p>
              {e.name}: {e.number}
            </p>
            <button type="button" onClick={() => dispatch(deleteContact(e.id))}>
              Delete
            </button>
          </Div>
        ))}
      </Box>
    </>
  );
};
