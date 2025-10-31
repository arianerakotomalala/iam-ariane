import React, { useState } from 'react';

export default function Navigation () {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav aria-label="Navigation principale" className="nav-root">
			<style>{`
				.nav-root {
					position: sticky;
					top: 0;
					z-index: 1000;
					background: rgba(18, 18, 18, 0.7);
					backdrop-filter: saturate(180%) blur(10px);
					-webkit-backdrop-filter: saturate(180%) blur(10px);
					border-bottom: 1px solid rgba(255,255,255,0.08);
				}

				.nav-container {
					max-width: 1100px;
					margin: 0 auto;
					padding: 0.75rem 1rem;
					display: flex;
					align-items: center;
					justify-content: space-between;
				}

				.brand {
					color: #ffffff;
					font-weight: 700;
					letter-spacing: 0.3px;
				}

				.menu-toggle {
					display: none;
					background: transparent;
					border: 0;
					width: 40px;
					height: 40px;
					border-radius: 8px;
					align-items: center;
					justify-content: center;
					color: #fff;
					cursor: pointer;
				}

				.hamburger,
				.hamburger::before,
				.hamburger::after {
					content: '';
					display: block;
					width: 22px;
					height: 2px;
					background: currentColor;
					transition: transform 200ms ease, opacity 200ms ease;
				}

				.hamburger::before { transform: translateY(-6px); }
				.hamburger::after { transform: translateY(6px); }

				.menu-toggle[aria-expanded="true"] .hamburger { opacity: 0; }
				.menu-toggle[aria-expanded="true"] .hamburger::before { transform: rotate(45deg); }
				.menu-toggle[aria-expanded="true"] .hamburger::after { transform: rotate(-45deg); }

				.nav-links {
					list-style: none;
					margin: 0;
					padding: 0;
					display: flex;
					gap: 1rem;
				}

				.nav-links a {
					position: relative;
					text-decoration: none;
					color: #e8e8e8;
					padding: 0.4rem 0.2rem;
					transition: color 150ms ease;
				}

				.nav-links a::after {
					content: '';
					position: absolute;
					left: 0;
					bottom: 0;
					width: 100%;
					height: 2px;
					background: linear-gradient(90deg,#7c3aed,#06b6d4);
					transform: scaleX(0);
					transform-origin: left;
					transition: transform 180ms ease;
				}

				.nav-links a:hover { color: #ffffff; }
				.nav-links a:hover::after { transform: scaleX(1); }

				@media (max-width: 768px) {
					.menu-toggle { display: inline-flex; }
					.nav-links {
						position: absolute;
						top: 56px;
						left: 0;
						right: 0;
						background: rgba(18, 18, 18, 0.95);
						backdrop-filter: blur(6px);
						border-bottom: 1px solid rgba(255,255,255,0.08);
						flex-direction: column;
						gap: 0;
						padding: 0.5rem 1rem 1rem;
						display: none;
					}
					.nav-links.open { display: flex; }
				}
			`}</style>

			<div className="nav-container">
				<strong className="brand">Mon Portfolio</strong>
				<button
					className="menu-toggle"
					aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
					aria-controls="primary-nav"
					aria-expanded={isOpen}
					onClick={() => setIsOpen(v => !v)}
				>
					<span className="hamburger" />
				</button>
				<ul id="primary-nav" className={`nav-links ${isOpen ? 'open' : ''}`}>
					<li><a href="#home">Home</a></li>
					<li><a href="#projet">Projet</a></li>
					<li><a href="#skills">Skills</a></li>
				</ul>
			</div>
		</nav>
	);
}