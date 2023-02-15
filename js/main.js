document.getElementById('getStore').addEventListener('click', getStore)

function getStore() {
    const url = 'https://bobsburgers-api.herokuapp.com/storeNextDoor/'
    let s = document.getElementById('season').value
    let ep = document.getElementById('ep').value

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)

            let maxSeasons
            function validateSeasonNum() {
                let numSeasons = []
                // create list of all season numbers
                for (let obj in data) {
                    numSeasons.push(data[obj].season)
                }
                // find highest number of seasons
                maxSeasons = Math.max(...numSeasons)
                // validate input
                if (s <= 0 || s > maxSeasons) {
                    alert(`Please enter a season number between 1 and ${maxSeasons}.`)
                }
            }
            validateSeasonNum()

      })

      .catch(err => {
          console.log(`error ${err}`)
      });
}
