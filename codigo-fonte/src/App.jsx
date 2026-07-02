import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Dashboard from './components/Dashboard.jsx';
import CultureForm, { emptyForm } from './components/CultureForm.jsx';
import CultureList from './components/CultureList.jsx';
import About from './components/About.jsx';
import { initialCultures } from './data/initialCultures.js';
import { loadCultures, saveCultures } from './utils/storage.js';

export default function App() {
  const [culturas, setCulturas] = useState(() => loadCultures(initialCultures));
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    saveCultures(culturas);
  }, [culturas]);

  function resetForm() {
    setForm(emptyForm);
    setEditingId(null);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (Number(form.area) <= 0) {
      setMessage('A area plantada deve ser maior que zero.');
      return;
    }

    if (editingId) {
      setCulturas((current) =>
        current.map((cultura) =>
          cultura.id === editingId ? { ...form, id: editingId, area: Number(form.area) } : cultura
        )
      );
      setMessage('Cultura atualizada com sucesso.');
    } else {
      const novaCultura = {
        ...form,
        id: crypto.randomUUID(),
        area: Number(form.area)
      };
      setCulturas((current) => [novaCultura, ...current]);
      setMessage('Cultura cadastrada com sucesso.');
    }

    resetForm();
  }

  function handleEdit(cultura) {
    setEditingId(cultura.id);
    setForm({ ...cultura, area: String(cultura.area) });
    setMessage('Modo de edicao ativado. Altere os dados e salve.');
    window.scrollTo({ top: 360, behavior: 'smooth' });
  }

  function handleDelete(id) {
    const confirmed = window.confirm('Deseja realmente excluir esta cultura?');
    if (!confirmed) return;

    setCulturas((current) => current.filter((cultura) => cultura.id !== id));
    setMessage('Cultura excluida com sucesso.');
    if (editingId === id) resetForm();
  }

  return (
    <>
      <Header />
      <main className="container">
        <Dashboard culturas={culturas} />

        {message && <div className="message-box">{message}</div>}

        <CultureForm
          form={form}
          setForm={setForm}
          onSubmit={handleSubmit}
          editingId={editingId}
          onCancel={resetForm}
        />

        <CultureList culturas={culturas} onEdit={handleEdit} onDelete={handleDelete} />
        <About />
      </main>
    </>
  );
}
