import { Vacancies } from '../components/Vacancies/Vacancies'
import { Filter } from '../components/Filter/Filter'
import { SearchVacancy } from '../components/Search/SearchVacancy'
import AuthContext from '../service/AuthProvider'
import { useState, useEffect, useContext } from 'react'
import { Pagination } from '@mantine/core'

import './styles/JobSearch.css'

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
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      if (!localStorage.getItem('authTokens')) {
        await getAuthToken()
      }

      const vacanciesData = await getVacancies(filterConfig, searchConfig, page)
      const catalogesData = await getCataloges()
      setVacancies(vacanciesData)
      setCataloges(catalogesData)
      setLoading(true)
    }
    fetchData()
  }, [filterConfig, searchConfig, page])

  //func callback filter
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

  const handleChangePage = (newPage) => {
    setLoading(false)
    setPage(newPage)
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
        <div className='vacancies__pag'>
          <Pagination
            page={page}
            total={125}
            onChange={handleChangePage}
            position="center"
            boundaries= {1}
            
            styles={{
              control: {
                height: '32px',
                fontFamily: 'Inter',
                fontWeight: '400',
                fontSize: '16px',
                borderRadius: '4px',
                color: '#232134',
                border: '1px solid #D5D6DC',
              },
            }}
          />
        </div>
      </div>
    </div>
  )
}
