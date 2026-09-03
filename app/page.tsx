import Image from "next/image";
import { ArrowRight, Building2, CheckCircle2, CloudCog, DatabaseZap, FileCheck2, HeartPulse, Landmark, LockKeyhole, MapPin, Network, Quote, ServerCog, ShieldCheck, ShoppingCart, Users } from "lucide-react";

const services = [
  { number: "01", icon: ServerCog, title: "Auditoría y aseguramiento de sistemas", text: "Evaluamos de forma profunda la infraestructura de TI, redes y bases de datos bajo COBIT y estándares internacionales.", detail: "Controles, arquitectura y riesgos tecnológicos" },
  { number: "02", icon: FileCheck2, title: "Certificación de seguridad", text: "Emitimos dictámenes bajo normas ISAE y SOC sobre la efectividad de los controles tecnológicos.", detail: "Evidencia independiente para terceros" },
  { number: "03", icon: CloudCog, title: "Continuidad y seguridad digital", text: "Revisamos planes de recuperación ante desastres (DRP) y detectamos preventivamente brechas de seguridad.", detail: "Preparación frente a interrupciones" },
  { number: "04", icon: DatabaseZap, title: "Aseguramiento e integridad de datos", text: "Verificamos técnicamente que la información financiera y operativa no sufra alteraciones en los sistemas de origen.", detail: "Datos íntegros, disponibles y confiables" },
];

const sectors = [
  { icon: Landmark, title: "Financiero y FinTech", text: "Bancos, pasarelas de pago y billeteras digitales." },
  { icon: ShoppingCart, title: "Comercio electrónico", text: "Plataformas con operaciones y datos sensibles." },
  { icon: CloudCog, title: "Servicios SaaS", text: "Proveedores que deben demostrar entornos seguros." },
  { icon: HeartPulse, title: "Sector salud", text: "Entidades que administran historias clínicas digitales." },
];

