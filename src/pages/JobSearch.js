import { Vacancies } from '../components/Vacancies/Vacancies'
import AuthContext from '../service/AuthProvider'
import { useState, useEffect, useContext } from 'react'
export function JobSeacrch() {
  const { getAuthToken, getVacancies } = useContext(AuthContext)
  const [vacancies, setVacancies] = useState(null)
  const filterConfig = {
    keyword: '',
    paymentFrom: '',
    paymentTo: '',
    catalogues: '',
  }
  useEffect(() => {
    const fetchData = async () => {
      if (!localStorage.getItem('authTokens')) {
        await getAuthToken()
      }
      const vacanciesData = await getVacancies(filterConfig)
      setVacancies(vacanciesData)
    }
    fetchData()
  }, [])
  return (
    <>
      <Vacancies vacancies={vacancies} />
    </>
  )
}
