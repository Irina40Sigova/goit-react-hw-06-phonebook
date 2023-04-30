import { useSelector } from 'react-redux';

import { LoginForm } from 'components/LoginForm/LoginForm';
import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';

import { Container, Title } from './App.styled';

import { selectContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <Container>
      <Title> Phonebook</Title>
      <LoginForm />
      {contacts.length > 0 ? (
        <>
          <Filter />
          <Contacts />
        </>
      ) : (
        ' NO CONTACTS'
      )}
    </Container>
  );
};
