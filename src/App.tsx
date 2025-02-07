import { useCallback, useEffect, useState } from 'react'
import './App.css'
import cursos, { ICurso, IDisciplina, IModalidade } from './services/cursosApi';

function App() {
  const [curso, setCurso] = useState<ICurso | null>();
  const [cursoComparacao, setCursoComparacao] = useState<ICurso | null>();
  const [disciplinasComuns, setDisciplinasComuns] = useState<IDisciplina[]>([]);
  const [cursoDisciplinasExclusivas, setCursoDisciplinasExclusivas] = useState<IDisciplina[]>([]);
  const [comparacaoDisciplinasExclusivas, setComparacaoDisciplinasExclusivas] = useState<IDisciplina[]>([]);

  const handleComparar = useCallback(() => {
    const comuns:IDisciplina[] = [];
    const exclusivasA:IDisciplina[] = [];
    const exclusivasB:IDisciplina[] = [];

    curso?.disciplinas.forEach(disciplinaA => {
      if (cursoComparacao?.disciplinas.some(disciplinaB => disciplinaB.nome.localeCompare(disciplinaA.nome) === 0)){
        comuns.push(disciplinaA);
      }
      else {
        exclusivasA.push(disciplinaA);
      }
    });
    
    cursoComparacao?.disciplinas.forEach(disciplinaB => {
      if (!comuns.some((comum) => comum.nome.localeCompare(disciplinaB.nome) === 0)) {
        exclusivasB.push(disciplinaB);
      }
    })
    
    comuns.sort((a, b) => a.nome.localeCompare(b.nome));
    exclusivasA.sort((a, b) => a.nome.localeCompare(b.nome));
    exclusivasB.sort((a, b) => a.nome.localeCompare(b.nome));

    setDisciplinasComuns(comuns);
    setCursoDisciplinasExclusivas(exclusivasA);
    setComparacaoDisciplinasExclusivas(exclusivasB);   
  }, [curso?.disciplinas, cursoComparacao?.disciplinas])

  useEffect(() => {
    if (cursoComparacao) {
      handleComparar();
    }
  },[cursoComparacao, handleComparar])

  return (
    <div className="container">
      <div>
        <label>Selecione o curso: </label>
        <select 
          value={curso ? curso.id : ""}
          onChange={(e) => {
            const selected = cursos.find((c: ICurso) => c.id === e.target.value);
            setCurso(selected || null);
            setCursoComparacao(null);
          }}
        >
          <option value="">Selecione um curso</option>
          {cursos.map((c: ICurso) => 
            <option key={c.id} value={c.id}>{c.nome} - {c.tipo}</option>
          )}
        </select>
      </div>

      {!!curso && (
      <div>
        <div>
          <p>{curso.nome} - {curso.tipo}</p>
          <p>{curso.semestres} semestres - {curso.cargaHoraria}h</p>
        </div>
        <h3>Modalidades</h3>
        <ul>
          {curso.modalidades.map((m: IModalidade) => 
            <li key={m.descricao}>{m.descricao} - R$ {m.preco.toFixed(2)}</li>  
          )}        
        </ul>
        <h3>Disciplinas</h3>
        <ul>
          {curso.disciplinas.map((c: IDisciplina) => 
            <li key={c.nome}>{c.nome} - {c.duracao}h</li>  
          )}        
        </ul>

        <div>
        <label>Selecione o curso para comparar: </label>
        <select 
          value={cursoComparacao ? cursoComparacao.id : ""}
          onChange={(e) => {
            const selected = cursos.find((c: ICurso) => c.id === e.target.value);
            setCursoComparacao(selected || null);
            handleComparar();
          }}
        >
          <option value="">Selecione um curso para comprar</option>
          {cursos
            .filter((c: ICurso) => c.id !== curso.id)
            .map((c: ICurso) => 
              <option key={c.id} value={c.id}>{c.nome} - {c.tipo}</option>
          )}
        </select>
        {/* <button onClick={handleComparar}>Comparar</button> */}
        {!!cursoComparacao && (
        <div>
          <table>
            <thead>
              <tr>    
                <th></th>            
                <th>{curso.nome} - {curso.tipo}</th>
                <th>{cursoComparacao?.nome} - {cursoComparacao?.tipo}</th>
              </tr>
              <tr>
                <td>Disciplinas em comum</td>
                <td>
                  <ul>
                    {disciplinasComuns.map((d: IDisciplina) => 
                      <li>{d.nome} - {d.duracao}h</li>
                    )}
                  </ul>
                </td>
                <td>
                  <ul>
                    {disciplinasComuns.map((d: IDisciplina) => 
                      <li>{d.nome} - {d.duracao}h</li>
                    )}
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Disciplinas exclusivas</td>
                <td>
                  <ul>
                    {cursoDisciplinasExclusivas.map((d: IDisciplina) => 
                      <li>{d.nome} - {d.duracao}h</li>
                    )}
                  </ul>
                </td>
                <td>
                  <ul>
                    {comparacaoDisciplinasExclusivas.map((d: IDisciplina) => 
                      <li>{d.nome} - {d.duracao}h</li>
                    )}
                  </ul>
                </td>
              </tr>
            </thead>
          </table>
        </div>
        )}
      </div>
      </div>
      )}


    </div>
  )
}

export default App
