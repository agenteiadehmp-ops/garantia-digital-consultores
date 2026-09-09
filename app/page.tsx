import Image from "next/image";
import { ArrowRight, Building2, CheckCircle2, CloudCog, DatabaseZap, FileCheck2, HeartPulse, Landmark, LockKeyhole, MapPin, Network, Quote, ServerCog, ShieldCheck, ShoppingCart, Users } from "lucide-react";

const services = [
  { number: "01", icon: ServerCog, title: "Procedimientos acordados en infraestructura de TI", text: "Pruebas selectivas concertadas sobre seguridad lógica, accesos, segregación de funciones y capacidad de respuesta ante desastres (DRP).", detail: "NISR 4400 · Alcance y pruebas previamente acordados" },
  { number: "02", icon: DatabaseZap, title: "Procedimientos acordados en aseguramiento de datos", text: "Pruebas concertadas de migración de bases de datos, validación de algoritmos transaccionales y verificación de integridad operativa y financiera.", detail: "NISR 4400 · Hallazgos factuales sobre datos" },
  { number: "03", icon: FileCheck2, title: "Compilación de información tecnológica", text: "Estructuración, ordenamiento y presentación técnica de bitácoras de incidentes, métricas de capacidad y manuales de control interno de TI.", detail: "NISR 4410 · Información organizada y presentada" },
];

const benefits = [
  { title: "Sustento probatorio factual", text: "Hallazgos documentados sobre las pruebas acordadas para respaldar sus decisiones." },
  { title: "Optimización costo-beneficio", text: "Un alcance definido que concentra el trabajo en las necesidades de su organización." },
  { title: "Mitigación de contingencias de TI", text: "Evidencia sobre riesgos y controles para orientar las acciones de la administración." },
  { title: "Apoyo al cumplimiento contractual", text: "Información técnica para atender los requerimientos acordados con terceros." },
  { title: "Transparencia en las decisiones", text: "Resultados claros y trazables que facilitan comprender el estado de sus datos." },
];

const exclusions = [
  { title: "Opinión o dictamen financiero tradicional", text: "En los encargos de procedimientos acordados reportamos hallazgos factuales sobre pruebas específicas previamente concertadas. No emitimos una opinión ni conclusiones de auditoría sobre la razonabilidad de estados financieros bajo NIIF." },
  { title: "Control permanente, fiscal o legal", text: "Realizamos encargos puntuales con alcances delimitados a infraestructura o datos específicos. No prestamos revisoría fiscal, monitoreo continuo de legalidad, firma de declaraciones tributarias ni vigilancia institucional recurrente." },
  { title: "Diseñar, construir o corregir sus sistemas", text: "Mantenemos la independencia técnica de nuestras evaluaciones. No diseñamos redes, programamos software ni configuramos servidores como parte de estos encargos." },
  { title: "Análisis superficiales o proyecciones de negocio", text: "Nuestro trabajo se basa en procedimientos definidos y evidencia documentada. No ofrecemos estimaciones subjetivas a futuro, planes comerciales ni revisiones superficiales sin sustento verificable." },
];

const sectors = [
  { icon: Landmark, title: "Financiero y FinTech", text: "Bancos, pasarelas de pago y billeteras digitales." },
  { icon: ShoppingCart, title: "Comercio electrónico", text: "Plataformas con operaciones y datos sensibles." },
  { icon: CloudCog, title: "Cloud y SaaS", text: "Compañías que administran infraestructura y servicios en la nube." },
  { icon: HeartPulse, title: "Salud y EdTech", text: "Entidades que gestionan información clínica y educativa." },
];

const team = [
  { name: "Estela A. Medrano Santamaria", portrait: 0 },
  { name: "Kattya P. Reyes Espitia", portrait: 1 },
  { name: "Erix Albanis Maza Rosales", portrait: 2 },
  { name: "Diana Paola Molina Lora", portrait: 3 },
  { name: "Brenda Álvarez Peña", portrait: 4 },
];

