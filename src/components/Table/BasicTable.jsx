import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { GRID_DEFAULT_LOCALE_TEXT } from '../../utils/localeTextConstants';
import { Box } from '@mui/material';

export default function BasicTable({ columns, rows }) {

  const [selectionModel, setSelectionModel] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [rowsD, setRowsD] = useState(rows);

  useEffect(() => {
    if (selectionModel.length > 0) {
      setRowsD(rowsD.map((item) => {
        if (item.id === selectionModel[0].id) {
          return {
            ...item,
            [selectionModel[0].field]: selectionModel[0].value,
          };
        }
        return item;
      }));
    }
  }, [selectionModel]);


  return (
    <Box
      sx={{
        width: '100%',
        '& .super-app-theme--header': {
          backgroundColor: 'rgba(113, 149, 170)',
          color: '#fff',
        },
      }}
    >
      <DataGrid
        localeText={GRID_DEFAULT_LOCALE_TEXT}
        disableSelectionOnClick
        rows={rowsD}
        columns={columns}
        autoHeight
        pageSize={pageSize}
        getRowId={(row) => row.id}
        onCellEditCommit={(item) => {
          setSelectionModel([item]);
        }}
      />
    </Box>
  );
}


