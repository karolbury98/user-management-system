import axios from "axios";

export class UserService {
  static serverURL = "http://localhost:9000";

  static getAllUsers() {
    let url = `${this.serverURL}/users`;
    return axios.get(url);
  }

  static getUser(userId) {
    let url = `${this.serverURL}/users/${userId}`;
    return axios.get(url);
  }

  static createUser(user) {
    let url = `${this.serverURL}/users/`;
    return axios.post(url, user);
  }

  static updateUser(user, userId) {
    let url = `${this.serverURL}/users/${userId}`;
    return axios.put(url, user);
  }

  static deleteUser(userId) {
    let url = `${this.serverURL}/users/${userId}`;
    return axios.delete(url);
  }
}
