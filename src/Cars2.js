import React from "react"


function Cars2({Cars}) {
  return(
    <div>
      {
        Cars.map((Car) => {
          const { make, model, year, image} = Car
          return (
            <article key={make} className="Cars">
              <img src={image} alt={model}></img>
              <p>Make: {make}</p>
              <p>Model: {model}</p>
              <p>Year: {year}</p>

            </article>
          )
        
      })
      }
    </div>

  )
}
export default Cars2