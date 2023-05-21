import { Link } from 'react-router-dom'
import  LocationsSvg  from '../../images/Locations.svg'
import './VacanciesCard.css'
export function VacanciesCard({ vacancies }) {
  return (
    <>
      {vacancies.map((vacancy) => (
        <div key={vacancy.id} className="vacancy__wrap">
          <div className="vacancy">
            <div className="vacancy__title">
              <Link to={`/${vacancy.id}`}>{vacancy.vacancy}</Link>
            </div>
            <div className="vacancy__type__payment">
              <div className="vacancy__payment">{vacancy.payment}</div>
              <p className="vacancy__point">&#183;</p>
              <div className="vacancy__type">{vacancy.typeOfWork}</div>
            </div>

            <div className="vacancy__city__wrap">
              <div>
                <img src={LocationsSvg} alt="" />
              </div>
              <div className="vacancy__city">{vacancy.city}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
