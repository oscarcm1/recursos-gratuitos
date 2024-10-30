import React, { useState } from 'react'
import "./menu.css"
/* ============================================ Menu Sidebar ============================================ */
function Menu() {
    function activeMenu() {
            document.querySelector('.menu-portafolio').classList.toggle("active");
            document.querySelector('.dashboard').classList.toggle('active');
            document.querySelector('.list').classList.toggle('active');
    }
    return (
        <section className='menu-portafolio active'>
            <div className="full"><button onClick={activeMenu}><i className="bi bi-arrows-angle-expand"></i></button></div>
            <section>
                <ul className='list'>
                    <li className='menu-item '> <button className='btn1'>  <span> Usuarios  </span>   <i className="bi bi-key-fill">             </i>    </button></li>
                    <li className='menu-item '> <button className='btn1'>  <span> menus     </span>   <i className="bi bi-list">                 </i>    </button></li>
                    <li className='menu-item '> <button className='btn1'>  <span> paginas   </span>   <i className="bi bi-browser-edge">         </i>    </button></li>
                    <li className='menu-item '> <button className='btn1'>  <span> tablas    </span>   <i className="bi bi-file-spreadsheet">     </i>    </button></li>
                    <li className='menu-item '> <button className='btn1'>  <span> ultimos   </span>   <i className="bi bi-chat-left-heart-fill"> </i>    </button></li>
                </ul>
            </section>
        </section>
    )
}
export default Menu