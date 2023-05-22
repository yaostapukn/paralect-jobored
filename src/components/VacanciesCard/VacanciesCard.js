import { Link } from 'react-router-dom'
import LocationsSvg from '../../images/Locations.svg'

import StarIcon from '../Star/StarIcon'

import './VacanciesCard.css'

export function VacanciesCard({ vacancies, isLink = true }) {
  return (
    <>
      {vacancies.map((vacancy) => (
        <div key={vacancy.id} className="vacancy__wrap">
          <div className="vacancy">
            <div className="vacancy__title__star">
              {isLink ? (
                <div className="vacancy__title__link">
                  <Link to={`/${vacancy.id}`}>{vacancy.vacancy}</Link>
                </div>
              ) : (
                <div className="vacancy__title">
                  <h1>{vacancy.vacancy}</h1>
                </div>
              )}
              <div>
                <StarIcon vacancyProp={vacancy} />
              </div>
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
