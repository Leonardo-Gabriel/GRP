import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const STORAGE_KEY = 'grp-culturas-v2';

const culturasIniciais = [
  {
    id: crypto.randomUUID(),
    nome: 'Soja Safra 2026',
    tipo: 'Soja',
    propriedade: 'Fazenda Primavera',
    area: 48,
    dataPlantio: '2026-05-12',
    previsaoColheita: '2026-09-18',
    status: 'Em desenvolvimento',
    responsavel: 'Equipe Técnica',
    observacoes: 'Acompanhar previsão de chuva e necessidade de defensivos.'
  },
  {
    id: crypto.randomUUID(),
    nome: 'Milho Segunda Safra',
    tipo: 'Milho',
    propriedade: 'Sítio Boa Vista',
    area: 22,
    dataPlantio: '2026-04-03',
    previsaoColheita: '2026-08-01',
    status: 'Plantada',
    responsavel: 'Lucas Mendonça',
    observacoes: 'Verificar estoque de fertilizante antes da próxima aplicação.'
  }
];

const formularioVazio = {
  nome: '',
  tipo: '',
  propriedade: '',
  area: '',
  dataPlantio: '',
  previsaoColheita: '',
  status: 'Planejada',
  responsavel: '',
  observacoes: ''
};

function formatarData(data) {
  if (!data) return '-';
  const [ano, mes, dia] = data.split('-');
  return `${dia}/${mes}/${ano}`;
}

function calcularDiasAteColheita(data) {
  if (!data) return null;
  const hoje = new Date();
  const colheita = new Date(`${data}T12:00:00`);
  const diferenca = colheita.getTime() - hoje.getTime();
  return Math.ceil(diferenca / (1000 * 60 * 60 * 24));
}

