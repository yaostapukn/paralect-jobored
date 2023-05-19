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
    console.log('токен')
    if (data) {
      localStorage.setItem('authTokens', JSON.stringify(data.access_token))
    } else {
      alert('ошибка в запросе токена')
    }
  }

  const getVacancies = async (numPage = 2) => {
    const response = await fetch(
      `${_apibase}vacancies/?page=${numPage}&count=4&no_agreement=1`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-secret-key': _secretkey, 
          Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('authTokens')),
          'X-Api-App-Id': _xApiAppId,
        },
      }
    )
    console.log('вакансии')
    const data = await response.json()
    const vacancies = data?.objects?.map(changeViewJob)
    return vacancies
   
  }

  const contextData = {
    getAuthToken,
    getVacancies,
  }

  function changeViewJob(job) {
    function paymentDisplay(to, from, currency) {
      let paymentRange, payment

      if (to > from) {
        paymentRange = `${from} - ${to}`
        payment = `от ${from}`
      } else if (to === from || from === 0) {
        paymentRange = to
        payment = to
      } else {
        paymentRange = `${from}`
        payment = `от ${from}`
      }

      return `з/п ${paymentRange} ${currency}`
    }

    return {
      id: job.id,
      vacancy: job.profession,
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

// export async function getVacancies(numPage = 2) {
//   const response = await fetch(
//     `${APIBASE}vacancies/?page=${numPage}&count=4&no_agreement=1`,
//     {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'x-secret-key': SECRETKEY,
//         Authorization: 'Bearer ' + localStorage.getItem('token'),
//         'X-Api-App-Id': xApiAppId,
//       },
//     }
//   )
//   const data = await response.json()
//   return data.objects.map(changeViewJob)
// }

// export async function getVacancy(id) {
//   const response = await fetch(`${APIBASE}vacancies/${id}/`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'x-secret-key': SECRETKEY,
//       Authorization: 'Bearer ' + localStorage.getItem('token'),
//       'X-Api-App-Id': xApiAppId,
//     },
//   })
//   const data = await response.json()

//   return data.objects
// }

// function changeViewJob(job) {
//   function paymentDisplay(to, from, currency) {
//     let paymentRange, payment

//     if (to > from) {
//       paymentRange = `${from} - ${to}`
//       payment = `от ${from}`
//     } else if (to === from || from === 0) {
//       paymentRange = to
//       payment = to
//     } else {
//       paymentRange = `${from}`
//       payment = `от ${from}`
//     }

//     return `з/п ${paymentRange} ${currency}`
//   }

//   return {
//     id: job.id,
//     vacancy: job.profession,
//     vacancyDetail: job.vacancyRichText,
//     city: job.town.title,
//     typeOfWork: job.type_of_work.title,
//     payment: paymentDisplay(job.payment_to, job.payment_from, job.currency),
//   }
// }
