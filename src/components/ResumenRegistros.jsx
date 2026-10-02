import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function ResumenRegistros({ registros }) {
  const edades = registros
    .map((registro) => Number(registro.edad))
    .filter((edad) => !Number.isNaN(edad));

  const promedio = edades.length
    ? Math.round(edades.reduce((suma, edad) => suma + edad, 0) / edades.length)
    : 0;

  const datos = [
    { etiqueta: "Total", valor: registros.length },
    { etiqueta: "Promedio de edad", valor: promedio },
    { etiqueta: "Edad maxima", valor: edades.length ? Math.max(...edades) : 0 },
    { etiqueta: "Edad minima", valor: edades.length ? Math.min(...edades) : 0 },
  ];

  const items = [];
  datos.forEach((dato) => {
    items.push(
      <Box
        key={dato.etiqueta}
        sx={{ flex: 1, minWidth: 120, textAlign: "center" }}
      >
        <Typography variant="h5">{dato.valor}</Typography>
        <Typography variant="body2" color="text.secondary">
          {dato.etiqueta}
        </Typography>
      </Box>,
    );
  });

  return (
    <Paper sx={{ p: 3, mb: 3 }} elevation={2}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Resumen
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>{items}</Box>
    </Paper>
  );
}

export default ResumenRegistros;
