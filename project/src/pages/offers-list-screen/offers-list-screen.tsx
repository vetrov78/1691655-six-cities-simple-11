import { useState } from 'react';
import { Offer } from '../../types/offer-type';
import CardScreen from '../card-screen/card-screen';

type OfferListScreenProps = {
  offersNumber: number;
  offers: Offer[];
}

function OffersListScreen (props: OfferListScreenProps):JSX.Element {
  const {offersNumber, offers} = props;
  const offersList = [];
  // const [activeOffer, setActiveOffer] = useState<Offer>({});

  for (let i = 0; i < offersNumber; i++) {
    offersList.push(<CardScreen key={i.toString()} offer={offers[i]} />);
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersList}
    </div>
  );
}

export default OffersListScreen;
