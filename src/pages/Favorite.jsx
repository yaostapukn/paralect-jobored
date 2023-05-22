import { VacanciesCard } from '../components/VacanciesCard/VacanciesCard'
import NotFound from '../components/Oops/NotFound'
import { Pagination } from '@mantine/core'
import { useState, useEffect } from 'react'
import './styles/Favorite.css'
export function Favorite() {
  const fav = JSON.parse(localStorage.getItem('fav'))

  const PAGESIZE = 4

  const [page, setPage] = useState(1)
  const [records, setRecords] = useState(fav.slice(0, PAGESIZE))

  useEffect(() => {
    const from = (page - 1) * PAGESIZE
    const to = from + PAGESIZE
    setRecords(fav.slice(from, to))
  }, [page])

  const handleChangePage = (newPage) => {
    setPage(newPage)
  }

  if (fav.length === 0) {
    return <NotFound />
  }
  return (
    <>
      <div className="fav__wrap">
        <div className="fav">
          <VacanciesCard vacancies={records} />
        </div>
        <div>
          <Pagination
            page={page}
            total={Math.ceil(fav.length / 4)}
            onChange={handleChangePage}
            position="center"
            boundaries={1}
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
    </>
  )
}
