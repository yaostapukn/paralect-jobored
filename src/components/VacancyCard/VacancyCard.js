import './index.css'

export default function VacancyCard({ vacancy }) {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__title">{vacancy.profession}</div>
        <div className="card__payment">{vacancy.payment_to}</div>
        <div className="card__worktype">{vacancy.type_of_work.title}</div>
        <div className="card__town">{vacancy.town.title}</div>
      </div>
    </div>
  )
}
