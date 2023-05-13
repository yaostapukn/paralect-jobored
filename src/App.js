import { useState, useEffect } from 'react'
import { getVacancies } from './service/joporedService'
import VacancyCard from './components/VacancyCard/VacancyCard'
export default function App() {
  const [vacancies, setVacancies] = useState(null)
  useEffect(() => {
    const fetchDataAsync = async () => {
      const data = await getVacancies()
      setVacancies(data)
    }
    fetchDataAsync()
  }, [])

  if (!vacancies) {
    return <div>loading</div>
  }
  return (
    <>
      {vacancies.map((vacancy) => (
        <VacancyCard key={vacancy.id} vacancy={vacancy} />
      ))}
    </>
  )
}
