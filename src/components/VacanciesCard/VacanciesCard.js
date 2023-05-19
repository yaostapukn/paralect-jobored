import { Link } from 'react-router-dom'
export function VacanciesCard({ vacancies }) {
  return (
    <>
      {vacancies.map((vacancy) => (
        <div key={vacancy.id}>
          <Link to={`/${vacancy.id}`}>{vacancy.id}</Link>
          <div>{vacancy.payment}</div>
          <div>{vacancy.typeOfWork}</div>
          <div>{vacancy.payment}</div>
          <div>{vacancy.city}</div>
        </div>
      ))}
    </>
  )
}
