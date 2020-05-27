import React from 'react'
import { Store } from './store'
import { IEpisodes, IAction } from './interfaces'



// https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes
export default function App(): JSX.Element {
  // Note that the use context is a destructed OBJECT
  const { state, dispatch } = React.useContext(Store);


  // Use Effect to check for episodes length and fetch Data
  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction()
  })

  // The Fetch Data Action
  const fetchDataAction = async () => {
    const URL = `https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes`
    const data = await fetch(URL)

    // convert data from API to JSON
    const dataJSON = await data.json()
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes
    })
  }

  // Add Favorites Action
  const addFavoriteAction = (episode: IEpisodes): IAction => {
    return dispatch({
      type: 'ADD_FAV',
      payload: episode
    })


  }

  const episodeStyle = {
    border: '1px solid #333',
    borderRadius: '3px',
    width: 200,
    margin: '10px',
    padding: '10px 15px'
  }

  return (
    <React.Fragment>
      {console.log("THIS IS OUPT", state)}
      <h1>Rick and Morty</h1>
      <p>Pick your favorite Episode</p>

      {/* ========= Map through episodes ===== */}
      <section style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {state.episodes.map((episode: IEpisodes) => {
          return (
            <section key={episode.id} style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ ...episodeStyle, }}>
                {/* <img src={episode.image.medium} alt={episode.name} /> */}
                <div>{episode.name}</div>
                <section>
                  Season: {episode.season} Number: {episode.number}
                </section>
                <button onClick={() => addFavoriteAction(episode)}>Fav</button>
              </div>
            </section>
          )
        })}
      </section>


    </React.Fragment>
  )

}
