const remoteURL = "http://localhost:5002"

//containing all of the API calls for the animals

export default {
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(result => result.json())
  },

  getAll() {
    return fetch(`${remoteURL}/animals`).then(result => result.json())
  },

  delete(id) {
    return fetch(`${remoteURL}/animals/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  },

  post(newAnimal) {
      return fetch(`${remoteURL}/animals`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newAnimal)
    }).then(data => data.json())
  },

  update(editedAnimal) {
    return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedAnimal)
    }).then(data => data.json());
  },


      //fetches all the animal, parses result then parsed result gets passed in the next .then as animals, then gives random id, takes that value and looks inside animals and return the animal that matches the animal id that matches the random one
  getRandomId() {
    return fetch(`${remoteURL}/animals`)
      .then(result => result.json())
      .then(animals => {
        const randomIndex = Math.floor(Math.random() * animals.length);
        const randomAnimal = animals[randomIndex];
        return randomAnimal.id;
    });
  }
}