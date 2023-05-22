import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import AuthContext from '../service/AuthProvider'
import { Loader } from '../components/Loader/Loader'
import { VacanciesCard } from '../components/VacanciesCard/VacanciesCard'
export function VacanciesDetail() {
  const { getVacancyById } = useContext(AuthContext)
  const { id } = useParams()
  const [vacancyDetail, setVacancyDetail] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const datas = await getVacancyById(id)
      setVacancyDetail(datas)
    }

    fetchData()
  }, [])

  if (!vacancyDetail) {
    return <Loader />
  }

  return (
    <>
      {vacancyDetail && (
        <>
          <VacanciesCard vacancies={vacancyDetail} />
          <div
            dangerouslySetInnerHTML={{ __html: vacancyDetail[0].vacancyDetail }}
          ></div>
        </>
      )}
    </>
  )
}
