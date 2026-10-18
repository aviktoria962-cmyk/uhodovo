import { Header } from './components/Header/Header'
import { Banner } from './components/Banner/Banner'
import { News } from './components/News/News'
import { Footer } from './components/Footer/Footer'

export function App() {
  return (
    <div className="layout">
      <Header />
      <main className="container">
        <Banner />
        <News />
      </main>
      <Footer />
    </div>
  )
}

export default App