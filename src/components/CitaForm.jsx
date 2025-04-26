import React, { useState } from 'react';

const CitaForm = ({ agregarCita }) => {
  const [paciente, setPaciente] = useState('');
  const [fecha, setFecha] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [doctor, setDoctor] = useState('');
  const [motivo, setMotivo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaCita = {
      paciente,
      fecha,
      especialidad,
      doctor,
      motivo,
    };

    agregarCita(nuevaCita);
    // Limpiar campos después de agregar la cita
    setPaciente('');
    setFecha('');
    setEspecialidad('');
    setDoctor('');
    setMotivo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Paciente</label>
        <input
          type="text"
          value={paciente}
          onChange={(e) => setPaciente(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Fecha</label>
        <input
          type="datetime-local"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Especialidad</label>
        <input
          type="text"
          value={especialidad}
          onChange={(e) => setEspecialidad(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Doctor</label>
        <input
          type="text"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Motivo</label>
        <textarea
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">
        Agregar Cita
      </button>
    </form>
  );
};

export default CitaForm;
