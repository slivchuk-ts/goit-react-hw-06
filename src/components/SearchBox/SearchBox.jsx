import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter, changeFilter } from '../../redux/filtersSlice';
import s from './SearchBox.module.css'; 

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={s.container}>
      <label className={s.label} htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        value={filter}
        onChange={handleChange}
        className={s.input}
      />
    </div>
  );
};

export default SearchBox;