import { SORT_TYPES } from '../../consts';
import SortingTab from './sorting-tab';

type propsType = {
  isSortingOpen: boolean;
}

function SortingList ({isSortingOpen}: propsType): JSX.Element {

  return (
    <ul className={`places__options places__options--custom places__options--${isSortingOpen ? 'opened' : 'cloded'}`}>
      {
        SORT_TYPES.map((type) => (
          <SortingTab
            key={type}
            sortingType={type}
          />
        ))
      }
    </ul>
  );
}

export default SortingList;
