import React from 'react'
import "./dataTable.css"
import { backgroundColor } from './Table';
import { EditIcon, DeleteIcon } from './Icons';
import { exportTableToExcel } from './download/Download';

/* ========================================== Componente Tabla ========================================== */


/* ========================================== Componente Tabla ========================================== */
function DataTable(props) {
  {  Object.keys(props.data).map((i) => (
      i % 2 === 0 ? backgroundColor.push('#fff') : backgroundColor.push('#ebcdff')
     ))
  }

  return (
    <section className='container-table'>
      <section className='dataTable'>
{/* ============================================ Titulo Tabla ============================================  */}
        <h2>{props.title}</h2>
{/* =================================== Botones Add, Download, Filtro =================================== */}
        <section className='botones'>
          <div className='btn'>
            <button><span>Add</span><i className="bi bi-person-plus-fill"></i></button>
          </div>
          <div className='btn'>
            <button onClick={() => exportTableToExcel('download')}><span>Download</span><i className="bi bi-cloud-arrow-down-fill"></i></button>
          </div>
          <div className='btn'>
            <button><span>Filter</span><i className="bi bi-filter"></i></button>
          </div>
          <div className='search'>
            <input placeholder='Search ...' />
          </div>
        </section>
{/* =============================================== Table =============================================== */ }
{/* ======================================== LLenado de la Tabla ======================================== */ }
        <table id='download'>
          <thead>
            <tr>
              <th>X</th>
              {Object.keys(props.tableHeader).map((index) => (
                <th scope="col" key={props.tableHeader[index]}>{props.tableHeader[index]}</th>
              ))}
              <th>Y</th>
              <th>Z</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(props.data).map((key) => (
              <tr key={key} >
                <td className='actions' style={{ background: backgroundColor[key] }}><input type='checkbox'></input></td>
                {Object.keys(props.tableHeader).map((index) => (

                  <td data-label={props.tableHeader[index]} key={index} style={{ background: backgroundColor[key] }}  >
                    {props.data[key][props.tableHeader[index]]}
                  </td>
                ))}
                <td className="actions" style={{ background: backgroundColor[key] }}><button className='delete'><EditIcon /></button></td>
                <td className="actions" style={{ background: backgroundColor[key] }}><button className='edit'  ><DeleteIcon /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  )
}

export default DataTable