import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)

    useEffect(() => {
        const cards = document.querySelectorAll('.card-3d')
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                const xP = (x / rect.width - 0.5) * 6
                const yP = (y / rect.height - 0.5) * 6
                card.style.transform = `perspective(1000px) rotateX(${-yP}deg) rotateY(${xP}deg) translateY(-8px)`
            })
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)'
            })
        })
    }, [])

    // Lock body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    return (
        <>
            {/* Sticky Navbar */}
            <header className="navbar-wrap">
                <nav className="navbar container-wide">
                    <div className="nav-brand">
                        <span className="brand-name">Girimulyo</span>
                        <span className="brand-divider"></span>
                        <span className="brand-sub">KKN Rekognisi ITERA</span>
                    </div>
                    <div className="nav-dropdown-wrapper nav-cta-desktop">
                        <button 
                            className="btn btn-primary btn-hover"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            Layanan
                            <span className="material-symbols-outlined" style={{ fontSize: '20px', marginLeft: '4px' }}>
                                {dropdownOpen ? 'arrow_drop_up' : 'arrow_drop_down'}
                            </span>
                        </button>
                        {dropdownOpen && (
                            <div className="nav-dropdown-menu">
                                <a href="#">Posyandu</a>
                                <a href="https://agromulyolestari.girimulyo.com">Koperasi</a>
                            </div>
                        )}
                    </div>
                    <button
                        className={`hamburger${menuOpen ? ' is-active' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </nav>
            </header>

            {/* Mobile Nav Overlay */}
            <div className={`mobile-nav-overlay${menuOpen ? ' is-open' : ''}`} onClick={() => setMenuOpen(false)}>
                <div className="mobile-nav-panel" onClick={e => e.stopPropagation()}>
                    <a href="#" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
                        <span className="material-symbols-outlined">health_and_safety</span>
                        Posyandu Girimulyo
                    </a>
                    <a href="#" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
                        <span className="material-symbols-outlined">agriculture</span>
                        Koperasi Agro Mulyo
                    </a>
                    <a href="#" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
                        <span className="material-symbols-outlined">language</span>
                        Website Desa
                    </a>
                    <div className="mobile-nav-divider"></div>
                    <a href="#" className="btn btn-primary btn-full btn-hover" onClick={() => setMenuOpen(false)}>Layanan</a>
                </div>
            </div>

            <main className="hero-gradient">
                {/* Hero */}
                <section className="hero container-wide">
                    <div className="hero-inner">
                        <span className="hero-badge">KKN Rekognisi ITERA</span>
                        <h1>Selamat Datang di Portal<br />Komunitas Girimulyo</h1>
                        <p className="hero-subtitle">
                            Membangun kemandirian desa melalui pelayanan kesehatan yang prima dan pemberdayaan ekonomi berbasis koperasi yang berkelanjutan.
                        </p>
                    </div>
                </section>

                {/* Service Cards */}
                <section className="services-section container-wide">
                    <div className="services-grid">

                        {/* Card 1: Posyandu */}
                        <div className="service-card card-3d">
                            <div className="card-blob card-blob--right"></div>
                            <div className="icon-circle icon-circle--secondary">
                                <span className="material-symbols-outlined icon-filled">health_and_safety</span>
                            </div>
                            <h2>Posyandu Girimulyo</h2>
                            <p>Pusat layanan kesehatan keluarga terpadu. Pantau tumbuh kembang balita, kesehatan ibu hamil, dan kesejahteraan lansia di lingkungan kita.</p>
                            <div className="card-action">
                                <button className="btn btn-primary btn-full btn-hover">
                                    Akses Profil Posyandu
                                    <span className="material-symbols-outlined btn-icon">arrow_forward</span>
                                </button>
                            </div>
                        </div>

                        {/* Card 2: Koperasi */}
                        <div className="service-card card-3d">
                            <div className="card-blob card-blob--left"></div>
                            <div className="icon-circle icon-circle--primary">
                                <span className="material-symbols-outlined icon-filled">agriculture</span>
                            </div>
                            <h2>Koperasi Agro Mulyo Lestari</h2>
                            <p>Wadah ekonomi kerakyatan untuk kemajuan petani. Pemasaran hasil tani, dan penyediaan sarana produksi pertanian unggul.</p>
                            <div className="card-action">
                                <a href="https://agromulyolestari.girimulyo.com" className="btn btn-primary btn-full btn-hover" style={{ textDecoration: 'none' }}>
                                    Akses Profil Koperasi
                                    <span className="material-symbols-outlined btn-icon">arrow_forward</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Community / Banner Section */}
                <section className="banner-section container-wide">
                    <div className="banner-card">
                        <div className="banner-dots"></div>
                        <div className="banner-text">
                            <span className="label-caps">Bersatu Kita Maju</span>
                            <h2>Gotong Royong Membangun Desa</h2>
                            <p>Kami percaya bahwa kemajuan desa dimulai dari kepedulian setiap warga. Mari bergabung dan berkontribusi untuk masa depan Girimulyo yang lebih cerah.</p>
                            <div className="banner-btn-group">
                                <button className="btn btn-white btn-hover">Website Desa</button>
                            </div>
                        </div>
                        <div className="banner-pillars">
                            <div className="pillar-tile pillar-health">
                                <div className="pillar-icon-wrap">
                                    <span className="material-symbols-outlined pillar-icon">health_and_safety</span>
                                </div>
                                <div className="pillar-body">
                                    <span className="pillar-title">Kesehatan Keluarga</span>
                                    <span className="pillar-desc">Layanan terpadu untuk ibu, balita &amp; lansia</span>
                                </div>
                            </div>
                            <div className="pillar-tile pillar-agri">
                                <div className="pillar-icon-wrap">
                                    <span className="material-symbols-outlined pillar-icon">agriculture</span>
                                </div>
                                <div className="pillar-body">
                                    <span className="pillar-title">Pertanian Unggul</span>
                                    <span className="pillar-desc">Koperasi modern untuk petani sejahtera</span>
                                </div>
                            </div>
                            <div className="pillar-tile pillar-unity">
                                <div className="pillar-icon-wrap">
                                    <span className="material-symbols-outlined pillar-icon">diversity_3</span>
                                </div>
                                <div className="pillar-body">
                                    <span className="pillar-title">Gotong Royong</span>
                                    <span className="pillar-desc">Kebersamaan sebagai kekuatan utama desa</span>
                                </div>
                            </div>
                            <div className="pillar-tile pillar-growth">
                                <div className="pillar-icon-wrap">
                                    <span className="material-symbols-outlined pillar-icon">eco</span>
                                </div>
                                <div className="pillar-body">
                                    <span className="pillar-title">Berkelanjutan</span>
                                    <span className="pillar-desc">Kemajuan yang menjaga alam &amp; budaya lokal</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-inner container-wide">
                    <div className="footer-brand">
                        <div className="footer-brand-name">
                            <span className="brand-name">Girimulyo</span>
                            <span className="brand-divider"></span>
                            <span className="brand-sub">KKN Rekognisi ITERA</span>
                        </div>
                        <p className="footer-copy">© 2026 Desa Giri Mulyo.KKN Rekognisi ITERA. Seluruh Hak Cipta Dilindungi.</p>
                    </div>
                    <div className="footer-links">
                        <a href="#">Posyandu</a>
                        <a href="https://agromulyolestari.girimulyo.com">Koperasi</a>
                        <a href="#">Website Desa</a>
                    </div>
                    <div className="footer-logos">
                        <img src="/assets/itera.png" alt="Logo ITERA" className="footer-logo" />
                        <img src="/assets/lampung-timur.png" alt="Logo Lampung Timur" className="footer-logo" />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default App
