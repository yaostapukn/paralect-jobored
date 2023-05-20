import { useState, useEffect, useContext } from 'react'
import AuthContext from '../../service/AuthProvider'
import { Loader } from '../Loader/Loader'
import { VacanciesCard } from '../VacanciesCard/VacanciesCard'
export function Vacancies({ vacancies }) {
  if (!vacancies) {
    return <Loader />
  }
  return <>{vacancies && <VacanciesCard vacancies={vacancies} />}</>
}
