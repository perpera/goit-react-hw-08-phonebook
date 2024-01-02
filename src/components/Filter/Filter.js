import { FilterInput, FilterTitle } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/contacts/selectors';
import { changeFilter } from '../../redux/contacts/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        type="text"
        value={filter}
        name="filter"
        id="filter"
        onChange={event => dispatch(changeFilter(event.target.value))}
        required
      />
    </div>
  );
};
