import { useState } from 'react';
//CSS
import { Grid, Button } from '@mui/material';
//Components
import { dataMap as arrayTotal } from './components/Data/DataTable';
import BasicCard from "./components/Card/BasicCard";
import BasicTable from "./components/Table/BasicTable";

function App() {
  const [data, setData] = useState(arrayTotal);

  const proceso = () => {
    let contador = 0
    let arrayFinal = []
    let disponibles = data[2].rows[0]
    const solicitados = data[0].rows
    let asignados = data[1].rows
    const respuesta = data[3].rows
    const maximo = data[4].rows[0]
    // for (let index = 0; index < asignados.length; index++) {
    for (let index = 0; index < 4; index++) {
      console.log('A');
      const solicitadosObj = solicitados[index]
      const asignadosObj = asignados[index]
      const respuestaObj = respuesta[index]
      let objFinal = new Object()
      for (let i = 0; i < 4; i++) {
        if (i === 0) {
          objFinal['R' + i] = solicitadosObj['R' + i]
        } else {
          let suma = asignadosObj['R' + i] + disponibles['R' + i]
          let result = suma >= solicitadosObj['R' + i]
          let resultMax = maximo['R' + i] === suma
          console.log('A', resultMax);
          console.log('B', maximo['R' + i]);
          console.log('C', suma);
          if (result) {
            objFinal['R' + i] = suma
            if (i === 3) {
              disponibles = objFinal
              arrayFinal.push({
                ...respuestaObj,
                ...objFinal
              })
              // contador = resultMax ? 5 : 0
              // if (resultMax) i = 5
              // i = 0
              console.log(objFinal, 'objFinal');
              // asignados = asignados.filter(item => item.RO !== objFinal.RO)
            }
          } else {
            arrayFinal.push(respuestaObj)
            i = -1
          }
        }
      }
    }
    setData(prev => (prev.map((item) => {
      if (item.tittle === "Respuesta") {
        return {
          ...item,
          rows: arrayFinal
        };
      }
      return item;
    })));
  }


  const calculate = () => {
    for (let index = 0; index < 3; index++) {
      proceso();
    }
  }

  return (
    <>
      <Grid container
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
        sx={{ maxWidth: '100%', p: 1 }}
      >
        <Grid item xs={12}>
          <Button fullWidth variant="contained" color="success"
            onClick={() => proceso()}
          >
            Ejecutar
          </Button>
        </Grid>
        {data.map(({ rows, columns, xs, tittle, id }) => (
          <Grid item xs={xs}>
            <BasicCard title={tittle}>
              <BasicTable
                setData={setData}
                columns={columns}
                rows={rows}
                // rows={data[id].rows}
                title={tittle}
              />
            </BasicCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default App;
