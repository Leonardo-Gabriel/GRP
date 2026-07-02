import { Sprout } from 'lucide-react';

export default function Header() {
  return (
    <header className="header">
      <div className="brand">
        <div className="brand-icon">
          <Sprout size={28} />
        </div>
        <div>
          <h1>GRP - Gestao Rural Pro</h1>
          <p>Sistema de gerenciamento rural</p>
        </div>
      </div>
      <nav>
        <a href="#dashboard">Dashboard</a>
        <a href="#culturas">Culturas</a>
        <a href="#sobre">Sobre</a>
      </nav>
    </header>
  );
}
