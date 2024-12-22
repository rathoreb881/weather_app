import React, { useEffect, useState } from 'react'

const WeatherReport = () => {

    const [data, setData] = useState([])

    const weatherData = async () => {
        const result = await fetch("http://localhost:3001/weather/report", {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((res) => res.json()).then((data) => setData(data.userData))

    }

    useEffect(() => {
        weatherData()
    }, [])

    console.log(data)
    return (



        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">


            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            UserName
                        </th>
                        <th scope="col" class="px-6 py-3">
                            City
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Temperature
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Humidity
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Wind_Speed
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.user}
                            </th>
                            <td class="px-6 py-4">
                                {item.city}
                            </td>
                            <td class="px-6 py-4">
                                {item.temperature}
                            </td>
                            <td class="px-6 py-4">
                                {item.humidity}
                            </td>
                            <td class="px-6 py-4">
                                {item.wind_speed}
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>


    )
}

export default WeatherReport