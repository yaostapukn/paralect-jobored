import { Loader } from '../Loader/Loader'
import { VacanciesCard } from '../VacanciesCard/VacanciesCard'
export function Vacancies({ vacancies, loading }) {
  if (!loading) {
    return <Loader />
  }
  return (
    <div className="vacancies__cards">
      {vacancies && <VacanciesCard vacancies={vacancies} />}
    </div>
  )
}
