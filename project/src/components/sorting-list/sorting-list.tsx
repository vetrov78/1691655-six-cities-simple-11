import { SORT_TYPES } from '../../consts';
import SortingTab from './sorting-tab';

type propsType = {
  isSortingOpen: boolean;
  setSortingOpenStatus: (value: boolean) => void;
}

function SortingList ({isSortingOpen, setSortingOpenStatus}: propsType): JSX.Element {

  return (
    <ul className={`places__options places__options--custom places__options--${isSortingOpen ? 'opened' : 'cloded'}`}>
      {
        SORT_TYPES.map((type) => (
          <SortingTab
            key={type}
            sortingType={type}
            handleCloseOpen={setSortingOpenStatus}
          />
        ))
      }
    </ul>
  );
}

export default SortingList;
