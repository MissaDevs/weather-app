import { Sidebar } from "../components/Sidebar"
import { Weather } from "../components/Weather"
import { Header } from "../components/utils/Header"
import { useEffect, useState } from "react"

export default function Home() {

  const [country, setCountry] = useState('')

  const fetched = async () => {
    const url = await `https://www.metaweather.com/api/location/44418/`
    const resultado = await fetch(url)
    const weather = await resultado.json()
    console.log(weather)
  }

  fetched()

  return (
    <Header>
      <div className="bg-darkbl md:flex flex-no-wrap h-screen max-h-screen overflow-hidden">
        <Sidebar
          setCountry={setCountry}
        />
        <Weather/>
      </div>
    </Header>
  )
}