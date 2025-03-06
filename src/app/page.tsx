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
          backgroundImage: "url('/hero-bg.jpg')",
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
            Bienvenue ...
          </h1>
          <p className="lead mb-4" data-aos="fade-up" data-aos-delay="200">
            Développeur web passionné, créant des expériences interactives inoubliables.
          </p>
          <a href="#projects" className="btn btn-light btn-lg shadow" data-aos="zoom-in" data-aos-delay="400">
            Découvrez mes projets
          </a>
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
                    src="/images/project1.jpg"
                    alt="Projet 1"
                    className="card-img-top"
                    width={500} // largeur de l'image (ajuste selon la taille de l'image)
  height={300} 
                  />
                </div>
                <div className="card-body position-relative text-center">
                  <h5 className="card-title fw-bold">Application E-Commerce</h5>
                  <p className="card-text">
                    Une plateforme moderne et intuitive pour une expérience d&apos;achat optimale.
                  </p>
                  <a href="#!" className="btn btn-outline-primary btn-sm" style={{ zIndex: 10 }}>
                    Voir le projet
                  </a>
                </div>
              </div>
            </div>

            {/* Projet 2 */}
            <div className="col-lg-6" data-aos="fade-left">
              <div className="card shadow-lg border-0 project-card position-relative overflow-hidden">
                <div className="project-image-wrapper">
                  <Image
                    src="/images/site01.jpg"
                    alt="Projet 2"
                    className="card-img-top"
                   width={500} // largeur de l'image (ajuste selon la taille de l'image)
  height={300} 
                  />
                </div>
                <div className="card-body position-relative text-center">
                  <h5 className="card-title fw-bold">Portfolio Créatif</h5>
                  <p className="card-text">
                    Présentez vos créations avec un design élégant et interactif.
                  </p>
                  <a href="#!" className="btn btn-outline-primary btn-sm" style={{ zIndex: 10 }}>
                    Voir le projet
                  </a>
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
                  <h5 className="card-title fw-bold">Certification en UX/UI Design</h5>
                  <p className="card-text">
                    Certification qui prouve mes compétences en design centré sur l&apos;utilisateur et l&apos;expérience interactive.
                  </p>
                  <a href="#!" className="btn btn-outline-primary btn-sm">
                    Voir les détails
                  </a>
                </div>
              </div>
            </div>

            {/* Certification 3 */}
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="600">
              <div className="card shadow-lg border-0 certification-card">
                <div className="card-body text-center">
                  <Image
                    src="/images/certification2.jpg"
                    alt="Certification 3"
                    className="card-img-top mb-3"
                    width={500} // largeur de l'image (ajuste selon la taille de l'image)
                    height={220} 
                  />
                  <h5 className="card-title fw-bold">Certification en Développement Mobile</h5>
                  <p className="card-text">
                    Certification en développement d&apos;applications mobiles natives et hybrides.
                  </p>
                  <a href="#!" className="btn btn-outline-primary btn-sm">
                    Voir les détails
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 text-center">
        <p>&copy; {currentYear} Mon Portfolio. Tous droits réservés.</p>
      </footer>
    </main>
  );
}
