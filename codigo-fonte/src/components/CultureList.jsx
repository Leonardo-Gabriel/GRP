import { Edit, Trash2 } from 'lucide-react';

export default function CultureList({ culturas, onEdit, onDelete }) {
  return (
    <section id="culturas" className="list-card">
      <div className="section-title">
        <span>Consulta e listagem</span>
        <h3>Culturas cadastradas</h3>
      </div>

      {culturas.length === 0 ? (
        <div className="empty-state">
          Nenhuma cultura cadastrada. Use o formulario para incluir o primeiro registro.
        </div>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Cultura</th>
                <th>Talhao</th>
                <th>Area</th>
                <th>Plantio</th>
                <th>Colheita</th>
                <th>Status</th>
                <th>Responsavel</th>
                <th>Acoes</th>
              </tr>
            </thead>
            <tbody>
              {culturas.map((cultura) => (
                <tr key={cultura.id}>
                  <td>{cultura.nome}</td>
                  <td>{cultura.talhao}</td>
                  <td>{cultura.area} ha</td>
                  <td>{cultura.dataPlantio}</td>
                  <td>{cultura.previsaoColheita}</td>
                  <td><span className="status-pill">{cultura.status}</span></td>
                  <td>{cultura.responsavel}</td>
                  <td>
                    <div className="row-actions">
                      <button type="button" onClick={() => onEdit(cultura)} title="Editar cultura">
                        <Edit size={16} />
                      </button>
                      <button type="button" onClick={() => onDelete(cultura.id)} title="Excluir cultura">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
