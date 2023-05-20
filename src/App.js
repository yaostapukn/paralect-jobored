import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { JobSeacrch } from './pages/JobSearch'
import { VacanciesDetail } from './components/VacanciesDetail/VacanciesDetail'
import { AuthProvider } from './service/AuthProvider'
export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<JobSeacrch />} />
          <Route path="/:id" element={<VacanciesDetail />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}
