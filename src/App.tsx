import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { About } from './components/About'
import { Stack } from './components/Stack'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { I18nProvider, useI18n } from './i18n'

function AppContent() {
  const { t } = useI18n()
  return (
    <>
      <a className="skip" href="#main">{t.skipToContent}</a>
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Stack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  )
}
