import axios from "axios";
const axio = axios.create({
  baseUrl: "https://biydaalt-e95dd-default-rtdb.firebaseio.com/",
});
export default axio;
