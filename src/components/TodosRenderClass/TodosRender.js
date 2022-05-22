import { removeContacts } from 'components/Operations/operations';
import { useDispatch, useSelector } from 'react-redux';
// import { deleteidAction } from '../../redux/actions/action';

export default function TodoRender() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.contacts.items);

  const rendernewElem = () => {
    // console.log('items: ', items);
    return items.map(elem => {
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
