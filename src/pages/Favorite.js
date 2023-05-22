import { VacanciesCard } from '../components/VacanciesCard/VacanciesCard'
import NotFound from '../components/Oops/NotFound'

import './styles/Favorite.css'
export function Favorite() {
  const fav = JSON.parse(localStorage.getItem('fav'))

  if (fav.length === 0) {
    return <NotFound />
  }
  return (
    <>
      <div className="fav__wrap">
        <div className="fav">
          <VacanciesCard vacancies={fav} />
        </div>
      </div>
    </>
  )
}
