import { Vacancies } from '../components/Vacancies/Vacancies'
import { Filter } from '../components/Filter/Filter'
import { SearchVacancy } from '../components/Search/SearchVacancy'
import AuthContext from '../service/AuthProvider'
import { useState, useEffect, useContext } from 'react'
export function JobSeacrch() {
  //context
  const { getAuthToken, getVacancies, getCataloges } = useContext(AuthContext)

  const [vacancies, setVacancies] = useState(null)
  const [cataloges, setCataloges] = useState([])

  const [filterConfig, setFilterConfig] = useState({
    paymentFrom: '',
    paymentTo: '',
    catalogues: '',
  })
  const [searchConfig, setSearchConfig] = useState('')

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      if (!localStorage.getItem('authTokens')) {
        await getAuthToken()
      }
      const vacanciesData = await getVacancies(filterConfig, searchConfig)
      const catalogesData = await getCataloges()
      setVacancies(vacanciesData)
      setCataloges(catalogesData)
      setLoading(true)
    }
    fetchData()
  }, [filterConfig, searchConfig])

  //func callback filer
  const handleChangeFilterConfig = (
    catalogeKey = '',
    payFrom = null,
    payTo = null
  ) => {
    setLoading(false)
    setFilterConfig({
      paymentFrom: payFrom,
      paymentTo: payTo,
      catalogues: catalogeKey,
    })
  }

  const handleChangeSearchConfig = (keyword = '') => {
    setSearchConfig(keyword)
  }
  return (
    <>
      <Filter
        onChangeFilterConfig={handleChangeFilterConfig}
        cataloges={cataloges}
      />
      <SearchVacancy onChangeSearchConfig={handleChangeSearchConfig} />
      <Vacancies vacancies={vacancies} loading={loading} />
    </>
  )
}
