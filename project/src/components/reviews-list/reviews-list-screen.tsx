import { format } from 'date-fns';
import { Review } from '../../types/review-type';
import { getRatingInProcent } from '../../utils';

type ReviewFormProps = {
  reviews: Review[];
}

function ReviewsListScreen (props: ReviewFormProps):JSX.Element {
  const {reviews} = props;

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{ reviews.length }</span></h2>
      <ul className="reviews__list">
        {
          reviews &&
            reviews.map( (review) => (
              <li key={review.id} className="reviews__item">
                <div className="reviews__user user">
                  <div className="reviews__avatar-wrapper user__avatar-wrapper">
                    <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
                  </div>
                  <span className="reviews__user-name">
                    {review.user.name}
                  </span>
                  {review.user.isPro && <span className="reviews__user-name">Pro</span>}
                </div>
                <div className="reviews__info">
                  <div className="reviews__rating rating">
                    <div className="reviews__stars rating__stars">
                      <span style={{width: getRatingInProcent(review.rating || 100)}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <p className="reviews__text">
                    {review.comment}
                  </p>
                  <time className="reviews__time" dateTime="2019-04-24">{format(new Date(review.date), 'dd/mm/yy')}</time>
                </div>
              </li>)
            )
        }
      </ul>
    </>
  );
}

export default ReviewsListScreen;
