import { useState } from 'react';
import { SORT_TYPES } from '../../consts';
import { useAppSelector } from '../../hooks';
import { getSortType } from '../../store/app-process/selectors';
import SortingTab from './sorting-tab';

function SortingList (): JSX.Element {
  const sortType = useAppSelector(getSortType);
  const [isSortingOpen, setSortingOpenStatus] = useState<boolean>(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by &nbsp;</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={
          () => {
            setSortingOpenStatus(!isSortingOpen);
          }
        }
      >
        {
          sortType
        }
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom places__options--${isSortingOpen ? 'opened' : 'cloded'}`}>
        {
          SORT_TYPES.map((type) => (
            <SortingTab
              key={type}
              sortingType={type}
              setSortingOpenStatus={setSortingOpenStatus}
            />
          ))
        }
      </ul>
    </form>
  );
}

export default SortingList;
