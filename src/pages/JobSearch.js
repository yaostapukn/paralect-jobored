import { Vacancies } from '../components/Vacancies/Vacancies'
import { Filter } from '../components/Filter/Filter'
import { SearchVacancy } from '../components/Search/SearchVacancy'
import AuthContext from '../service/AuthProvider'
import { useState, useEffect, useContext } from 'react'

import './JobSearch.css'

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
  //func callback search
  const handleChangeSearchConfig = (keyword = '') => {
    setLoading(false)
    setSearchConfig(keyword)
  }
  return (
    <div className="vacancies">
      проверить деплой
      <Filter
        className="vacancies__filter__search"
        onChangeFilterConfig={handleChangeFilterConfig}
        cataloges={cataloges}
      />
      <div className="vacancies__search__vacancies">
        <SearchVacancy onChangeSearchConfig={handleChangeSearchConfig} />

        <Vacancies vacancies={vacancies} loading={loading} />
      </div>
    </div>
  )
}
