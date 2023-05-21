import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { JobSeacrch } from './pages/JobSearch'
import { VacanciesDetail } from './pages/VacanciesDetail'
import { AuthProvider } from './service/AuthProvider'
import { Header } from './components/Header/Header'
export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<JobSeacrch />} />
          <Route path="/:id" element={<VacanciesDetail />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}