export default function Home() {
  return (
    <main id="contenido">
      <a className="skip-link" href="#nosotros">Saltar al contenido</a>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Garantía Digital Consultores, inicio"><span className="logo-shell"><img src="/logo.png" alt="Logo de Garantía Digital Consultores" /></span><span>Garantía Digital<br />Consultores</span></a>
        <nav aria-label="Navegación principal"><a href="#nosotros">Nosotros</a><a href="#servicios">Servicios</a><a href="#equipo">Equipo</a><a href="#ubicacion">Ubicación</a><a href="#contacto">Contacto</a></nav>
        <details className="mobile-menu"><summary>Menú <span aria-hidden="true">☰</span></summary><nav aria-label="Navegación móvil"><a href="#nosotros">Nosotros</a><a href="#mision-title">Misión y visión</a><a href="#servicios">Servicios</a><a href="#equipo">Equipo</a><a href="#ubicacion">Ubicación</a><a href="#contacto">Contacto</a></nav></details>
        <a className="header-cta" href="#contacto">Hablemos <ArrowRight size={16} /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="hero-grid" aria-hidden="true" />
          <div className="glow glow-one" aria-hidden="true" />
          <div className="glow glow-two" aria-hidden="true" />
          <p className="eyebrow"><span /> Servicios relacionados · NISR</p>
          <h1>Confianza digital<br />que se puede <em>verificar.</em></h1>
          <p className="hero-lead">Aplicamos procedimientos acordados y compilamos información tecnológica para aportar evidencia factual, trazabilidad y claridad a las decisiones de su organización.</p>
          <div className="hero-actions"><a className="button-primary" href="#servicios">Conozca nuestros servicios <ArrowRight size={18} /></a><a className="text-link" href="#nosotros">Quiénes somos</a></div>
          <div className="trust-line"><ShieldCheck size={22} /><span><strong>Procedimientos acordados y compilación</strong><br />NISR 4400 · NISR 4410 · Rigor técnico</span></div>
        </div>
        <div className="hero-visual">
          <Image src="/team.jpg" alt="Profesionales analizando información empresarial" fill priority unoptimized sizes="(max-width: 900px) 100vw, 48vw" />
          <div className="visual-card"><div className="shield-mini"><LockKeyhole size={23} /></div><div><strong>Evidencia documentada</strong><span>Pruebas con alcance acordado</span></div><CheckCircle2 size={20} /></div>
          <div className="visual-mark">GDC</div>
          <div className="orbit-badge orbit-one"><span /> Datos íntegros</div>
          <div className="orbit-badge orbit-two"><span /> Datos trazables</div>
        </div>
      </section>

      <section className="statement" id="nosotros" aria-labelledby="nosotros-title">
        <p className="section-kicker">Quiénes somos</p>
        <div className="statement-grid"><h2 id="nosotros-title">Criterio independiente.<br /><span>Confianza que permanece.</span></h2><div><p>Somos una firma de servicios relacionados en Cartagena de Indias. Desarrollamos encargos de procedimientos acordados y compilación de información financiera y tecnológica bajo estándares NISR. Acordamos el alcance con la administración y presentamos información clara para comprender los riesgos operativos y tomar decisiones con fundamento.</p><p className="brand-meaning">Nuestro logotipo representa la integración entre seguridad digital, rigurosidad matemática y fe pública.</p><div className="values-row" aria-label="Valores corporativos"><span>Integridad</span><span>Objetividad</span><span>Confidencialidad</span><span>Escepticismo profesional</span></div></div></div>
      </section>

      <section className="purpose-pair" aria-label="Misión y visión">
        <article aria-labelledby="mision-title"><span className="purpose-icon" aria-hidden="true"><ShieldCheck size={25} /></span><p className="section-kicker">01 · Nuestro propósito</p><h2 id="mision-title">Misión</h2><p>Brindar confianza institucional y fe pública a través de la información rigurosa de encargos de servicios relacionados, aplicando procedimientos acordados y compilación de información financiera y tecnológica bajo estándares NISR; garantizando la integridad, trazabilidad y el estricto cumplimiento normativo de los datos para mitigar los riesgos operativos de nuestros clientes.</p></article>
        <article aria-labelledby="vision-title"><span className="purpose-icon" aria-hidden="true"><Building2 size={25} /></span><p className="section-kicker">02 · Nuestro horizonte</p><h2 id="vision-title">Visión</h2><p>Ser para el año 2030 la firma consultora líder a nivel nacional en el mercado de aseguramiento de información y servicios relacionados, reconocida por transformar la complejidad de los datos tecnológicos y financieros en ventajas competitivas, transparentes y de absoluta confianza para las organizaciones.</p></article>
      </section>

      <section className="services" id="servicios">
        <div className="section-heading"><div><p className="section-kicker">Qué hacemos</p><h2>Catálogo de servicios</h2></div><p>Tres servicios con alcance definido: pruebas acordadas sobre infraestructura y datos, y compilación de información tecnológica.</p></div>
        <div className="service-grid">{services.map(({ number, icon: Icon, title, text, detail }) => <article className="service-card" key={title}><div className="service-top"><Icon size={26} /><span>{number}</span></div><h3>{title}</h3><p>{text}</p><div className="service-detail"><CheckCircle2 size={15} />{detail}</div><span className="card-rule" /></article>)}</div>
      </section>

      <section className="diagnosis services" id="diagnostico" aria-labelledby="diagnostico-title">
        <div className="section-heading"><div><p className="section-kicker">Diagnóstico general</p><h2 id="diagnostico-title">Mitigar riesgos comienza por conocer los hechos.</h2></div><p>Las fallas de TI y las alteraciones de datos generan riesgos financieros y reputacionales.</p></div>
        <div className="diagnosis-copy"><p>Diseñamos junto a la administración pruebas selectivas sobre los controles lógicos y algoritmos de la entidad. El alcance se acuerda previamente para documentar los hechos observados en el ecosistema digital.</p><p>Los procedimientos acordados y la compilación son encargos distintos: los primeros presentan los procedimientos realizados y sus hallazgos; la segunda estructura y presenta la información suministrada.</p></div>
      </section>

      <section className="assurance">
        <div className="assurance-copy"><p className="section-kicker light">Nuestro compromiso</p><h2>Alcance acordado. Resultados transparentes.</h2><p>Presentamos los procedimientos realizados y los hallazgos factuales obtenidos. Los usuarios del informe valoran estos resultados para extraer sus propias conclusiones.</p><p>Estos servicios no proporcionan una opinión de auditoría ni una conclusión de aseguramiento.</p></div>
        <div className="deliverable"><p className="small-label">Resultado del encargo</p><h3>Información técnica para decidir</h3><ul><li><CheckCircle2 size={19} /> Informe de procedimientos acordados y hallazgos factuales</li><li><CheckCircle2 size={19} /> Información tecnológica compilada, según el servicio contratado</li><li><CheckCircle2 size={19} /> Alcance y limitaciones claramente identificados</li></ul></div>
      </section>

      <section className="benefits-section services" id="beneficios" aria-labelledby="beneficios-title"><div className="section-heading"><div><p className="section-kicker">Valor para su organización</p><h2 id="beneficios-title">Beneficios que parten de la evidencia</h2></div><p>Un trabajo enfocado en aportar claridad, documentar hechos y orientar decisiones.</p></div><div className="benefit-grid">{benefits.map(({ title, text }) => <article key={title}><CheckCircle2 size={24} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="team-section" id="equipo">
        <div className="section-heading"><div><p className="section-kicker">Nuestro equipo</p><h2>Una firma construida sobre criterio e independencia</h2></div><p>Un equipo reunido para evaluar los riesgos tecnológicos con integridad, objetividad, confidencialidad y escepticismo profesional.</p></div>
        <div className="team-layout"><div className="team-members" aria-label="Equipo fundador">{team.map(({ name, portrait }) => <article className="member-card" key={name}><div className="member-portrait"><img loading="lazy" decoding="async" src="/equipo-fundador.jpg" alt={name} style={{ left: `-${portrait * 100}%` }} /></div><div className="member-caption"><h3>{name}</h3></div></article>)}</div><div className="org-panel"><p className="small-label">Organigrama funcional</p><div className="org-root"><Users size={19} /> Socios fundadores</div><span className="org-line" /><div className="org-quality"><ShieldCheck size={18} /> Comité de Control de Calidad<small>Cumplimiento normativo y control</small></div><div className="org-branches"><article><ServerCog size={22} /><h3>Área de Encargos · NISR 4400</h3><p>Auditor senior de encargos<br />Analista de evidencia y datos<br />Analista de Riesgos Digitales</p></article><article><Network size={22} /><h3>Área de Compilación · NISR 4410</h3><p>Especialista en marcos de información financiera<br />Analista de integridad y conciliación de datos<br />Asistente de Pruebas de Cumplimiento</p></article></div></div></div>
      </section>

      <section className="sectors" id="sectores">
        <div className="section-heading"><div><p className="section-kicker">A quién ayudamos</p><h2>Organizaciones que dependen de la confianza</h2></div><p>Organizaciones medianas y grandes con alta dependencia tecnológica, entornos transaccionales complejos y exigencias de cumplimiento normativo o contractual ante terceros.</p></div>
        <div className="sector-grid">{sectors.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={25} /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="scope-section services" id="alcance" aria-labelledby="alcance-title"><div className="section-heading"><div><p className="section-kicker">Alcance e independencia</p><h2 id="alcance-title">Cuándo nuestros servicios no son los indicados</h2></div><p>Delimitar lo que hacemos ayuda a elegir el servicio adecuado y a mantener expectativas claras.</p></div><div className="scope-list">{exclusions.map(({ title, text }) => <details key={title}><summary>{title}</summary><p>{text}</p></details>)}</div></section>

      <section className="location-section" id="ubicacion"><div className="location-image"><img loading="lazy" width="1400" height="748" src="/cartagena-centro.jpg" alt="Arquitectura colonial del Centro Histórico de Cartagena de Indias" /></div><div className="location-copy"><span className="location-pin"><MapPin size={25} /></span><p className="section-kicker light">Nuestra ubicación</p><h2>Desde el corazón de Cartagena de Indias</h2><p>Estamos ubicados en el Centro Histórico, un entorno donde la solidez institucional y la transformación empresarial conviven. Desde Cartagena proyectamos nuestros servicios relacionados hacia organizaciones de todo el territorio nacional.</p><div className="location-label">Centro Histórico · Cartagena de Indias · Colombia</div></div></section>

      <section className="quote-band"><Quote size={35} /><p>Transparencia de la información,<br /><strong>solidez empresarial.</strong></p></section>
      <section className="contact" id="contacto"><div><p className="section-kicker light">Contacto</p><h2>Su aliado estratégico que brinda confianza.</h2></div><div className="contact-details"><p className="contact-intro">Conversemos sobre las necesidades de su organización.</p><a href="mailto:garantiadigital@consultores.com">garantiadigital@consultores.com</a><a href="tel:+573126659850">+57 312 665 9850</a></div></section>
      <footer><div className="brand footer-brand"><span className="logo-shell small"><img src="/logo.png" alt="Logo de Garantía Digital Consultores" /></span><span>Garantía Digital<br />Consultores</span></div><p>Procedimientos acordados · Compilación · Integridad de datos</p><p>© 2026 Garantía Digital Consultores</p></footer>
    </main>
  );
}
