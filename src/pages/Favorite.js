import { VacanciesCard } from '../components/VacanciesCard/VacanciesCard'
export function Favorite() {
  const fav = JSON.parse(localStorage.getItem('fav'))

  if (fav.length === 0) {
    return <>Тут ничего нет</>
  }
  return (
    <>
      <VacanciesCard vacancies={fav} />
    </>
  )
}
