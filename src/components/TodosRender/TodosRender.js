import { removeContacts } from 'redux/actions/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, getItems } from 'redux/actions/contactsSelectors';

export default function TodoRender() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const items = useSelector(getItems);
  const filtereditems = items.filter(elem =>
    elem.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  const rendernewElem = () => {
    // console.log('items: ', items);
    return filtereditems.map(elem => {
      return (
        <div key={elem.id}>
          <span>name: {elem.name} </span>
          <span>number: {elem.phone} </span>
          <button
            type="button"
            id={elem.id}
            onClick={() => dispatch(removeContacts(elem.id))}
          >
            Delete
          </button>
        </div>
      );
    });
  };
  return (
    <>
      <h2>Contacts</h2>
      {rendernewElem()}
    </>
  );
}
