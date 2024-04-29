import { FaTrashAlt } from 'react-icons/fa';
import Lineitem from './Lineitem';

const ItemList = ({ items, handleCheck, handleDelete }) => {
    return (
      <ul>
        {items.map((item) => (
          <Lineitem
          key={item.id}
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            />
        ))}
      </ul>
    )
}

export default ItemList