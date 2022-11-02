import { useState } from 'react';
import { Offer } from '../../types/offer-type';
import CardScreen from '../card-screen/card-screen';

type OfferListScreenProps = {
  offers: Offer[];
}

function OffersListScreen (props: OfferListScreenProps):JSX.Element {
  const { offers } = props;
  const activeOffer = useState({} as Offer);

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers &&
          offers.map((offer) => (
            <CardScreen
              key={offer.id}
              offer={offer}
              setActiveOffer={
                (currentOffer) => {
                  activeOffer[1](currentOffer);
                }
              }
            />
          ))
      }
    </div>
  );
}

export default OffersListScreen;
