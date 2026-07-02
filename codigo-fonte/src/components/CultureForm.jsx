const emptyForm = {
  nome: '',
  talhao: '',
  area: '',
  dataPlantio: '',
  previsaoColheita: '',
  status: 'Planejado',
  responsavel: ''
};

export default function CultureForm({ form, setForm, onSubmit, editingId, onCancel }) {
  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  return (
    <form className="form-card" onSubmit={onSubmit}>
      <div className="section-title">
        <span>{editingId ? 'Editar cultura' : 'Cadastrar cultura'}</span>
        <h3>{editingId ? 'Atualize os dados da cultura' : 'Inclua uma nova cultura agricola'}</h3>
      </div>

      <div className="form-grid">
        <label>
          Nome da cultura
          <input name="nome" value={form.nome} onChange={handleChange} placeholder="Ex: Soja" required />
        </label>

        <label>
          Talhao
          <input name="talhao" value={form.talhao} onChange={handleChange} placeholder="Ex: Talhao Norte" required />
        </label>

        <label>
          Area plantada (ha)
          <input name="area" type="number" min="1" value={form.area} onChange={handleChange} placeholder="Ex: 20" required />
        </label>

        <label>
          Data de plantio
          <input name="dataPlantio" type="date" value={form.dataPlantio} onChange={handleChange} required />
        </label>

        <label>
          Previsao de colheita
          <input name="previsaoColheita" type="date" value={form.previsaoColheita} onChange={handleChange} required />
        </label>

        <label>
          Status
          <select name="status" value={form.status} onChange={handleChange}>
            <option>Planejado</option>
            <option>Plantio concluido</option>
            <option>Em desenvolvimento</option>
            <option>Colheita prevista</option>
            <option>Finalizado</option>
          </select>
        </label>

        <label className="full">
          Responsavel
          <input name="responsavel" value={form.responsavel} onChange={handleChange} placeholder="Ex: Felipe Alexandre Jagas" required />
        </label>
      </div>

      <div className="form-actions">
        <button className="primary-button" type="submit">
          {editingId ? 'Salvar alteracoes' : 'Cadastrar cultura'}
        </button>
        {editingId && (
          <button className="secondary-button" type="button" onClick={onCancel}>
            Cancelar edicao
          </button>
        )}
      </div>
    </form>
  );
}

export { emptyForm };
