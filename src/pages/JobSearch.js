import { Vacancies } from '../components/Vacancies/Vacancies'
import { Filter } from '../components/Filter/Filter'
import AuthContext from '../service/AuthProvider'
import { useState, useEffect, useContext } from 'react'
export function JobSeacrch() {
  //context
  const { getAuthToken, getVacancies, getCataloges } = useContext(AuthContext)

  const [vacancies, setVacancies] = useState(null)
  const [cataloges, setCataloges] = useState([])

  const [filterConfig, setFilterConfig] = useState({
    keyword: '',
    paymentFrom: '',
    paymentTo: '',
    catalogues: '',
  })

  useEffect(() => {
    const fetchData = async () => {
      if (!localStorage.getItem('authTokens')) {
        await getAuthToken()
      }
      const vacanciesData = await getVacancies(filterConfig)
      const catalogesData = await getCataloges()
      setVacancies(vacanciesData)
      setCataloges(catalogesData)
      console.log('главный фетч');
    }
    fetchData()
  }, [filterConfig])

  //func callback filer
  const handleChangeFilterConfig = (catalogeKey) => {
    setFilterConfig({
      keyword: '',
      paymentFrom: '',
      paymentTo: '',
      catalogues: catalogeKey,
    })
    console.log(vacancies, filterConfig)
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
