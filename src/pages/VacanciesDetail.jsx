import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import AuthContext from '../service/AuthProvider'
import { LoaderComp } from '../components/Loader/Loader'
import { VacanciesCard } from '../components/VacanciesCard/VacanciesCard'
import { TypographyStylesProvider } from '@mantine/core'
import './styles/VacancyDetail.css'

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
    return <LoaderComp />
  }

  return (
    <>
      {vacancyDetail && (
        <div className="vacancydetail__wrap">
          <div className="vacancydetail">
            <VacanciesCard vacancies={vacancyDetail} isLink={false} />
            <TypographyStylesProvider className="vacancydetail__text">
              <div
                className="vacancydetail__richtext"
                dangerouslySetInnerHTML={{
                  __html: vacancyDetail[0].vacancyDetail,
                }}
              ></div>
            </TypographyStylesProvider>
          </div>
        </div>
      )}
    </>
  )
}
