import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSortType } from '../../store/actions';

type props = {
  sortingType: string;
  handleCloseOpen: (value: boolean) => void;
}

function SortingTab ({sortingType, handleCloseOpen}: props): JSX.Element {
  const activeSortingType = useAppSelector((state) => state.sortType);
  const dispatch = useAppDispatch();

  return (
    <li
      className={`places__option ${activeSortingType === sortingType ? 'places__option--active' : ''}`}
      tabIndex={0}
      onClick={
        (evt) => {
          handleCloseOpen(false);
          dispatch(changeSortType({type: (evt.target as HTMLElement).innerText}));
        }
      }
    >
      { sortingType }
    </li>
  );
}

export default SortingTab;
