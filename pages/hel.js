import React from 'react'

function hel() {
  return (
    <div>hel</div>
  )
}

export default hel

export async function getServerSideProps({query}) {
    const {id} = query
    const url = `https://bayut.p.rapidapi.com/properties/detail?externalID=${id}`
    const resProperty = await fetch(url, {
      headers: {
        'X-RapidAPI-Key': 'ecc720d6c7mshc52a79cc34f9104p15f53djsnf06cb96082bf',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
     }})
     const propertyData = await resProperty.json()
     return {
      props: {
        propertyData: propertyData
      }
     }
  }