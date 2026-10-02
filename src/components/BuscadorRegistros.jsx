import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

function BuscadorRegistros({ textoBusqueda, onBuscar, resultados }) {
  return (
    <Paper sx={{ p: 3, mb: 3 }} elevation={2}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Buscar Invalido
      </Typography>

      <Box
        sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center" }}
      >
        <TextField
          label="Buscar por nombre o email"
          value={textoBusqueda}
          onChange={(e) => onBuscar(e.target.value)}
          size="small"
          sx={{ flexGrow: 1, minWidth: 220 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
        <Typography variant="body2" color="text.secondary">
          {`${resultados} resultado(s)`}
        </Typography>
      </Box>
    </Paper>
  );
}

export default BuscadorRegistros;
