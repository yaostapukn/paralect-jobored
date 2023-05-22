import { Vacancies } from '../components/Vacancies/Vacancies'
import { Filter } from '../components/Filter/Filter'
import { SearchVacancy } from '../components/Search/SearchVacancy'
import AuthContext from '../service/AuthProvider'
import { useState, useEffect, useContext } from 'react'

import './styles/JobSearch.css'
import { LoaderComp } from '../components/Loader/Loader'

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
  const handleChangeSearchConfig = (keyword) => {
    //из-того что если keyword не поменяется setSearchConfig
    //не сработает => вечный loading, пробывал useRef в SearchVacancy
    //но что то не вышло
    //TODO : если состаяние не поменялось setSearchConfig должен сетить

    // setLoading(false)

    setSearchConfig(keyword)
  }
  return (
    <div className="vacancies">
      <div className="vacancies__filter">
        <Filter
          onChangeFilterConfig={handleChangeFilterConfig}
          cataloges={cataloges}
        />
      </div>
      <div className="vacancies__search__vacancies">
        <div className="vacancies__search">
          <SearchVacancy onChangeSearchConfig={handleChangeSearchConfig} />
        </div>

        <Vacancies vacancies={vacancies} loading={loading} />
      </div>
    </div>
  )
}
