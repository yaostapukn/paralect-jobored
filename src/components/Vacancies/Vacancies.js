import { useState, useEffect, useContext } from 'react'
import AuthContext from '../../service/AuthProvider'
import { Loader } from '../Loader/Loader'
import { VacanciesCard } from '../VacanciesCard/VacanciesCard'
export function Vacancies() {
  const { getAuthToken, getVacancies } = useContext(AuthContext)
  const [vacancies, setVacancies] = useState(null)

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
  if (!vacancies) {
    return <Loader />
  }
  return <>{vacancies && <VacanciesCard vacancies={vacancies} />}</>
}
