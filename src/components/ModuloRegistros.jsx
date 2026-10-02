import { useState } from 'react';
import Container from '@mui/material/Container';
import Header from './Header';
import Footer from './Footer';
import FormularioRegistro from './FormularioRegistro';
import BuscadorRegistros from './BuscadorRegistros';
import ResumenRegistros from './ResumenRegistros';
import TablaRegistros from './TablaRegistros';


function ModuloRegistros() {
  const [registros, setRegistros] = useState([]);
  const [textoBusqueda, setTextoBusqueda] = useState('');

  const agregarRegistro = (nuevoRegistro) => {
    setRegistros((registrosPrevios) => [...registrosPrevios, nuevoRegistro]);
  };

  const eliminarRegistro = (idAEliminar) => {
    setRegistros((registrosPrevios) =>
      registrosPrevios.filter((registro) => registro.id !== idAEliminar)
    );
  };

  const registrosFiltrados = registros.filter((registro) => {
    const texto = textoBusqueda.trim().toLowerCase();
    if (!texto) return true;
    return (
      registro.nombre.toLowerCase().includes(texto) ||
      registro.email.toLowerCase().includes(texto)
    );
  });

  return (
    <>
      <Header titulo="Modulo de invalidos" totalRegistros={registros.length} />
      <Container maxWidth="md">
        <FormularioRegistro onAgregar={agregarRegistro} />
        <ResumenRegistros registros={registros} />
        <BuscadorRegistros
          textoBusqueda={textoBusqueda}
          onBuscar={setTextoBusqueda}
          resultados={registrosFiltrados.length}
        />
        <TablaRegistros registros={registrosFiltrados} onEliminar={eliminarRegistro} />
      </Container>
      <Footer />
    </>
  );
}

export default ModuloRegistros;
