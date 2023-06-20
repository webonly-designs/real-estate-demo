import React from 'react'

function hello() {
  return (
    <div>hello</div>
  )
}

export async function getServerSideProps({query}) {
    const {place} = query
    const placeUrl = 'https://bayut.p.rapidapi.com/auto-complete?query=dubai&hitsPerPage=1&page=0&lang=en'
    const resPlace = await fetch(placeUrl, {
      headers: {
        'X-RapidAPI-Key': 'ecc720d6c7mshc52a79cc34f9104p15f53djsnf06cb96082bf',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
     }})
     const placeData = await resPlace.json()
     const extId = placeData.hits[0].externalID
     const listingUrl = `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=${extId}&purpose=for-sale&hitsPerPage=24&page=0&lang=en&sort=city-level-score`
     const resListing = await fetch(listingUrl, {
      headers: {
        'X-RapidAPI-Key': 'ecc720d6c7mshc52a79cc34f9104p15f53djsnf06cb96082bf',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
     }
    })
    const dataListing = await resListing.json()
    return {
      props: {
        placeData: placeData,
        dataListing: dataListing
      }
    }
  }

  

export default hello