export const allTrailsLat = 37.791210;
export const allTrailsLng = -122.400150;

export const getPlaceDetails = async (restaurant) => {
   const placeID = restaurant.place_id;
   const url = "https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Crating%2Cformatted_phone_number%2Cuser_ratings_total%2Cgeometry%2Curl%2Cphotos&key=AIzaSyDue_S6t9ybh_NqaeOJDkr1KC9a2ycUYuE&place_id=" + placeID;
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
   };
};

export const getPlacePhoto = async (photoRef) => {
   if (photoRef === "") {
      return "https://media.istockphoto.com/photos/experienced-engineer-explaining-the-problems-in-construction-works-picture-id1267010934";
   }
   const url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&key=AIzaSyDue_S6t9ybh_NqaeOJDkr1KC9a2ycUYuE&photo_reference=" + photoRef;
   const response = await fetch(url);
   return response.url;
};