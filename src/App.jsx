import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  WhatsappLogo, Phone, MapPin, Clock, Syringe, UserCircle,
  Shield, Star, InstagramLogo, ArrowRight, Certificate,
  Heartbeat, Scissors, Eye, FirstAid, CalendarBlank,
  GraduationCap, Globe, Hospital
} from '@phosphor-icons/react'
import './index.css'

const WHATSAPP = 'https://wa.me/5548996606881?text=Olá! Gostaria de agendar uma consulta com o Dr. Leonello Bocchese.'
const PHONE = '(48) 9660-6881'
const ADDRESS = 'Av. Trompowsky, 291, Ed. Trompowsky Corporate, Torre 1, Sala 602 — Centro, Florianópolis/SC'
const INSTAGRAM = 'https://instagram.com/dr.leonellobocchese'
const HOURS = 'Seg a Sex, 9h às 18h'

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Procedimentos', href: '#procedimentos' },
    { label: 'Formação', href: '#formacao' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Clínica', href: '#clinica' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="navbar-brand">
          <img src="./images/logo.png" alt="Dr. Leonello Bocchese" />
        </a>

        <div className="navbar-links">
          {links.map(l => (
            <a key={l.href} href={l.href} className="navbar-link">{l.label}</a>
          ))}
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="navbar-cta">
            <WhatsappLogo size={14} weight="fill" />
            Agendar
          </a>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 20 }}>
          <WhatsappLogo size={18} weight="fill" />
          Agendar Consulta
        </a>
      </div>
    </>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="./images/hero-clinic.jpg" alt="Clínica de Cirurgia Plástica" />
      </div>
      <div className="hero-content">
        <Reveal>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            CRM-SC 8808 | RQE 10848 | Membro SBCP
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1>
            Cirurgia Plástica com<br />
            <em>excelência internacional</em>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="hero-subtitle">
            Fellowship no NYU Institute of Reconstructive Plastic Surgery (New York) e
            UCI Aesthetic & Plastic Surgery Institute (Califórnia). Mais de 15 anos
            transformando vidas com segurança e naturalidade em Florianópolis.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="hero-actions">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <WhatsappLogo size={18} weight="fill" />
              Agendar Consulta
            </a>
            <a href="#procedimentos" className="btn-outline">
              Procedimentos
              <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="hero-info">
            <div className="hero-info-item">
              <MapPin size={16} weight="duotone" />
              <span>Centro — Florianópolis</span>
            </div>
            <div className="hero-info-item">
              <Star size={16} weight="fill" />
              <span>4.8 — 200+ avaliações</span>
            </div>
            <div className="hero-info-item">
              <GraduationCap size={16} weight="duotone" />
              <span>Fellowship NYU & UCI</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="history" id="sobre">
      <div className="container">
        <div className="history-grid">
          <Reveal>
            <div className="history-image">
              <img src="./images/procedimento.jpg" alt="Dr. Leonello Bocchese em procedimento" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="section-label">Sobre o Dr. Leonello</div>
              <h2 className="section-title">
                Precisão cirúrgica com<br /><em>olhar artístico</em>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="history-text">
                Dr. Leonello Ellera Bocchese é graduado pela Pontifícia Universidade Católica
                do Rio Grande do Sul (PUCRS), com residência em Cirurgia Geral e Cirurgia
                Plástica pelo Hospital Universitário da UFSC. Especialista e membro permanente
                da Sociedade Brasileira de Cirurgia Plástica (SBCP).
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="history-text" style={{ marginTop: 16 }}>
                Aperfeiçoou sua técnica com fellowships internacionais no NYU Institute of
                Reconstructive Plastic Surgery em Nova York e no UCI Aesthetic & Plastic Surgery
                Institute na Califórnia. Atua como preceptor da Residência Médica em Cirurgia
                Plástica do HU/UFSC e é membro da IPRAS (International Confederation for Plastic
                Reconstructive and Aesthetic Surgery).
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 32 }}>
                <CalendarBlank size={18} weight="duotone" />
                Agendar Avaliação
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Procedures() {
  const procedures = [
    {
      icon: Scissors,
      title: 'Lipoescultura HD',
      desc: 'Técnica avançada de definição corporal de alta definição. Resultados naturais com contornos esculpidos e recuperação otimizada.',
      image: './images/contorno-corporal.jpg',
    },
    {
      icon: Heartbeat,
      title: 'Mamoplastia de Aumento',
      desc: 'Próteses de silicone com recuperação em 24 horas. Técnica minimamente invasiva com resultados harmônicos e naturais.',
      image: './images/mamoplastia.jpg',
    },
    {
      icon: Eye,
      title: 'Blefaroplastia',
      desc: 'Rejuvenescimento do olhar através da cirurgia das pálpebras. Resultados sutis que eliminam o aspecto cansado.',
      image: './images/resultado.jpg',
    },
    {
      icon: UserCircle,
      title: 'Rinoplastia',
      desc: 'Harmonização do nariz respeitando as proporções faciais únicas de cada paciente. Técnica aberta e fechada.',
      image: './images/procedimento.jpg',
    },
    {
      icon: FirstAid,
      title: 'Abdominoplastia',
      desc: 'Remodelamento abdominal com plicatura muscular. Ideal para pós-gestação ou grandes perdas de peso.',
      image: './images/centro-cirurgico.jpg',
    },
    {
      icon: Shield,
      title: 'Cirurgia Reparadora',
      desc: 'Reconstrução pós-trauma, queimaduras e cirurgias oncológicas. Formação internacional em cirurgia reconstrutiva.',
      image: './images/hero-clinic.jpg',
    },
  ]

  return (
    <section className="cardapio" id="procedimentos">
      <div className="container">
        <Reveal>
          <div className="section-label">Procedimentos</div>
          <h2 className="section-title">
            Técnica e arte a serviço<br />da sua <em>transformação</em>
          </h2>
        </Reveal>

        <div className="cardapio-grid">
          {procedures.map((proc, i) => (
            <Reveal key={proc.title} delay={i * 0.1}>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="cardapio-card">
                <div className="cardapio-card-image">
                  <img src={proc.image} alt={proc.title} />
                </div>
                <div className="cardapio-card-content">
                  <div className="cardapio-card-category">
                    <proc.icon size={14} weight="duotone" />
                    Cirurgia Plástica
                  </div>
                  <h3 className="cardapio-card-title">{proc.title}</h3>
                  <p className="cardapio-card-desc">{proc.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Formation() {
  const credentials = [
    { icon: GraduationCap, title: 'Graduação em Medicina', desc: 'Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)' },
    { icon: Hospital, title: 'Residência — Cirurgia Plástica', desc: 'Serviço de Cirurgia Plástica HU/UFSC — Florianópolis' },
    { icon: Globe, title: 'Fellowship — NYU', desc: 'NYU Institute of Reconstructive Plastic Surgery — Nova York, EUA' },
    { icon: Globe, title: 'Fellowship — UCI', desc: 'UCI Aesthetic & Plastic Surgery Institute — Orange, Califórnia, EUA' },
    { icon: Certificate, title: 'Membro SBCP', desc: 'Sociedade Brasileira de Cirurgia Plástica — Membro Permanente' },
    { icon: Globe, title: 'Membro IPRAS', desc: 'International Confederation for Plastic Reconstructive and Aesthetic Surgery' },
  ]

  return (
    <section className="experience" id="formacao">
      <div className="container">
        <div className="experience-grid">
          <div>
            <Reveal>
              <div className="section-label">Formação & Credenciais</div>
              <h2 className="section-title">
                Excelência validada por<br /><em>instituições mundiais</em>
              </h2>
            </Reveal>

            <div className="experience-features">
              {credentials.map((c, i) => (
                <Reveal key={c.title + i} delay={i * 0.08}>
                  <div className="experience-feature">
                    <div className="experience-feature-icon">
                      <c.icon size={22} weight="duotone" />
                    </div>
                    <div>
                      <h4>{c.title}</h4>
                      <p>{c.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2}>
            <div className="experience-image">
              <img src="./images/centro-cirurgico.jpg" alt="Centro Cirúrgico" />
              <div className="experience-image-badge">
                <span className="number">15+</span>
                <span className="label">Anos de experiência</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Results() {
  const stats = [
    { number: '200+', label: 'Avaliações Google', sublabel: 'Nota 4.8 / 5.0' },
    { number: '15+', label: 'Anos de experiência', sublabel: 'Desde 2011' },
    { number: '2', label: 'Fellowships internacionais', sublabel: 'NYU & UCI' },
    { number: '18K', label: 'Seguidores Instagram', sublabel: '@dr.leonellobocchese' },
  ]

  return (
    <section className="stats-section" id="resultados">
      <div className="container">
        <Reveal>
          <div className="section-label" style={{ justifyContent: 'center' }}>Números que Falam</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Confiança construída com<br /><em>resultados reais</em>
          </h2>
        </Reveal>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-sublabel">{stat.sublabel}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const images = [
    { src: './images/hero-clinic.jpg', alt: 'Clínica' },
    { src: './images/procedimento.jpg', alt: 'Procedimento' },
    { src: './images/centro-cirurgico.jpg', alt: 'Centro cirúrgico' },
    { src: './images/resultado.jpg', alt: 'Resultado' },
    { src: './images/mamoplastia.jpg', alt: 'Confiança' },
  ]

  return (
    <section className="gallery" id="galeria">
      <div className="container">
        <Reveal>
          <div className="section-label">Galeria</div>
          <h2 className="section-title">Estrutura e <em>tecnologia</em></h2>
        </Reveal>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="gallery-item">
                <img src={img.src} alt={img.alt} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  const reviews = [
    {
      text: 'Profissional extremamente competente e atencioso. A consulta foi muito detalhada, explicou tudo sobre o procedimento e me deixou completamente segura. O resultado da minha mamoplastia ficou absolutamente natural.',
      author: 'Mariana C.',
      rating: 5,
    },
    {
      text: 'Dr. Leonello é um cirurgião excepcional. Fiz lipoescultura HD e o resultado superou todas as minhas expectativas. A recuperação foi muito mais tranquila do que imaginei. Recomendo de olhos fechados.',
      author: 'Fernanda R.',
      rating: 5,
    },
    {
      text: 'Atendimento humanizado do início ao fim. O Dr. Leonello tem um olhar artístico incrível, entendeu exatamente o que eu queria. A equipe da clínica é impecável. Melhor decisão que tomei.',
      author: 'Patricia S.',
      rating: 5,
    },
  ]

  return (
    <section className="reviews" id="avaliacoes">
      <div className="container">
        <div className="reviews-header">
          <div>
            <Reveal>
              <div className="section-label">Avaliações Google</div>
              <h2 className="section-title">O que dizem nossos <em>pacientes</em></h2>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="reviews-score">
              <div className="reviews-score-number">4.8</div>
              <div className="reviews-score-meta">
                <div className="reviews-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} weight={i < 5 ? 'fill' : 'duotone'} />
                  ))}
                </div>
                <div className="reviews-count">200+ avaliações no Google</div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div className="review-card">
                <div className="review-card-quote">&ldquo;</div>
                <div className="review-card-stars">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={14} weight="fill" />
                  ))}
                </div>
                <p className="review-card-text">{review.text}</p>
                <div className="review-card-author">{review.author}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Differentials() {
  return (
    <section className="experience" id="clinica" style={{ background: 'var(--navy)' }}>
      <div className="container">
        <div className="experience-grid">
          <Reveal delay={0.1}>
            <div className="experience-image">
              <img src="./images/floripa.jpg" alt="Florianópolis" />
              <div className="experience-image-badge" style={{ background: 'var(--accent)' }}>
                <span className="number">SBCP</span>
                <span className="label">Membro permanente</span>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="section-label">Clínica Adelle</div>
              <h2 className="section-title">
                Infraestrutura completa<br />no coração de <em>Florianópolis</em>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="history-text">
                A Clínica Adelle Cirurgia Plástica oferece um ambiente sofisticado e seguro,
                com centro cirúrgico próprio equipado com tecnologia de ponta. Localizada no
                Ed. Trompowsky Corporate, uma das regiões mais modernas e seguras de Florianópolis.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="history-text" style={{ marginTop: 16 }}>
                Todo o processo é acompanhado pessoalmente pelo Dr. Leonello — da consulta
                inicial ao pós-operatório. Segurança, ética e resultados naturais são os
                pilares que norteiam cada procedimento.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 32 }}>
                <CalendarBlank size={18} weight="duotone" />
                Agendar Consulta
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="cta-section">
      <div className="container">
        <Reveal>
          <h2>Pronto para a sua<br /><em>transformação</em>?</h2>
          <p>
            Agende uma consulta e descubra como a cirurgia plástica pode
            elevar sua autoestima com segurança e naturalidade.
          </p>
          <div className="cta-actions">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <WhatsappLogo size={18} weight="fill" />
              WhatsApp — Agendar
            </a>
            <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="btn-outline">
              <Phone size={18} weight="duotone" />
              {PHONE}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Contact() {
  const items = [
    { icon: MapPin, title: 'Endereço', text: ADDRESS },
    { icon: Clock, title: 'Horário', text: HOURS },
    { icon: Phone, title: 'Telefone', text: PHONE },
    { icon: Certificate, title: 'CRM', text: 'CRM-SC 8808 | RQE 10848' },
  ]

  return (
    <section className="contact" id="contato">
      <div className="container">
        <Reveal>
          <div className="section-label">Localização</div>
          <h2 className="section-title">Agende sua <em>consulta</em></h2>
        </Reveal>

        <div className="contact-grid">
          <div className="contact-info">
            {items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <item.icon size={20} weight="duotone" />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.4}>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 16 }}>
                <WhatsappLogo size={18} weight="fill" />
                Agendar Consulta
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.9!2d-48.5505!3d-27.5969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM1JzQ4LjkiUyA0OMKwMzMnMDEuOCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                title="Localização Dr. Leonello Bocchese"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-text">Dr. Leonello Bocchese</div>
            <p className="footer-brand-desc">
              Cirurgião Plástico — CRM-SC 8808 | RQE 10848. Membro da Sociedade Brasileira
              de Cirurgia Plástica. Fellowship NYU e UCI. Florianópolis/SC.
            </p>
          </div>

          <div>
            <div className="footer-title">Navegação</div>
            <ul className="footer-links">
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#procedimentos">Procedimentos</a></li>
              <li><a href="#formacao">Formação</a></li>
              <li><a href="#avaliacoes">Avaliações</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-title">Contato</div>
            <ul className="footer-links">
              <li><a href={`tel:${PHONE.replace(/\D/g, '')}`}>{PHONE}</a></li>
              <li><a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">@dr.leonellobocchese</a></li>
              <li><a>{ADDRESS}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; 2026 Dr. Leonello Bocchese — Cirurgia Plástica. CRM-SC 8808.</span>
          <div className="footer-social">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              <InstagramLogo size={20} weight="regular" />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <WhatsappLogo size={20} weight="regular" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppFloat() {
  return (
    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="whatsapp-float">
      <WhatsappLogo size={28} weight="fill" />
    </a>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Procedures />
        <Formation />
        <Results />
        <Gallery />
        <Reviews />
        <Differentials />
        <CtaSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
