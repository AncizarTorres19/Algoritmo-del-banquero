import Grid from '@mui/material/Grid';
import BasicCard from "./components/Card/BasicCard";
import BasicTable from "./components/Table/BasicTable";

function App() {
  return (
    <Grid container spacing={2}  justifyContent="center">
      <Grid item xs={5}>
        <BasicCard title='Solicitados'>
          <BasicTable />
        </BasicCard>
      </Grid>
      <Grid item xs={5}>
        <BasicCard title='Asignados'>
          <BasicTable />
        </BasicCard>
      </Grid>
      <Grid item xs={4}>
        xs=4
      </Grid>
      <Grid item xs={8}>
        xs=8
      </Grid>
    </Grid>
  );
}

export default App;
