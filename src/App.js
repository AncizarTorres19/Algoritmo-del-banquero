import Grid from '@mui/material/Grid';
import BasicCard from "./components/Card/BasicCard";
import { columnsA, columnsC, columnsCA, columnsDisponibles, columnsMax, rowsA, rowsC, rowsCA, rowsDisponibles, rowsMax } from './components/Data/DataTable';
import BasicTable from "./components/Table/BasicTable";

function App() {
  return (
    <>
      <Grid container
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
        sx={{ maxWidth: '100%', p: 1 }}
      >
        <Grid item xs={5}>
          <BasicCard title='Solicitados'>
            <BasicTable
              columns={columnsC}
              rows={rowsC}
            />
          </BasicCard>
        </Grid>
        <Grid item xs={5}>
          <BasicCard title='Asignados'>
            <BasicTable
              columns={columnsA}
              rows={rowsA}
            />
          </BasicCard>
        </Grid>
      </Grid>
      <Grid container
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
        sx={{ maxWidth: '100%', p: 1 }}
      >
        <Grid item xs={3}>
          <BasicCard title='Disponibles'>
            <BasicTable
              columns={columnsDisponibles}
              rows={rowsDisponibles}
            />
          </BasicCard>
        </Grid>
        <Grid item xs={5}>
          <BasicCard title='Respuesta'>
            <BasicTable
              columns={columnsCA}
              rows={rowsCA}
            />
          </BasicCard>
        </Grid>
        <Grid item xs={3}>
          <BasicCard title='Máximo'>
            <BasicTable
              columns={columnsMax}
              rows={rowsMax}
            />
          </BasicCard>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
