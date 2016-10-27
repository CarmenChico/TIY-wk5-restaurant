import { mapkey } from "./api-key";


function requestMap () {
  return $.ajax({
    url: `https://json-data.herokuapp.com/restaurant/menu/3`
  });
};


var mapHTML=
`<iframe 
src="https://www.google.com/maps/embed/v1/view?zoom=17&center=33.7723,-84.3662&key=${mapkey}" allowfullscreen></iframe>`



// width="150" height="100" frameborder="0" style="border:0"
export { mapHTML };
