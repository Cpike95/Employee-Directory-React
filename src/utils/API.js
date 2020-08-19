import axios from "axios";


export default {
  displayEmployees: function() {
    return axios.get("https://randomuser.me/api/?results=100");
  }
};