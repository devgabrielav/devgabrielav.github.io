import { FaWhatsapp } from 'react-icons/fa6'
import { profile } from '../data/profile'
import { useI18n } from '../i18n'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

export function Contact() {
  const { t } = useI18n()
  const whatsappUrl = 'https://wa.me/5532988456343?text=' + encodeURIComponent(t.contact.whatsappText)
  return (
    <section className="sec wrap" id="contato">
      <SectionHead n="04" title={t.contact.title} />
      <div className="contact">
        <Reveal>
          <p className="big">{t.contact.big}</p>
          <p className="muted">{t.contact.muted}</p>
        </Reveal>
        <Reveal delay={120}>
          <ul className="c-list">
            <li><a href={`mailto:${profile.email}`}><span className="mono">{t.contact.emailLabel}</span>{profile.email}</a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><span className="mono">LinkedIn</span>{profile.linkedinHandle}</a></li>
            <li><a href={profile.github} target="_blank" rel="noopener noreferrer"><span className="mono">GitHub</span>{profile.githubUser}</a></li>
            <li><a className="wa" href={whatsappUrl} target="_blank" rel="noopener noreferrer"><FaWhatsapp aria-hidden="true" /><span><span className="mono">WhatsApp</span>{profile.whatsappLabel}</span></a></li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
