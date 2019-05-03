const apiKey = "vGGrSVt9JQzi123QyyotutBq0JBa6oX2hOWKXslxOeqHLg4xiIN6XX_g5kzzPpFA_7nYVplA4t1taNMBhe8cbJsr-U6xdREL-uOH218xQJxnVw-2LNM0BHSxHtKXXHYx";

const Yelp = {
    searchYelp(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers:{
                Authorization: `Bearer ${apiKey}`
            }
        }).then((response) => {  // .then() works with promises
            return response.json(); // converts the returned response to json
            }
        ).then((jsonResponse) => {
            if (jsonResponse.businesses) { // do we have a buisness key within our json object
                return jsonResponse.businesses.map((business) => { // iterate over each business object in our array
                   console.log(business);
                   return {
                       id: business.id,
                       imageSrc: business.image_url,
                       name: business.name,
                       address: business.location.address1,
                       city: business.location.city,
                       state: business.location.state,
                       zipCode: business.location.zip_code,
                       category: business.categories[0].title,
                       rating: business.rating,
                       reviewCount: business.review_count,
                    };
                });
            }; // closes if statement
        });
    }
};
   
export default Yelp;