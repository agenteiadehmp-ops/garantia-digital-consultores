import Image from "next/image";
import { ArrowRight, CheckCircle2, CloudCog, DatabaseZap, FileCheck2, HeartPulse, Landmark, LockKeyhole, Quote, ServerCog, ShieldCheck, ShoppingCart } from "lucide-react";

const services = [
  { number: "01", icon: ServerCog, title: "Auditoría de sistemas", text: "Evaluamos infraestructura TI, redes y bases de datos bajo marcos de control reconocidos." },
  { number: "02", icon: FileCheck2, title: "Certificación de seguridad", text: "Emitimos dictámenes de aseguramiento sobre la efectividad de los controles tecnológicos." },
  { number: "03", icon: CloudCog, title: "Continuidad del negocio", text: "Diagnosticamos planes de recuperación ante desastres y brechas de seguridad digital." },
  { number: "04", icon: DatabaseZap, title: "Integridad de datos", text: "Verificamos que la información financiera y operativa no sufra alteraciones en origen." },
];

const sectors = [
  { icon: Landmark, title: "Financiero y FinTech", text: "Bancos, pasarelas de pago y billeteras digitales." },
  { icon: ShoppingCart, title: "Comercio electrónico", text: "Plataformas con operaciones y datos sensibles." },
  { icon: CloudCog, title: "Servicios SaaS", text: "Proveedores que deben demostrar entornos seguros." },
  { icon: HeartPulse, title: "Sector salud", text: "Entidades que administran historias clínicas digitales." },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Garantía Digital Consultores, inicio"><span className="logo-shell"><img src="/logo.png" alt="Logo de Garantía Digital Consultores" /></span><span>Garantía Digital<br />Consultores</span></a>
        <nav aria-label="Navegación principal"><a href="#nosotros">Nosotros</a><a href="#servicios">Servicios</a><a href="#sectores">Clientes</a><a href="#contacto">Contacto</a></nav>
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

      <section className="statement" id="nosotros">
        <p className="section-kicker">Nuestro propósito</p>
        <div className="statement-grid"><h2>Convertimos la incertidumbre tecnológica en <span>confianza verificable.</span></h2><div><p>Actuamos como un tercero independiente que examina la arquitectura lógica, los controles y los flujos de información de cada organización.</p><div className="values-row"><span>Integridad</span><span>Objetividad</span><span>Confidencialidad</span><span>Escepticismo profesional</span></div></div></div>
      </section>

      <section className="services" id="servicios">
        <div className="section-heading"><div><p className="section-kicker">Qué hacemos</p><h2>Servicios de aseguramiento digital</h2></div><p>Una evaluación rigurosa para proteger la operación y respaldar la confianza de clientes, socios y reguladores.</p></div>
        <div className="service-grid">{services.map(({ number, icon: Icon, title, text }) => <article className="service-card" key={title}><div className="service-top"><Icon size={26} /><span>{number}</span></div><h3>{title}</h3><p>{text}</p><span className="card-rule" /></article>)}</div>
      </section>

      <section className="assurance">
        <div className="assurance-copy"><p className="section-kicker light">Nuestro compromiso</p><h2>Seguridad razonable, sustentada en evidencia.</h2><p>Nuestro trabajo reduce el riesgo de aseguramiento a un nivel aceptablemente bajo mediante pruebas selectivas, análisis costo-beneficio y una evaluación profesional independiente.</p></div>
        <div className="deliverable"><p className="small-label">Producto final</p><h3>Informe de Aseguramiento Independiente</h3><ul><li><CheckCircle2 size={19} /> Dictamen profesional firmado</li><li><CheckCircle2 size={19} /> Mapa de riesgos tecnológicos</li><li><CheckCircle2 size={19} /> Carta de recomendaciones de control</li></ul></div>
      </section>

      <section className="sectors" id="sectores">
        <div className="section-heading"><div><p className="section-kicker">A quién ayudamos</p><h2>Organizaciones que dependen de la confianza</h2></div><p>Trabajamos con empresas medianas y grandes de alta dependencia tecnológica y regulatoria.</p></div>
        <div className="sector-grid">{sectors.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={25} /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="quote-band"><Quote size={35} /><p>Transparencia de la información,<br /><strong>solidez empresarial.</strong></p></section>
      <section className="contact" id="contacto"><div><p className="section-kicker light">Contacto</p><h2>Hagamos visible la confianza detrás de sus sistemas.</h2></div><div className="contact-details"><a href="mailto:garantiadigital@consultores.com">garantiadigital@consultores.com</a><a href="tel:+573126659850">+57 312 665 9850</a></div></section>
      <footer><div className="brand footer-brand"><span className="logo-shell small"><img src="/logo.png" alt="Logo de Garantía Digital Consultores" /></span><span>Garantía Digital<br />Consultores</span></div><p>Auditoría · Aseguramiento · Integridad de datos</p><p>© 2026 Garantía Digital Consultores</p></footer>
    </main>
  );
}
