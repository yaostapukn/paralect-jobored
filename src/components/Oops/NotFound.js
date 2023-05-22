import { Link } from 'react-router-dom'
import frameNotFound from '../../images/Frame.png'

import './NotFound.css'
export default function NotFound() {
  return (
    <div className="notfound__wrap">
      <div className="notfound">
        <div className="notfound__img">
          <img src={frameNotFound} alt="notfound" />
        </div>
        <div className="notfound__text">
          <h2>Упс, здесь еще ничего нет!</h2>
        </div>
        <div className="notfound__link">
          <div className="notfound__link__text">
            <Link to="/">Поиск вакансий</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
