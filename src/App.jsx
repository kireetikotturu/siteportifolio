import { motion } from "framer-motion";
import "./App.css";

export default function Portfolio() {
  const projects = [
    {
      name: "Crown Vet",
      link: "https://www.crown.vet/",
      growth: "+45% bookings",
      img: "https://plus.unsplash.com/premium_photo-1663036512129-8e236721f90d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      growth: "+42% revenue",
      img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Maavi Hospitals",
      link: "https://maavihospitals.com/",
      growth: "+38% appointments",
      img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Swecha Fashions",
      link: "https://swechafashions.com/",
      growth: "+47% sales",
      img: "https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Kalpraag Clothing",
      link: "https://kalpraag.com/",
      growth: "+52% growth",
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
      img: "https://images.unsplash.com/photo-1522241112606-b5d35a468795?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="bg-main text-dark">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container-custom nav-inner">
          <h1 className="logo">Velora Studio</h1>
          <nav>
            <a href="#work">Work</a>
            <a class="ml-2" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="section hero">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="flex flex-col justify-center text-center md:text-left items-center md:items-start">
            <h1 className="hero-title">
              Websites That Help Your Business Grow
            </h1>

            <p className="hero-sub">
              We build modern websites for salons, clinics, and local businesses
              to increase bookings, sales, and customer reach.
            </p>

            <div className="hero-buttons mt-4">
              <a
                href="https://wa.me/917989919952"
                target="_blank"
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
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80"
            className="hero-img"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="section container-custom grid md:grid-cols-3 gap-6">
        {services.map((item, i) => (
          <motion.div key={i} whileHover={{ y: -6 }} className="card">
            <img src={item.img} className="card-img" />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* WORK */}
      <section id="work" className="section container-custom mt-8">
    
        <h2 className="section-title">Selected Work</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-4">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              target="_blank"
              whileHover={{ y: -6 }}
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
        <div className="mt-6">
          <a
            href="https://wa.me/917989919952"
            target="_blank"
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
