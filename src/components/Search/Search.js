import { useDispatch, useSelector } from 'react-redux';
import { filterAction } from '../../redux/actions/contactsActions';

export default function Search() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const handleSearchChange = e => {
    dispatch(filterAction(e.currentTarget.value));
  };
  return (
    <>
      <input typ="text" value={filter} onChange={handleSearchChange} />
    </>
  );
}
