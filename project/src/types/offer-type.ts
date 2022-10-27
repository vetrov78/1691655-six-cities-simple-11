type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type CityType = {
  location: Location;
  name: string;
}

type Host = {
  'id': number;
  'name': string;
  'isPro': boolean;
  'avatarUrl': string;
}

export type Offer = {
  'city': CityType;
  'previewImage': string;
  'images': string[];
  'title': string;
  'isPremium': boolean;
  'rating': number;
  'type': string;
  'bedrooms': number;
  'maxAdults': number;
  'price': number;
  'goods': string[];
  'host': Host;
  'description': string;
  'location': Location;
  'id': number;
}

export type Offers = Offer[]
