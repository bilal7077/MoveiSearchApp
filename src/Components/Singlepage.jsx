import React from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../Context'
import { useState, useEffect } from 'react'

const Singlepage = () => {
    const { imdbID } = useParams()

    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState(null)

    const getMovie = async (url) => {
        try {
            const get = await fetch(url)
            const data = await get.json()

            if (data.Response === 'True') {
                setLoading(false)
                setMovie(data) // Now we get a single movie object
                console.log("Movie data: ", data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            getMovie(`${API}&i=${imdbID}`)
        }, 300)

        return () => clearTimeout(timeout)
    }, [imdbID])

    if (loading) {
        return <div className="text-center text-lg font-semibold">Loading...</div>
    }

    return (
        <div className="flex justify-center items-center py-10">
            <div className="max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex">
                    {/* Left Side: Movie Poster */}
                    <img
                        className="w-1/3 object-cover"
                        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450'}
                        alt={movie.Title}
                    />
                    {/* Right Side: Movie Details */}
                    <div className="w-2/3 p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{movie.Title}</h2>
                        <p className="text-gray-600 text-lg mb-2">
                            <strong>Year:</strong> {movie.Year}
                        </p>
                        <p className="text-gray-600 text-lg mb-2">
                            <strong>Type:</strong> {movie.Type}
                        </p>
                        <p className="text-gray-600 text-lg mb-2">
                            <strong>Genre:</strong> {movie.Genre}
                        </p>
                        <p className="text-gray-600 text-lg mb-2">
                            <strong>Director:</strong> {movie.Director}
                        </p>
                        <p className="text-gray-600 text-lg">
                            <strong>Plot:</strong> {movie.Plot}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Singlepage
