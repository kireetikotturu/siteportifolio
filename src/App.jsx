import { motion } from "framer-motion";
import "./App.css";

export default function Portfolio() {

  const projects = [
    {
      name: "Crown Vet",
      link: "https://www.crown.vet/",
      growth: "+25% bookings",
      img: "https://plus.unsplash.com/premium_photo-1663036512129-8e236721f90d?q=80&w=1170&auto=format&fit=crop",
    },
    {
      name: "111 International Spa",
      link: "https://111internationalspas.com/",
      growth: "+50% clients",
      img: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Mirrors Luxury Salon",
      link: "https://www.mirrorsluxurysalons.com/",
      growth: "+40% revenue",
      img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Maavi Hospitals",
      link: "https://maavihospitals.com/",
      growth: "+30% appointments",
      img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=700&q=60",
    },
    {
      name: "Swecha Fashions",
      link: "https://swechafashions.com/",
      growth: "+35% sales",
      img: "https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Kalpraag Clothing",
      link: "https://kalpraag.com/",
      growth: "+40% growth",
      img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const services = [
    {
      title: "Website Development",
      desc: "Modern, fast and mobile-friendly websites.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Conversion Design",
      desc: "Focused on turning visitors into customers.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Booking Systems",
      desc: "Simple appointment systems for your clients.",
      img: "https://images.unsplash.com/photo-1522241112606-b5d35a468795?auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <div className="bg-main">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="container-custom nav-inner">
          <h1 className="logo">Velora Studio</h1>
          <nav>
            <a href="#work">Portfolio</a>
            <a className="ml-4" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="section">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h1 className="hero-title">
              Websites That Help Your Business Grow
            </h1>

            <p className="hero-sub">
              We build modern websites for salons, clinics, and local businesses
              to increase bookings, sales, and customer reach.
            </p>

            <div className="hero-buttons mt-6">
              <a
                href="https://api.whatsapp.com/send?phone=917989919952&text=Hello%2C%20I%20came%20across%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Contact on WhatsApp
              </a>

              <a href="#work" className="btn-outline">
                View Work
              </a>
            </div>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80"
            className="hero-img"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="section container-custom grid md:grid-cols-3 gap-6">
        {services.map((item, i) => (
          <motion.div key={i} whileHover={{ y: -6 }} className="card hover-card">
            <img src={item.img} className="card-img" />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* WORK */}
      <section id="work" className="section container-custom">
        <h2 className="section-title mt-8">Client Success Stories</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="card hover-card"
            >
              <img src={project.img} className="card-img" />
              <h3>{project.name}</h3>
              <p className="growth">{project.growth}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="section text-center">
        <h2 className="section-title">Start Your Website Today</h2>

        <div className="mt-8">
          <a
            href="https://api.whatsapp.com/send?phone=917989919952&text=Hello%2C%20I%20came%20across%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Get Started
          </a>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Velora Studio
      </footer>
    </div>
  );
}
