const remoteURL = "http://localhost:5002"

//containing all of the API fetch calls for the employees

export default {
  get(id) {
    return fetch(`${remoteURL}/locations/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/locations`).then(result => result.json())
  }
}