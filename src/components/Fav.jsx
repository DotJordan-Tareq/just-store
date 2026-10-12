
import React from 'react'

const Fav = ({fav,removeFromFav,setView}) => {
  return (
    <div>
      <h2>My Favorites ❤️</h2>

      <button className="home-button" onClick={() => setView("")}>🏠 Home</button>

      {fav.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        fav.map((elem) => {
          return (
            <div
              key={elem.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px"
              }}
            >
              <img
                src={elem.image}
                width="70px"
                alt={elem.title}
              />

              <h4>{elem.title}</h4>
              <p>{elem.price} $</p>

              <button onClick={() => {
                removeFromFav(elem.id)
              }}>
                Remove
              </button>
            </div>
          )
        })
      )}
    </div>
  )
}

export default Fav
