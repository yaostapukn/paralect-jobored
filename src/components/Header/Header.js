import Union from '../../images/Union.svg'
import './Header.css'

import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header>
      <Link to="/">
        <div className="header__logo">
          <div className="header__img">
            <img src={Union} alt="" />
          </div>
          <div className="header__title">
            <h1>Jobored</h1>
          </div>
        </div>
      </Link>
      <div className="header__nav__wrap">
        <nav className="header__nav">
          <div>
            <Link className="header__link" to="/">
              Поиск Вакансий
            </Link>
          </div>
          <div>
            <Link className="header__link" to="/favorite">
              Избранное
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
