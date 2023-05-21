import { Loader } from '../Loader/Loader'
import { VacanciesCard } from '../VacanciesCard/VacanciesCard'
export function Vacancies({ vacancies, loading }) {
  if (!loading) {
    return <Loader />
  }

  if (vacancies.length === 0) {
    return <div>УПС</div>
  }
  return (
    <div className="vacancies__cards">
      {vacancies && <VacanciesCard vacancies={vacancies} />}
    </div>
  )
}
