import Union from '../../public/images/Union.svg'
import './Header.css'

import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
export function Header() {
  const location = useLocation()
  const isFav = location.pathname === '/favorite'

  return (
    <header>
      <div className="header__wrap">
        <Link to="/">
          <div className="header__logo ">
            <div className="header__img ">
              <img src={Union} alt="" />
            </div>
            <div className="header__title hvr-buzz-out ">
              <h1>Jobored</h1>
            </div>
          </div>
        </Link>
        <div className="header__nav__wrap">
          <nav className="header__nav">
            <div>
              <Link
                className={!isFav ? 'header__link__active' : 'header__link'}
                to="/"
              >
                Поиск Вакансий
              </Link>
            </div>
            <div>
              <Link
                className={isFav ? 'header__link__active' : 'header__link'}
                to="/favorite"
              >
                Избранное
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
