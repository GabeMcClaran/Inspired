import store from "../store.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  async getImage() {
    let res = await imgApi.get();
    store.commit("bgImage", res.data);
    console.log("hello from the Image service", store.State.bgImage);
  }
}

const imageService = new ImageService();
export default imageService;
