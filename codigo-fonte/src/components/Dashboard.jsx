import { CalendarDays, ClipboardList, CloudSun, MapPinned } from 'lucide-react';

export default function Dashboard({ culturas }) {
  const totalArea = culturas.reduce((total, cultura) => total + Number(cultura.area || 0), 0);
  const emDesenvolvimento = culturas.filter((cultura) => cultura.status === 'Em desenvolvimento').length;

  return (
    <section id="dashboard" className="dashboard-section">
      <div className="hero-card">
        <div>
          <span className="tag">Etapa 2 - Fluxo funcional</span>
          <h2>Controle de culturas agricolas</h2>
          <p>
            Cadastre, consulte, edite e exclua culturas de uma propriedade rural em um fluxo simples e completo.
          </p>
        </div>
        <div className="hero-weather">
          <CloudSun size={42} />
          <strong>24 C</strong>
          <span>Clima simulado</span>
        </div>
      </div>

      <div className="stats-grid">
        <article className="stat-card">
          <ClipboardList />
          <span>Culturas cadastradas</span>
          <strong>{culturas.length}</strong>
        </article>
        <article className="stat-card">
          <MapPinned />
          <span>Area total acompanhada</span>
          <strong>{totalArea} ha</strong>
        </article>
        <article className="stat-card">
          <CalendarDays />
          <span>Em desenvolvimento</span>
          <strong>{emDesenvolvimento}</strong>
        </article>
      </div>
    </section>
  );
}
