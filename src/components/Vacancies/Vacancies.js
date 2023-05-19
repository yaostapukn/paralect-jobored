import { useState, useEffect, useContext } from 'react'
import AuthContext from '../../service/AuthProvider'

import { VacanciesCard } from '../VacanciesCard/VacanciesCard'
export function Vacancies() {
  const { getAuthToken, getVacancies } = useContext(AuthContext)
  const [vacancies, setVacancies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      if (!localStorage.getItem('authTokens')) {
        await getAuthToken()
      }
      const datas = await getVacancies()
      setVacancies(datas)
    }
    fetchData()
  }, [])

  return <>{vacancies && <VacanciesCard vacancies={vacancies} />}</>
}
