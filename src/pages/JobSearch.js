import { Vacancies } from '../components/Vacancies/Vacancies'
import { Filter } from '../components/Filter/Filter'
import AuthContext from '../service/AuthProvider'
import { useState, useEffect, useContext } from 'react'
export function JobSeacrch() {
  //context
  const { getAuthToken, getVacancies, getCataloges } = useContext(AuthContext)

  const [vacancies, setVacancies] = useState(null)
  const [cataloges, setCataloges] = useState([])

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
      const catalogesData = await getCataloges()
      setVacancies(vacanciesData)
      setCataloges(catalogesData)
    }
    fetchData()
  }, [])


  //func callback filer
  const handleChangeFilterConfig = (catalogeKey) => {
    console.log(filterProp)
  }
  return (
    <>
      <Vacancies vacancies={vacancies} />
      <Filter
        onChangeFilterConfig={handleChangeFilterConfig}
        cataloges={cataloges}
      />
    </>
  )
}
