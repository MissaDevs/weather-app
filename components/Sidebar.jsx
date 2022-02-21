import Image from "next/image"
import Rain from '../public/img/Shower.png'
import Link from "next/link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faLocationCrosshairs, faXmark, faMagnifyingGlass, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react"

export const Sidebar = ({setCountry}) => {

  const [side, setSide] = useState(false)
  const [animarSide, setAnimarSide] = useState(false)


  const changeSide = () => {
    setSide(true)

    setTimeout(() => {
        setAnimarSide(true)
    }, 500)
  }

  const closeSide = () => {
    setSide(false)

    setTimeout(() => {
        setAnimarSide(false)
    }, 500)
  }
  
  const onSubmit = async (value) => {
    setCountry(value)

    closeSide()
  }

  const onClick = (e) => {
    const value = e.target.value;
    onSubmit(value);
  }
  
  return (
    <div className="bg-blue md:w-2/6 md:h-screen md:relative container px-3">
        {side === false ? (
            <>
                <div className="grid grid-cols-2 md:mt-12 text-custwhite">
                    <input 
                        type="button" 
                        className="bg-gray p-2 ml-7 shadow-md cursor-pointer" 
                        value='Search for places'
                        onClick={changeSide}
                    />
                    <button className="cursor-pointer ml-20 text-2xl"><FontAwesomeIcon className="bg-gray p-2 rounded-full shadow-md" icon={faLocationCrosshairs}/></button>
                </div>

                <div className="mt-10 text-center">
                    <Image src={Rain}/>
                </div>

                <div className="text-custwhite text-center md:mt-20">
                    <h1 className="text-9xl">15<span className="text-5xl text-cleargr">°C</span></h1>
                </div>

                <div className="text-cleargr text-bold text-center md:mt-16">
                    <span className="text-3xl font-semibold">Shower</span>
                </div>

                <div className="md:absolute md:bottom-3 md:left-0 md:mr-auto md:ml-auto md:right-0 text-center">
                    <div className="flex justify-center items-center md:mt-10 text-cleargr">
                        <p className="mr-4">Today</p> 
                        <span className="mr-4">&#8226;</span>
                        <p>Fri, 5 Jun</p>
                    </div> 
                    <p className="text-center text-cleargr mt-6"><FontAwesomeIcon className="mr-1" icon={faLocationDot}/> Helsinki</p>
                </div>
            </>
        ) : (
            <div className={`side ${animarSide ? 'animar' : 'cambiar'}`}>
                <div className="text-custwhite mr-10 mt-5 text-4xl absolute top-0 right-0">
                    <FontAwesomeIcon icon={faXmark} onClick={closeSide} className="cursor-pointer"/>
                </div>
                <div className="md:grid md:grid-cols-3 mt-20">
                    <div className="ml-5 flex items-center md:w-full h-12 col-span-2 border-custwhite border">
                        <FontAwesomeIcon className="pl-2 ml-2 text-custwhite" icon={faMagnifyingGlass}/>
                        <input 
                            type="text" 
                            placeholder={`Search location`}
                            className="w-full h-full text-sm bg-transparent outline-none pl-5 pr-2 text-gray"/>
                    </div>
                    <input 
                        type="button" 
                        value="Search" 
                        className="cursor-pointer bg-purple ml-7 mr-7 text-custwhite"
                    />
                    <button onSubmit={onSubmit} onClick={onClick} value="london" name="london" className="ml-5 mr-7 mt-10 h-16 col-span-3 border-transparent transition-all border items-center hover:border-gray cursor-pointer flex cities">
                        <p className="text-custwhite pl-3">London</p>
                        <FontAwesomeIcon className="absolute right-0 mr-16 transition-all text-custwhite arrow" icon={faAngleRight}/>
                    </button>
                    <button onSubmit={onSubmit} onClick={onClick} value="barcelona" name="barcelona" className="ml-5 mr-7 mt-5 h-16 col-span-3 border-transparent transition-all border items-center hover:border-gray cursor-pointer flex cities">
                        <p className="text-custwhite pl-3">Barcelona</p>
                        <FontAwesomeIcon className="absolute right-0 mr-16 transition-all text-custwhite arrow" icon={faAngleRight}/>
                    </button>
                    <button onSubmit={onSubmit} onClick={onClick} value="mexico" name="mexico" className="ml-5 mr-7 mt-5 h-16 col-span-3 border-transparent transition-all border items-center hover:border-gray cursor-pointer flex cities">
                        <p className="text-custwhite pl-3">Mexico</p>
                        <FontAwesomeIcon className="absolute right-0 mr-16 transition-all text-custwhite arrow" icon={faAngleRight}/>
                    </button>
                </div>
            </div>
            ) 
        }
    </div>
  )
}
