import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/HomePage'
import PoemPage from './components/PoemPage'
import CollectionsPage from './components/CollectionsPage'
import CollectionView from './components/CollectionView'
import JournalPage from './components/JournalPage'
import JournalEntryPage from './components/JournalEntryPage'
import AboutPage from './components/AboutPage'
import NotFoundPage from './components/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/"                  element={<HomePage />} />
        <Route path="/poem/:id"          element={<PoemPage />} />
        <Route path="/collections"       element={<CollectionsPage />} />
        <Route path="/collection/:id"    element={<CollectionView />} />
        <Route path="/journal"           element={<JournalPage />} />
        <Route path="/journal/:id"       element={<JournalEntryPage />} />
        <Route path="/about"             element={<AboutPage />} />
        <Route path="*"                  element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
