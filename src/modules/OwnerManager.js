const remoteURL = "http://localhost:5002"

//containing all of the API fetch calls for the employees

export default {
  get(id) {
    return fetch(`${remoteURL}/owner/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/owner`).then(result => result.json())
  }
}