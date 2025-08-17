import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import "./Weather.css"

const Weather = () => {

    const [search, setSearch] = useState("Trichy")
    const [city, setCity] = useState("")


    const getweather = async () => {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=295d2cd8bff13d8f4bf461b2d3dd2fd4&units=metric`)
        let result = await response.json()
        console.log(result)
        setCity(result)
        setSearch("")
    }

    useEffect(() => {
        getweather()
    },[])

    return (
        <div className='weather w-[350px] md:w-[700px] flex flex-col gap-10'>
            <div className="searchbar gap-3 w-full">
                <div className='flex justify-center gap-3'>
                    <input type="search" placeholder='Enter a city' value={search} onChange={(e) => setSearch(e.target.value)} className='rounded-2xl outline-none bg-white w-[400px] h-10 p-2' />
                    <button onClick={getweather}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 mt-4 bg-white rounded-full cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    </button>
                </div>
            </div>
            <div className=' text-center flex flex-col gap-6'>
                <div className='flex justify-center'>
                    <img src="./sunny.png" alt="" className='w-20' />
                </div>
                <p className='text-2xl text-white'>{city?.main?.temp}°C</p>
                <p className='font-bold text-4xl text-white'>{city?.name}</p>
            </div>

            <div className='flex justify-center gap-16 w-full'>
                <div className='flex items-center gap-3.5'>
                    <img src="./humdity.png" alt="" className='w-12 md:w-20' />
                    <div className='md:text-2xl'>
                        <p>{city?.main?.humidity}%</p>
                        <span>Humidity</span>
                    </div>
                </div>

                <div className='flex items-center gap-3.5'>
                    <img src="wind.png" alt="" className='w-12 md:w-20' />
                    <div className='md:text-2xl'>
                        <p>{city?.wind?.speed}km/hr</p>
                        <span>Speed</span>
                    </div>
                </div>
            </div>




        </div >
    )
}

export default Weather