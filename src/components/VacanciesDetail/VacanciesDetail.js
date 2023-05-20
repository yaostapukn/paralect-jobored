import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import AuthContext from '../../service/AuthProvider'
import { Loader } from '../Loader/Loader'
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
        <div
          dangerouslySetInnerHTML={{ __html: vacancyDetail.vacancyRichText }}
        ></div>
      )}
    </>
  )
}