function App() {
  const [culturas, setCulturas] = useState(() => {
    const salvas = localStorage.getItem(STORAGE_KEY);
    return salvas ? JSON.parse(salvas) : culturasIniciais;
  });
  const [formulario, setFormulario] = useState(formularioVazio);
  const [editandoId, setEditandoId] = useState(null);
  const [busca, setBusca] = useState('');
  const [filtroStatus, setFiltroStatus] = useState('Todos');
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(culturas));
  }, [culturas]);

  const culturasFiltradas = useMemo(() => {
    return culturas.filter((cultura) => {
      const termoBusca = busca.toLowerCase();
      const combinaBusca =
        cultura.nome.toLowerCase().includes(termoBusca) ||
        cultura.tipo.toLowerCase().includes(termoBusca) ||
        cultura.propriedade.toLowerCase().includes(termoBusca);
      const combinaStatus = filtroStatus === 'Todos' || cultura.status === filtroStatus;
      return combinaBusca && combinaStatus;
    });
  }, [culturas, busca, filtroStatus]);

  const indicadores = useMemo(() => {
    const areaTotal = culturas.reduce((total, cultura) => total + Number(cultura.area || 0), 0);
    const emAndamento = culturas.filter((cultura) => cultura.status !== 'Colhida').length;
    const colhidas = culturas.filter((cultura) => cultura.status === 'Colhida').length;
    return { areaTotal, emAndamento, colhidas, total: culturas.length };
  }, [culturas]);

  function atualizarCampo(evento) {
    const { name, value } = evento.target;
    setFormulario((atual) => ({ ...atual, [name]: value }));
  }

  function validarFormulario() {
    if (!formulario.nome.trim()) return 'Informe o nome da cultura.';
    if (!formulario.tipo.trim()) return 'Informe o tipo da cultura.';
    if (!formulario.propriedade.trim()) return 'Informe a propriedade.';
    if (!formulario.area || Number(formulario.area) <= 0) return 'Informe uma área válida.';
    if (!formulario.dataPlantio) return 'Informe a data de plantio.';
    return '';
  }

  function salvarCultura(evento) {
    evento.preventDefault();
    const erro = validarFormulario();
    if (erro) {
      setMensagem(erro);
      return;
    }

    if (editandoId) {
      setCulturas((lista) =>
        lista.map((cultura) =>
          cultura.id === editandoId
            ? { ...formulario, id: editandoId, area: Number(formulario.area) }
            : cultura
        )
      );
      setMensagem('Cultura atualizada com sucesso.');
    } else {
      setCulturas((lista) => [
        { ...formulario, id: crypto.randomUUID(), area: Number(formulario.area) },
        ...lista
      ]);
      setMensagem('Cultura cadastrada com sucesso.');
    }

    setFormulario(formularioVazio);
    setEditandoId(null);
  }

  function editarCultura(cultura) {
    setFormulario(cultura);
    setEditandoId(cultura.id);
    setMensagem('Modo de edição ativado. Altere os dados e salve novamente.');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function excluirCultura(id) {
    const confirmou = confirm('Deseja realmente excluir esta cultura?');
    if (!confirmou) return;
    setCulturas((lista) => lista.filter((cultura) => cultura.id !== id));
    if (editandoId === id) {
      setFormulario(formularioVazio);
      setEditandoId(null);
    }
    setMensagem('Cultura removida da listagem.');
  }

  function cancelarEdicao() {
    setFormulario(formularioVazio);
    setEditandoId(null);
    setMensagem('Edição cancelada.');
  }

  function limparDados() {
    const confirmou = confirm('Deseja restaurar os dados de exemplo?');
    if (!confirmou) return;
    setCulturas(culturasIniciais);
    setBusca('');
    setFiltroStatus('Todos');
    setMensagem('Dados de exemplo restaurados.');
  }

  return (
    <main className="app">
      <section className="hero">
        <div>
          <span className="tag">GRP - Gestão Rural Pro</span>
          <h1>Controle de culturas agrícolas</h1>
          <p>
            Fluxo funcional desenvolvido para a Etapa 2: cadastro, consulta, edição,
            exclusão e acompanhamento das culturas da propriedade.
          </p>
          <div className="hero-actions">
            <a href="#cadastro" className="btn primary">Cadastrar cultura</a>
            <a href="#listagem" className="btn secondary">Ver listagem</a>
          </div>
        </div>
        <div className="weather-card">
          <span>Resumo operacional</span>
          <strong>{indicadores.total} culturas</strong>
          <p>{indicadores.areaTotal} hectares monitorados</p>
        </div>
      </section>

      <section className="indicadores">
        <article>
          <span>Total de culturas</span>
          <strong>{indicadores.total}</strong>
        </article>
        <article>
          <span>Área plantada</span>
          <strong>{indicadores.areaTotal} ha</strong>
        </article>
        <article>
          <span>Em acompanhamento</span>
          <strong>{indicadores.emAndamento}</strong>
        </article>
        <article>
          <span>Colhidas</span>
          <strong>{indicadores.colhidas}</strong>
        </article>
      </section>

      <section className="grid-principal">
        <form id="cadastro" className="card formulario" onSubmit={salvarCultura}>
          <div className="section-title">
            <span>{editandoId ? 'Editar registro' : 'Novo cadastro'}</span>
            <h2>{editandoId ? 'Atualizar cultura' : 'Cadastrar cultura agrícola'}</h2>
          </div>

          {mensagem && <p className="alerta">{mensagem}</p>}

          <label>
            Nome da cultura
            <input name="nome" value={formulario.nome} onChange={atualizarCampo} placeholder="Ex.: Soja Safra 2026" />
          </label>

          <div className="duas-colunas">
            <label>
              Tipo
              <input name="tipo" value={formulario.tipo} onChange={atualizarCampo} placeholder="Soja, milho, trigo..." />
            </label>
            <label>
              Área em hectares
              <input name="area" type="number" min="0" step="0.1" value={formulario.area} onChange={atualizarCampo} placeholder="Ex.: 35" />
            </label>
          </div>

          <label>
            Propriedade
            <input name="propriedade" value={formulario.propriedade} onChange={atualizarCampo} placeholder="Ex.: Fazenda Primavera" />
          </label>

          <div className="duas-colunas">
            <label>
              Data de plantio
              <input name="dataPlantio" type="date" value={formulario.dataPlantio} onChange={atualizarCampo} />
            </label>
            <label>
              Previsão de colheita
              <input name="previsaoColheita" type="date" value={formulario.previsaoColheita} onChange={atualizarCampo} />
            </label>
          </div>

          <div className="duas-colunas">
            <label>
              Status
              <select name="status" value={formulario.status} onChange={atualizarCampo}>
                <option>Planejada</option>
                <option>Plantada</option>
                <option>Em desenvolvimento</option>
                <option>Em atenção</option>
                <option>Colhida</option>
              </select>
            </label>
            <label>
              Responsável
              <input name="responsavel" value={formulario.responsavel} onChange={atualizarCampo} placeholder="Nome do responsável" />
            </label>
          </div>

          <label>
            Observações técnicas
            <textarea name="observacoes" value={formulario.observacoes} onChange={atualizarCampo} placeholder="Registre alertas, insumos ou acompanhamento técnico." />
          </label>

          <div className="acoes-form">
            <button className="btn primary" type="submit">
              {editandoId ? 'Salvar alterações' : 'Cadastrar cultura'}
            </button>
            {editandoId && <button className="btn secondary" type="button" onClick={cancelarEdicao}>Cancelar</button>}
          </div>
        </form>

        <aside className="card checklist">
          <div className="section-title">
            <span>Fluxo implementado</span>
            <h2>O que demonstrar no vídeo</h2>
          </div>
          <ol>
            <li>Apresentar o dashboard e indicadores.</li>
            <li>Cadastrar uma nova cultura agrícola.</li>
            <li>Consultar a cultura na listagem.</li>
            <li>Editar informações do registro.</li>
            <li>Excluir uma cultura com confirmação.</li>
          </ol>
          <button className="btn secondary full" type="button" onClick={limparDados}>Restaurar exemplos</button>
        </aside>
      </section>

      <section id="listagem" className="card listagem">
        <div className="topo-listagem">
          <div className="section-title">
            <span>Consulta</span>
            <h2>Culturas cadastradas</h2>
          </div>
          <div className="filtros">
            <input value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="Buscar por cultura, tipo ou propriedade" />
            <select value={filtroStatus} onChange={(e) => setFiltroStatus(e.target.value)}>
              <option>Todos</option>
              <option>Planejada</option>
              <option>Plantada</option>
              <option>Em desenvolvimento</option>
              <option>Em atenção</option>
              <option>Colhida</option>
            </select>
          </div>
        </div>

        <div className="tabela-wrapper">
          <table>
            <thead>
              <tr>
                <th>Cultura</th>
                <th>Propriedade</th>
                <th>Área</th>
                <th>Plantio</th>
                <th>Colheita</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {culturasFiltradas.map((cultura) => {
                const dias = calcularDiasAteColheita(cultura.previsaoColheita);
                return (
                  <tr key={cultura.id}>
                    <td>
                      <strong>{cultura.nome}</strong>
                      <small>{cultura.tipo} • {cultura.responsavel || 'Sem responsável'}</small>
                    </td>
                    <td>{cultura.propriedade}</td>
                    <td>{cultura.area} ha</td>
                    <td>{formatarData(cultura.dataPlantio)}</td>
                    <td>
                      {formatarData(cultura.previsaoColheita)}
                      {dias !== null && <small>{dias >= 0 ? `${dias} dias restantes` : 'Prazo vencido'}</small>}
                    </td>
                    <td><span className={`status ${cultura.status.replaceAll(' ', '-').toLowerCase()}`}>{cultura.status}</span></td>
                    <td>
                      <div className="acoes-tabela">
                        <button type="button" onClick={() => editarCultura(cultura)}>Editar</button>
                        <button type="button" className="danger" onClick={() => excluirCultura(cultura.id)}>Excluir</button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {culturasFiltradas.length === 0 && (
          <p className="sem-dados">Nenhuma cultura encontrada para os filtros selecionados.</p>
        )}
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
