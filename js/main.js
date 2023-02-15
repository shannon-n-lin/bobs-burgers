document.getElementById('getStore').addEventListener('click', getStore)

function getStore() {
    const url = 'https://bobsburgers-api.herokuapp.com/storeNextDoor/'

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        console.log(data)

      })

      .catch(err => {
          console.log(`error ${err}`)
      });
}
