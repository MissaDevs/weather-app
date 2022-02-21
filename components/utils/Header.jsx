import React from 'react'

export const Header = ({children}) => {
  return (
    <>
        <head>
            <title>Weather App</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap" rel="stylesheet"></link>
        </head>
        <body>
            {children}
        </body>
    </>
  )
}
