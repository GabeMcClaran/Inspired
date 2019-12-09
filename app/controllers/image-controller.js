import ImageService from "../services/image-service.js";
import store from "../store.js";
import imageService from "../services/image-service.js";

function _drawBgImage() {
  // let template = "";
  let photo = store.State.bgImage.url;
  document.getElementById("bg-image").style.backgroundImage = `url(${photo}`;
}
//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor() {
    store.subscribe("bgImage", _drawBgImage);
    imageService.getImage();
    console.log("hello from the image controller");
  }
}
