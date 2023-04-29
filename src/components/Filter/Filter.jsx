import { useDispatch, useSelector } from 'react-redux';

import { FilterInput, Title } from './Filter.styled';
import { filterContact } from 'redux/phonebookSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const getFilter = e => {
    const value = e.target.value.toLowerCase();
    dispatch(filterContact(value));
  };

  return (
    <>
      <Title>Find contacts by name</Title>
      <FilterInput type="text" value={filter} onChange={getFilter} />
    </>
  );
};
