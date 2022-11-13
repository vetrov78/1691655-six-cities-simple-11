import { Offer } from '../../types/offer-type';
import CardScreen from '../card-screen/card-screen';

type OfferListScreenProps = {
  className: string;
  offers: Offer[];
  setActiveOffer: (arg0: Offer | undefined) => void;
}

function OffersListScreen (props: OfferListScreenProps):JSX.Element {
  const { className, offers, setActiveOffer } = props;

  return (
    <div className={`${className} places__list`}>
      {
        offers &&
          offers.map((offer) => (
            <CardScreen
              key={offer.id}
              className={className === 'near-places__list' ?
                'near-places__card' :
                'cities__card'}
              offer={offer}
              setActiveOffer={
                (currentOffer) => {
                  setActiveOffer(currentOffer);
                }
              }
            />
          ))
      }
    </div>
  );
}

export default OffersListScreen;
