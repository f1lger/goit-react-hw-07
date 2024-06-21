import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectName } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const handleChangeFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  const filterValue = useSelector(selectName);
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleChangeFilter} value={filterValue} />
    </>
  );
}
