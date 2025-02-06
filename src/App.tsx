import { useState } from 'react'
import './App.css'
import cursos, { ICurso } from './services/cursosApi';

function App() {
  const [curso, setCurso] = useState<ICurso | null>();
  //const [cursoComparacao, setCursoComparacao] = useState();

  return (
    <div className="container">
      <div>
        <label>Selecione o curso:</label>
        <select 
          value={curso ? curso.id : ""}
          onChange={(e) => {
            const selected = cursos.find((c: ICurso) => c.id === e.target.value);
            setCurso(selected || null);
          }}
        >
          <option value="">Selecione um curso</option>
          {cursos.map((c: ICurso) => 
            <option key={c.id} value={c.id}>{c.nome}</option>
          )}
        </select>
      </div>
    </div>
  )
}

export default App
