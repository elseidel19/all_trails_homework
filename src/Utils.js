export const allTrailsLat = 37.791210;
export const allTrailsLng = -122.400150;
export const cardColor = '#F8F8FF';
export const allTrailsLogo = "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1503357595/lxcxqauiiwjk44gnunug.png";
export const apiKey = "AIzaSyDue_S6t9ybh_NqaeOJDkr1KC9a2ycUYuE";

const defaultRestauratImage = "https://media.istockphoto.com/photos/experienced-engineer-explaining-the-problems-in-construction-works-picture-id1267010934";

export const getPlaceDetails = async (restaurant) => {
   const placeID = restaurant.place_id;
   const url = "https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Crating%2Cformatted_phone_number%2Cuser_ratings_total%2Cgeometry%2Curl%2Cphotos%2Cformatted_address&key=AIzaSyDue_S6t9ybh_NqaeOJDkr1KC9a2ycUYuE&place_id=" + placeID;
   const response = await fetch(url);
   const json  = await response.json();
   const result = json.result;


   let photoRef = "";
   if (result.photos && result.photos.length > 0) {
      photoRef = result.photos[0].photo_reference;
   }
   const photoUrl = await getPlacePhoto(photoRef);

   return {
      placeID, 
      name: result.name, 
      rating: result.rating, 
      userRatingsTotal: result.user_ratings_total, 
      lat: result.geometry.location.lat, 
      lng: result.geometry.location.lng, 
      mapsUrl: result.url,
      photoUrl,
      phoneNumber: result.formatted_phone_number,
      address: result.formatted_address,
   };
};

export const getPlacePhoto = async (photoRef) => {
   if (photoRef === "") {
      return defaultRestauratImage;
   }
   const url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&key=AIzaSyDue_S6t9ybh_NqaeOJDkr1KC9a2ycUYuE&photo_reference=" + photoRef;
   const response = await fetch(url);
   return response.url;
};