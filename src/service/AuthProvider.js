import { useState, createContext } from 'react'
import { urlsBase } from './urlsBase'

const AuthContext = createContext()
export default AuthContext

export function AuthProvider({ children }) {
  const {
    _apibase,
    _secretkey,
    _login,
    _password,
    _client_id,
    _client_secret,
    _hr,
    _xApiAppId,
  } = urlsBase

  // const HEADERS = {
  //   'Content-Type': 'application/json',
  //   'x-secret-key': _secretkey,
  //   Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('authTokens')),
  //   'X-Api-App-Id': _xApiAppId,
  // }

  const getAuthToken = async () => {
    const response = await fetch(
      `${_apibase}oauth2/password/?${_login}&${_password}&${_client_id}&${_client_secret}&${_hr}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-secret-key': _secretkey,
        },
      }
    )
    const data = await response.json()
    console.log(data)
    if (data) {
      localStorage.setItem('authTokens', JSON.stringify(data.access_token))
    }
  }

  const getVacancies = async (filterConfig, keyword, numPage = 1) => {
    const { paymentFrom, paymentTo, catalogues } = filterConfig

    const filterSeacrhUrl = `&keyword=${keyword}&payment_from=${paymentFrom}&payment_to=${paymentTo}&catalogues=${catalogues}`
    const response = await fetch(
      `${_apibase}vacancies/?page=${numPage}&count=4&no_agreement=1&published=1${filterSeacrhUrl}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-secret-key': _secretkey,
          Authorization:
            'Bearer ' + JSON.parse(localStorage.getItem('authTokens')),
          'X-Api-App-Id': _xApiAppId,
        },
      }
    )

    const data = await response.json()
    const vacancies = data.objects.map(changeViewJob)
    return vacancies
  }

  const getVacancyById = async (id) => {
    const response = await fetch(`${_apibase}vacancies/${id}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-secret-key': _secretkey,
        Authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('authTokens')),
        'X-Api-App-Id': _xApiAppId,
      },
    })
    const data = await response.json()
    return data
  }

  const getCataloges = async () => {
    const response = await fetch(`${_apibase}catalogues/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-secret-key': _secretkey,
        Authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('authTokens')),
        'X-Api-App-Id': _xApiAppId,
      },
    })
    const data = await response.json()

    const catalogesData = data.map(changeViewCataloges)
    return catalogesData
  }

  const contextData = {
    getAuthToken,
    getVacancies,
    getVacancyById,
    getCataloges,
  }

  const changeViewCataloges = (cataloges) => {
    return {
      value: cataloges.key,
      label: cataloges.title_rus,
    }
  }

  const changeViewJob = (job) => {
    const paymentDisplay = (to, from, payment) => {
      let paymentRange

      if (from === to || from === 0) {
        return `з/п ${to} ${payment}`
      } else if (from < to) {
        return `з/п ${from} - ${to} ${payment}`
      } else if (to === 0) {
        return `з/п от ${from} ${payment}`
      }

      return `з/п ${paymentRange} ${payment}`
    }

    return {
      id: job.id,
      vacancy: job.profession.substring(0, 60),
      vacancyDetail: job.vacancyRichText,
      city: job.town.title,
      typeOfWork: job.type_of_work.title,
      payment: paymentDisplay(job.payment_to, job.payment_from, job.currency),
    }
  }

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  )
}

