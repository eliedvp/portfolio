  "use client";

  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'aos/dist/aos.css';
  import './styles/custom.css'; // Ton CSS personnalisé
  import Image from 'next/image';

  import AOS from 'aos';
  import { useEffect, useState } from 'react';

  export default function Home() {
    const currentYear = new Date().getFullYear();

    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
      // Initialisation de AOS côté client
      if (typeof window !== "undefined") {
        AOS.init({ duration: 1200, once: true });
        setIsClient(true);
      }

      // Sélectionne le curseur suiveur une seule fois
      const cursor = document.getElementById('cursor-follower');

      const onMouseMove = (e: MouseEvent) => {
        if (cursor) {
          cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
      };

      const onMouseEnter = () => {
        if (cursor) {
          cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
          cursor.style.transform += ' scale(1.5)';
        }
      };

      const onMouseLeave = () => {
        if (cursor) {
          cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
          cursor.style.transform = cursor.style.transform.replace(' scale(1.5)', '');
        }
      };

      // Ajouter les écouteurs pour le mouvement de la souris
      if (window) window.addEventListener('mousemove', onMouseMove);

      // Ajouter les écouteurs pour les éléments interactifs
      const interactiveElements = document.querySelectorAll('a, button');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
      });

      // Nettoyage des écouteurs d'événements lors du démontage du composant
      return () => {
        if (window) window.removeEventListener('mousemove', onMouseMove);
        interactiveElements.forEach((el) => {
          el.removeEventListener('mouseenter', onMouseEnter);
          el.removeEventListener('mouseleave', onMouseLeave);
        });
      };
    }, []); // Exécution après le montage du composant

    return (
      <main className="container-fluid p-0">
        {isClient && <div id="cursor-follower"></div>} {/* Afficher le curseur uniquement côté client */}

        {/* Hero Section */}
        <section
          className="hero-section text-white text-center d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: "url('/images/background.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            position: 'relative',
          }}
        >
          <div
            className="hero-overlay"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.6)',
              zIndex: 1,
            }}
          ></div>

          <div className="container position-relative" style={{ zIndex: 2 }}>
            <h1 className="display-2 fw-bold" data-aos="fade-down">
              ADIKO ELIE
            </h1>

            <p className="lead mb-4" data-aos="fade-up" data-aos-delay="200">
              Développeur Full Stack passionné, créant des expériences interactives et performantes.
            </p>
            <a href="#projects" className="btn btn-light btn-lg shadow" data-aos="zoom-in" data-aos-delay="400">
              Découvrez mes projets
            </a>

            {/* Compétences dans la section Hero */}
            <div className="row mt-5">
              {/* Compétence 1 */}
              <div className="col-md-4 mb-4" data-aos="fade-up">
                <div className="card shadow-lg border-0 skill-card">
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold">Développement Web</h5>
                    <ul className="list-unstyled">
                      <li>HTML, CSS, JavaScript</li>
                      <li>Frameworks : React, Angular, Node.js</li>
                      <li>PHP, Laravel, MySQL</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Compétence 2 */}
              <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
                <div className="card shadow-lg border-0 skill-card">
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold">Développement Mobile</h5>
                    <ul className="list-unstyled">
                      <li>Android (Java, Kotlin)</li>
                      <li>Flutter (en cours)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Compétence 3 */}
              <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="400">
                <div className="card shadow-lg border-0 skill-card">
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold">Systèmes et Bases de Données</h5>
                    <ul className="list-unstyled">
                      <li>PostgreSQL, MySQL, MongoDB</li>
                      <li>Docker, Git</li>
                      <li>Odoo ERP</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5 fw-bold" data-aos="fade-up">
              Mes Projets
            </h2>
            <div className="row g-4">
              {/* Projet 1 */}
              <div className="col-lg-6" data-aos="fade-right">
                <div className="card shadow-lg border-0 project-card position-relative overflow-hidden">
                  <div className="project-image-wrapper">
                    <Image
                      src="/images/project1.png"
                      alt="Projet 1"
                      className="card-img-top"
                      width={500} // largeur de l'image (ajuste selon la taille de l'image)
                      height={300} 
                    />
                  </div>
                  <div className="card-body position-relative text-center">
                    <h5 className="card-title fw-bold">Plateforme de Recrutement </h5>
                    <p className="card-text">
                      Une solution complète pour la gestion des offres d&apos;emploi, des candidatures et des entretiens.
                    </p>
                    Laravel 10 - Back-end  🔹 MySQL  🔹 Bootstrap 5  
                  </div>
                </div>
              </div>

              {/* Projet 2 */}
              <div className="col-lg-6" data-aos="fade-left">
  <div className="card shadow-lg border-0 project-card position-relative overflow-hidden">
    <div className="project-image-wrapper">
      <video
        className="card-img-top"
        width={500} // Ajuste la largeur de la vidéo
        height={300} // Ajuste la hauteur de la vidéo
        controls
        autoPlay
        muted
      >
        <source src="/videos/site01.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
    </div>
    <div className="card-body position-relative text-center">
      <h5 className="card-title fw-bold">Éclat Studio - Site Vitrine</h5>
      <p className="card-text">
        Photographie Créative
      </p>
      
    </div>
  </div>
</div>

            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5 fw-bold" data-aos="fade-up">
              Mes Certifications
            </h2>
            <div className="row g-4">
              {/* Certification 1 */}
              <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div className="card shadow-lg border-0 certification-card">
                  <div className="card-body text-center">
                    <Image
                      src="/images/certif_odoo.png"
                      alt="Certification 1"
                      className="card-img-top mb-3"
                      width={500} // largeur de l'image (ajuste selon la taille de l'image)
                      height={220} 
                    />
                    <h5 className="card-title fw-bold">Certification Odoo</h5>
                    <p className="card-text">
                      Odoo Functional Certification - Sample
                    </p>
                  </div>
                </div>
              </div>

              {/* Certification 2 */}
              <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="400">
                <div className="card shadow-lg border-0 certification-card">
                  <div className="card-body text-center">
                    <Image
                      src="/images/certification2.jpg"
                      alt="Certification 2"
                      className="card-img-top mb-3"
                      width={500} // largeur de l'image (ajuste selon la taille de l'image)
                      height={220} 
                    />
                    <div className="certification-card p-3 shadow rounded bg-dark text-white">
                      <h5>📚 Certification Flutter (En cours)</h5>
                      <p>Actuellement en formation sur Flutter pour maîtriser le développement d&apos;applications mobiles modernes et performantes.</p>
                      <a href="lien-de-certification" className="btn btn-outline-light btn-sm disabled">
                        Certification en cours...   
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-dark text-white py-4 text-center">
        <div>
      <p>&copy; {currentYear} . Tous droits réservés.</p>
      <div>
        <a href="mailto:eliediko5@gmail.com" className="text-white mx-3" style={{ textDecoration: 'none' }}>
          📧 Email
        </a>
        <a href="tel:+2250140339819" className="text-white mx-3" style={{ textDecoration: 'none' }}>
          📞 Téléphone
        </a>
        
      </div>
    </div>
        </footer>
      </main>
    );
  }
