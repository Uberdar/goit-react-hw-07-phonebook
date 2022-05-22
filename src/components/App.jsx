import Phonebook from './Phonebook/Phonebook';
import TodoRender from './TodosRenderClass/TodosRender';
import { useDispatch } from 'react-redux';
import { getContacts } from './Operations/operations';
import { useEffect } from 'react';
export default function App() {
  const dispatch = useDispatch();
  // async function testAsyncFunc() {
  //   let x = await fetch('https://628a1a225da6ddfd5d5fbdb3.mockapi.io/contacts');
  //   let xx = await x.json();
  //   console.log('xx: ', xx);
  // }
  useEffect(() => {
    dispatch(getContacts());
  });
  return (
    <div>
      {/* <button onClick={testAsyncFunc}>GETAPIDATA</button> */}
      <Phonebook />
      <TodoRender />
    </div>
  );
}
