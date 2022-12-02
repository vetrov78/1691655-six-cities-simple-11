import { Offer } from '../types/offer-type';
import { name, address, lorem, random } from 'faker';

export const makeFakeOffer = (): Offer => ({
  bedrooms: Number(random.number(9)),
  city: {
    name: address.cityName(),
    location: {
      latitude: Number(address.latitude()),
      longitude: Number(address.longitude()),
      zoom:  Math.floor(Math.random() * 10 + 1),
    },
  },
  description: lorem.paragraph(3),
  goods: ['Washer', 'Laptop friendly workspace', 'Breakfast'],
  host: {
    id: 25,
    name: 'Angelina',
    isPro: true,
    avatarUrl: 'img/avatar-angelina.jpg'
  },
  id: 5,
  images: [
    "https://11.react.pages.academy/static/hotel/6.jpg",
    "https://11.react.pages.academy/static/hotel/18.jpg",
    "https://11.react.pages.academy/static/hotel/2.jpg",
    "https://11.react.pages.academy/static/hotel/4.jpg",
    "https://11.react.pages.academy/static/hotel/11.jpg",
    "https://11.react.pages.academy/static/hotel/1.jpg",
    "https://11.react.pages.academy/static/hotel/12.jpg",
    "https://11.react.pages.academy/static/hotel/15.jpg",
    "https://11.react.pages.academy/static/hotel/13.jpg",
    "https://11.react.pages.academy/static/hotel/16.jpg",
    "https://11.react.pages.academy/static/hotel/5.jpg",
    "https://11.react.pages.academy/static/hotel/14.jpg",
    "https://11.react.pages.academy/static/hotel/19.jpg",
    "https://11.react.pages.academy/static/hotel/8.jpg"
  ],
  isPremium: false,
  location: {
    "latitude": 48.846610000000005,
    "longitude": 2.374499,
    "zoom": 16
  },
  maxAdults: 2,
  previewImage: 'https://11.react.pages.academy/static/hotel/18.jpg',
  price: 107,
  rating: 3.2,
  title: "The Pondhouse - A Magical Place",
  type: "room",
})
