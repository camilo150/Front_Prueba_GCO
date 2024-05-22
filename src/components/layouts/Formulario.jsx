import React, { useState } from 'react';

function Formulario() {
    const [respuestas, setRespuestas] = useState({
        personaLegal: "",
        registro: "",
        numeroRegistro: "",
        nombreCompania: "",
        representanteLegal: "",
        numeroContacto: "",
        gmailContacto: "",
        ciudad: "",
        pais: "",
        departamento: "",
        direccion: "",
        archivo: ""
    });
    const validarInput = (texto) => {
        const regex = /^[^\s\d]*$/;
        return regex.test(texto);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (['nombreCompania', 'representanteLegal', 'ciudad', 'pais', 'departamento'].includes(name)) {
            if (validarInput(value)) {
                setRespuestas({
                    ...respuestas,
                    [name]: value
                });
            }
        } else {
            setRespuestas({
                ...respuestas,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const camposVacios = Object.values(respuestas).some(value => value.trim() === '');

        if (camposVacios) {
            alert('Por favor completa todos los campos antes de enviar el formulario.');
            return;
        }
        alert("Los datos han sido guardados correctamente")
        console.log(respuestas);

    };

    return (
        <main id='formulario-main'>
            <h1 id='formulario-texto'>Llena este formulario para poder registrarte</h1>
            <form onSubmit={handleSubmit} className='formulario-contenedor'>
                <div className='formulario-div'>
                    <label className='formulario-label' htmlFor="personaLegal">Persona Natural o Juridica?:</label>
                    <select id="personaLegal" name="personaLegal" onChange={handleChange} value={respuestas.personaLegal} className="formulario-input">
                        <option>seleccionar</option>
                        <option value="natural">persona Natural</option>
                        <option value="juridica">Persona Juridica</option>
                    </select>
                </div>
                <div className='formulario-div'>
                    <label className='formulario-label' htmlFor="registro">INT o RUT:</label>
                    <select id="registro" name="registro" onChange={handleChange} value={respuestas.registro} className="formulario-input">
                        <option>selecionar</option>
                        <option value="nit">NIT</option>
                        <option value="rut">RUT</option>
                    </select>
                </div>
                <div className='formulario-div'>
                    <label htmlFor="" className='formulario-label'>Ingrese el numero del registro:</label>
                    <input type="number" name='numeroRegistro' onChange={handleChange} value={respuestas.numeroRegistro} className="formulario-input" />
                </div>
                <div className='formulario-div'>
                    <label className='formulario-label' htmlFor="nombreCompania">Nombre de la razon social:</label>
                    <input type="text" className="formulario-input" name='nombreCompania' onChange={handleChange} value={respuestas.nombreCompania} />
                </div>
                <div className='formulario-div'>
                    <label className='formulario-label' htmlFor="representanteLegal">Nombre del representante legal:</label>
                    <input type="text" className="formulario-input" onChange={handleChange} name='representanteLegal' value={respuestas.representanteLegal} />
                </div>
                <div className='formulario-div'>
                    <label className='formulario-label' htmlFor="numeroContacto">Numero de contacto:</label>
                    <input type="number" className='formulario-input' value={respuestas.numeroContacto} onChange={handleChange} maxLength={10} name='numeroContacto'
                        onInput={(e) => {
                            if (e.target.value.length > 10) {
                                e.target.value = e.target.value.slice(0, 10);
                            }
                            if (isNaN(e.target.value)) {
                                e.target.value = '';
                            }}}/>
                </div>
                <div className='formulario-div'>
                    <label className='formulario-label' htmlFor="gmailContacto">correo de contacto:</label>
                    <input className='formulario-input' type="email" name='gmailContacto' onChange={handleChange} value={respuestas.gmailContacto} />
                </div>
                <div className='formulario-div'>
                    <label className='formulario-label' htmlFor="ciudad">Ciudad:</label>
                    <input type="text" className="formulario-input" value={respuestas.ciudad} name='ciudad' onChange={handleChange} />
                </div>
                <div className='formulario-div'>
                    <label className='formulario-label' htmlFor="pais">País:</label>
                    <input type="text" className="formulario-input" value={respuestas.pais} name='pais' onChange={handleChange} />
                </div>
                <div className='formulario-div'>
                    <label className='formulario-label' htmlFor="departamento">Departamento:</label>
                    <input type="text" className="formulario-input" value={respuestas.departamento} name='departamento' onChange={handleChange} />
                </div>
                <div className='formulario-div'>
                    <label className='formulario-label' htmlFor="direccion">Direccion:</label>
                    <input className='formulario-input' type="text" value={respuestas.direccion} name='direccion' onChange={handleChange} />
                </div>
                <div className='formulario-div'>
                    <label htmlFor="archivo" className='formulario-label'>Cargar CV</label>
                    <input type="file" onChange={handleChange} name='archivo' className='formulario-input' />
                </div>
                <button id='formulario-boton' type="submit">Enviar</button>
            </form>
        </main>
    );
}
export default Formulario;
