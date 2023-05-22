import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { JobSeacrch } from './pages/JobSearch'
import { VacanciesDetail } from './pages/VacanciesDetail'
import { AuthProvider } from './service/AuthProvider'
import { Header } from './components/Header/Header'
import { Favorite } from './pages/Favorite'
export default function App() {
  if (!localStorage.getItem('fav')) {
    localStorage.setItem('fav', JSON.stringify([]))
  }
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<JobSeacrch />} />
          <Route path="/:id" element={<VacanciesDetail />} />
          <Route path="favorite" element={<Favorite />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}
