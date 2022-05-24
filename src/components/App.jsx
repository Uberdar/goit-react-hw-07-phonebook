import Phonebook from './Phonebook/Phonebook';
import TodoRender from './TodosRender/TodosRender';
import { useDispatch } from 'react-redux';
import { getContacts } from '../redux/actions/contactsOperations';
import { useEffect } from 'react';
import Search from './Search/Search';
export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  });
  return (
    <div>
      {/* <button onClick={testAsyncFunc}>GETAPIDATA</button> */}
      <Phonebook />
      <Search />
      <TodoRender />
    </div>
  );
}
