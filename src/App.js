import React, { useEffect, useLayoutEffect, useState } from 'react'
import './App.css'

function TimerRibbonContainer() {
  /**
   * Duration in milliseconds of the custom catalog session
   */
  const USER_ID_TIME_SESSION = 36000000
  const [remainingTime, setRemainingTime] = useState(0)

  const getTime = async () => {
    const res = await fetch(
      'http://worldtimeapi.org/api/timezone/America/Santiago'
    )
    const data = await res.json()
    return data
  }

  const expirationTimeFromLocalStorage =
    localStorage.getItem('sessionTimeStamp')

  const getTimeStamp = () => {
    getTime().then(({ unixtime }) => {
      /**
       * Convert current timestamp to milliseconds & add the user id expiration time
       */
      const expirationTime = unixtime * 1000 + USER_ID_TIME_SESSION
      /**
       * Check local storage, and add timestamp if needed
       */
      if (!expirationTimeFromLocalStorage) {
        localStorage.setItem('sessionTimeStamp', expirationTime)
        setRemainingTime(expirationTime - unixtime * 1000)
      } else {
        setRemainingTime(expirationTimeFromLocalStorage - unixtime * 1000)
      }
    })
  }

  useEffect(() => {
    /**
     * Check for time trough the api every time the component is mounted to prevent
     * inconsistences with local os time
     */
    getTimeStamp()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(remainingTime - 1000)
    }, 1000)

    /**
     * reset values once the timer has expired
     */
    if (remainingTime < 0) {
      localStorage.removeItem('sessionTimeStamp')
      setRemainingTime(0)
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [remainingTime])

  const onVisibilityChange = () => {
    if (document.visibilityState === 'visible') {
      getTimeStamp()
    }
  }

  useLayoutEffect(() => {
    document.addEventListener('visibilitychange', onVisibilityChange)

    return () =>
      document.removeEventListener('visibilitychange', onVisibilityChange)
  }, [])

  /**
   * Transform milliseconds remaining time into date format to be able to extract the desired
   * values, in this case; minutes and seconds
   */
  const time = new Date(remainingTime)

  const formattedMinutes = String(time.getMinutes()).padStart(2, '0')
  const formattedSeconds = String(time.getSeconds()).padStart(2, '0')

  return (
    <div className='container'>
      <h1>{`Tienes 00:${formattedMinutes}:${formattedSeconds} para revisar tu catálogo personalizado`}</h1>
    </div>
  )
}

export default TimerRibbonContainer
