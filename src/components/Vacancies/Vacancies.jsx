import { LoaderComp } from '../Loader/Loader'
import { VacanciesCard } from '../VacanciesCard/VacanciesCard'
import NotFound from '../Oops/NotFound'
export function Vacancies({ vacancies, loading }) {
  if (!loading) {
    return <LoaderComp />
  }

  if (vacancies && vacancies.length === 0) {
    return <NotFound />
  }
  return (
    <div className="vacancies__cards">
      {vacancies && <VacanciesCard vacancies={vacancies} />}
    </div>
  )
}
