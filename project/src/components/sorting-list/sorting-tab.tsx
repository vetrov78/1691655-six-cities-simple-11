import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSortType } from '../../store/app-process/app-process';
import { getSortType } from '../../store/app-process/selectors';

type props = {
  sortingType: string;
  setSortingOpenStatus: (arg0: boolean) => void;
}

function SortingTab ({sortingType, setSortingOpenStatus}: props): JSX.Element {
  const activeSortingType = useAppSelector(getSortType);
  const dispatch = useAppDispatch();

  return (
    <li
      className={`places__option ${activeSortingType === sortingType ? 'places__option--active' : ''}`}
      tabIndex={0}
      onClick={
        (evt) => {
          setSortingOpenStatus(false);
          dispatch(changeSortType({sortType: (evt.target as HTMLElement).innerText}));
        }
      }
    >
      { sortingType }
    </li>
  );
}

export default SortingTab;