const team = ["Erix Albanis Maza Rosales", "Estela A. Medrano Santamaria", "Diana Paola Molina Lora", "Kattya P. Reyes Espitia", "Brenda Álvarez Peña"];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Garantía Digital Consultores, inicio"><span className="logo-shell"><img src="/logo.png" alt="Logo de Garantía Digital Consultores" /></span><span>Garantía Digital<br />Consultores</span></a>
        <nav aria-label="Navegación principal"><a href="#nosotros">Nosotros</a><a href="#servicios">Servicios</a><a href="#equipo">Equipo</a><a href="#ubicacion">Ubicación</a><a href="#contacto">Contacto</a></nav>
        <a className="header-cta" href="#contacto">Hablemos <ArrowRight size={16} /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="hero-grid" aria-hidden="true" />
          <div className="glow glow-one" aria-hidden="true" />
          <div className="glow glow-two" aria-hidden="true" />
          <p className="eyebrow"><span /> Aseguramiento de información</p>
          <h1>Confianza digital<br />que se puede <em>verificar.</em></h1>
          <p className="hero-lead">Evaluamos la seguridad, fiabilidad y cumplimiento de sus sistemas para transformar el riesgo tecnológico en decisiones empresariales sólidas.</p>
          <div className="hero-actions"><a className="button-primary" href="#servicios">Conozca nuestros servicios <ArrowRight size={18} /></a><a className="text-link" href="#nosotros">Quiénes somos</a></div>
          <div className="trust-line"><ShieldCheck size={22} /><span><strong>Seguridad razonable</strong><br />Evidencia suficiente · Independencia · Rigor</span></div>
        </div>
        <div className="hero-visual">
          <Image src="/team.jpg" alt="Profesionales analizando información empresarial" fill priority sizes="(max-width: 900px) 100vw, 48vw" />
          <div className="visual-card"><div className="shield-mini"><LockKeyhole size={23} /></div><div><strong>Información protegida</strong><span>Controles evaluados con objetividad</span></div><CheckCircle2 size={20} /></div>
          <div className="visual-mark">GDC</div>
          <div className="orbit-badge orbit-one"><span /> Datos íntegros</div>
          <div className="orbit-badge orbit-two"><span /> Riesgo controlado</div>
        </div>
      </section>

      <section className="statement" id="nosotros" aria-labelledby="nosotros-title">
        <p className="section-kicker">Quiénes somos</p>
        <div className="statement-grid"><h2 id="nosotros-title">Tecnología cercana para impulsar <span>soluciones reales.</span></h2><div><p>Garantía Digital Consultores es un equipo comprometido con el uso estratégico de la tecnología para acompañar la transformación y modernización de empresas, emprendedores e instituciones. Nuestro trabajo combina conocimiento técnico, atención cercana y soluciones orientadas a las necesidades de cada cliente.</p><div className="values-row" aria-label="Valores corporativos"><span>Integridad</span><span>Objetividad</span><span>Confidencialidad</span><span>Escepticismo profesional</span></div></div></div>
      </section>

      <section className="purpose-pair" aria-label="Misión y visión">
        <article aria-labelledby="mision-title"><span className="purpose-icon" aria-hidden="true"><ShieldCheck size={25} /></span><p className="section-kicker">Misión</p><h2 id="mision-title">Tecnología aplicada a necesidades reales</h2><p>En Garantía Digital Consultores ayudamos a empresas, emprendedores e instituciones a aprovechar la tecnología para mejorar sus procesos, fortalecer su presencia digital y desarrollar soluciones que respondan a sus necesidades reales. Ofrecemos servicios de ingeniería en tecnologías de la información con un acompañamiento cercano, práctico y orientado a resultados.</p></article>
        <article aria-labelledby="vision-title"><span className="purpose-icon" aria-hidden="true"><Building2 size={25} /></span><p className="section-kicker">Visión</p><h2 id="vision-title">Referentes en Cartagena y la región Caribe</h2><p>Ser una empresa referente en servicios de tecnología y transformación digital en Cartagena de Indias y la región Caribe, reconocida por la calidad de nuestras soluciones, la innovación y la confianza que construimos con cada cliente, contribuyendo al crecimiento y modernización de organizaciones y negocios.</p></article>
      </section>

      <section className="services" id="servicios">
        <div className="section-heading"><div><p className="section-kicker">Qué hacemos</p><h2>Servicios de aseguramiento digital</h2></div><p>Una evaluación rigurosa para proteger la operación y respaldar la confianza de clientes, socios y reguladores.</p></div>
        <div className="service-grid">{services.map(({ number, icon: Icon, title, text, detail }) => <article className="service-card" key={title}><div className="service-top"><Icon size={26} /><span>{number}</span></div><h3>{title}</h3><p>{text}</p><div className="service-detail"><CheckCircle2 size={15} />{detail}</div><span className="card-rule" /></article>)}</div>
      </section>

      <section className="assurance">
        <div className="assurance-copy"><p className="section-kicker light">Nuestro compromiso</p><h2>Seguridad razonable, sustentada en evidencia.</h2><p>Nuestro trabajo reduce el riesgo de aseguramiento a un nivel aceptablemente bajo mediante pruebas selectivas, análisis costo-beneficio y una evaluación profesional independiente.</p></div>
        <div className="deliverable"><p className="small-label">Producto final</p><h3>Informe de Aseguramiento Independiente</h3><ul><li><CheckCircle2 size={19} /> Dictamen profesional firmado</li><li><CheckCircle2 size={19} /> Mapa de riesgos tecnológicos</li><li><CheckCircle2 size={19} /> Carta de recomendaciones de control</li></ul></div>
      </section>

      <section className="team-section" id="equipo">
        <div className="section-heading"><div><p className="section-kicker">Nuestro equipo</p><h2>Una firma construida sobre criterio e independencia</h2></div><p>Cinco profesionales reunidos para evaluar los riesgos tecnológicos con integridad, objetividad, confidencialidad y escepticismo profesional.</p></div>
        <div className="team-layout"><div className="founders-panel"><div className="team-symbol"><Users size={32} /></div><p className="small-label">Equipo fundador</p><div className="founder-list">{team.map((member, index) => <div className="founder" key={member}><span>{String(index + 1).padStart(2, "0")}</span><strong>{member}</strong></div>)}</div></div><div className="org-panel"><p className="small-label">Organigrama funcional</p><div className="org-root"><Users size={19} /> Socios fundadores</div><span className="org-line" /><div className="org-quality"><ShieldCheck size={18} /> Gerencia de Calidad<small>Cumplimiento normativo y control</small></div><div className="org-branches"><article><ServerCog size={22} /><h3>Área de Aseguramiento en Sistemas</h3><p>Líder de Seguridad de Información<br />Auditor Senior de Plataformas<br />Analista de Riesgos Digitales</p></article><article><Network size={22} /><h3>Área de Auditoría Contable y TI</h3><p>Especialista en Control Interno<br />Auditor de Procesos Financieros<br />Asistente de Pruebas de Cumplimiento</p></article></div></div></div>
      </section>

      <section className="sectors" id="sectores">
        <div className="section-heading"><div><p className="section-kicker">A quién ayudamos</p><h2>Organizaciones que dependen de la confianza</h2></div><p>Trabajamos con empresas medianas y grandes de alta dependencia tecnológica y regulatoria.</p></div>
        <div className="sector-grid">{sectors.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={25} /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="location-section" id="ubicacion"><div className="location-image"><img src="/cartagena-centro.jpg" alt="Arquitectura colonial del Centro Histórico de Cartagena de Indias" /></div><div className="location-copy"><span className="location-pin"><MapPin size={25} /></span><p className="section-kicker light">Nuestra ubicación</p><h2>Desde el corazón de Cartagena de Indias</h2><p>Estamos ubicados en el Centro Histórico, un entorno donde la solidez institucional y la transformación empresarial conviven. Desde Cartagena proyectamos nuestros servicios de aseguramiento de información hacia organizaciones de todo el territorio nacional.</p><div className="location-label">Centro Histórico · Cartagena de Indias · Colombia</div></div></section>

      <section className="quote-band"><Quote size={35} /><p>Transparencia de la información,<br /><strong>solidez empresarial.</strong></p></section>
      <section className="contact" id="contacto"><div><p className="section-kicker light">Contacto</p><h2>Hagamos visible la confianza detrás de sus sistemas.</h2></div><div className="contact-details"><a href="mailto:garantiadigital@consultores.com">garantiadigital@consultores.com</a><a href="tel:+573126659850">+57 312 665 9850</a></div></section>
      <footer><div className="brand footer-brand"><span className="logo-shell small"><img src="/logo.png" alt="Logo de Garantía Digital Consultores" /></span><span>Garantía Digital<br />Consultores</span></div><p>Auditoría · Aseguramiento · Integridad de datos</p><p>© 2026 Garantía Digital Consultores</p></footer>
    </main>
  );
}
