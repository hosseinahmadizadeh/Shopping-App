import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://react-redux-main-project-ed94d-default-rtdb.firebaseio.com/",
});

export default instance;
