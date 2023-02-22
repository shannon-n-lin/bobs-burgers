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
                // find highest possible season number
                maxSeasons = Math.max(...numSeasons)
                // validate user input
                if (s <= 0 || s > maxSeasons) {
                    alert(`Please enter a season number between 1 and ${maxSeasons}.`)
                }
            }
            validateSeasonNum()

            function validateEpNum() {
                // loop through each season number
                for (let i = 1; i <= maxSeasons; i++) {
                    let numEpisodes = []
                    // create list of all episode numbers for season
                    for (let obj in data) {
                        if (data[obj].season == i) {
                            numEpisodes.push(data[obj.episode])
                        }
                    }
                    // find highest possible episode number for season
                    let maxEpisodes = Math.max(...numEpisodes)
                    // validate user input
                    if (s == i && ep > maxEpisodes) {
                        alert(`That season only has ${maxEpisodes} episodes.`)
                    } else if (s == i && ep <= 0) {
                        alert(`Please enter an episode number between 1 and ${maxEpisodes}.`)
                    }
                }
            }

            for (let item in data) {
                // find the requested season and episode 
                if (data[item].season == s && data[item].episode == ep) {
                    // add the image to the DOM
                    document.querySelector('img').src = data[item].image
                    // check if name is undefined, otherwise add to DOM
                    if (data[item].name == undefined) {
                        document.querySelector('h2').innerText = 'This episode didn\'\t have a store next door.'
                    } else {
                        document.querySelector('h2').innerText = data[item].name
                    }
                }
            }
      })

      .catch(err => {
          console.log(`error ${err}`)
      });
}
