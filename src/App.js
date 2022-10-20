import { useState } from 'react';
//CSS
import { Grid } from '@mui/material';
//Components
import { dataMap as arrayTotal, rowsDisponibles, rowsCA, rowsA, rowsC } from './components/Data/DataTable';
import BasicCard from "./components/Card/BasicCard";
import BasicTable from "./components/Table/BasicTable";
import Spinner from './components/Spinner/Spinner';
import Buttons from './components/Buttons/Buttons';

function App() {
  const [data, setData] = useState(arrayTotal);
  const [rowDisponibles, setRowsDisponibles] = useState(rowsDisponibles);
  const [resetdata, setResetdata] = useState(arrayTotal);
  const [resetDisponibles, setResetDisponibles] = useState(rowsDisponibles);
  const [spinner, setSpinner] = useState(false);

  const proceso = async () => {

    //Creamos una copia de el resultado C-A
    let copyRowCA = [...rowsCA]

    // Comparamos el disponible con la copia de C-A fila por fila
    for (let i = 0; i < copyRowCA.length; i++) {

      //Activamos el Spinner
      setSpinner(true);


      //Creamos una copia del disponible
      let copyDisponible = [...rowDisponibles];

      //Tiempo de espera para ver el proceso
      await intervalo();

      //Bandera para saber si la fila es exitosa en el for de abajo
      let flag = true;

      //Creamos un Ciclo para Recorrer los R1, R2 y R3
      for (let j = 1; j <= 3; j++) {

        // Hacemos la resta entre el dato y el disponible
        if (copyRowCA[i][`R${j}`] - copyDisponible[0][`R${j}`] <= 0) {
          copyDisponible[0][`R${j}`] += rowsA[copyRowCA[i].id - 1][`R${j}`]
        } else {
          // si es False, rompemos el for
          flag = false
          break;
        }
      }

      //Si la fila es exitosa, seteamos los disponibles
      if (flag) {
        setRowsDisponibles(copyDisponible);


        //Copia de la tabla Respuesta
        let copyRespuesta = [...data[4].rows]

        //Actualizamos la copia de Respuesta con la tabla de solicitados
        copyRespuesta[copyRowCA[i].id - 1] = rowsC[copyRowCA[i].id - 1];

        //Copia de todo en General
        let copyDataMap = [...data];
        copyDataMap[2].rows = rowDisponibles;
        copyDataMap[4].rows = copyRespuesta;
        // Actualizamos la tabla de disponibles y la de Respuesta
        setData(copyDataMap);

        //Eliminamos la posicion completada y reseteamos el recorrido del for
        copyRowCA.length > 0 && copyRowCA.splice(i, 1);

        //Desactivamos el Spinner
        setSpinner(false);
        i = -1;
      }
    }
  }

  const reset = () => {
    //Refrescamos el la pagina en el navegador (F5)
    window.location.reload()
  }

  const intervalo = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('Tiempo de Espera');
      }, 3000);
    });

  }

  return (
    <>
      {spinner && (<Spinner open={spinner} />)}
      <Grid container
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
        sx={{ maxWidth: '100%', p: 1 }}
      >
        <Buttons proceso={proceso} reset={reset} />
        {data.map(({ rows, columns, xs, md, tittle }, index) => (
          <Grid item xs={xs} md={md} key={index}>
            <BasicCard title={tittle}>
              <BasicTable
                setData={setData}
                columns={columns}
                rows={rows}
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
