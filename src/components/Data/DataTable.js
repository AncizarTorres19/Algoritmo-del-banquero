const columnsC = [
    { field: 'R0', headerName: 'C', flex: 1, type: 'number', headerClassName: 'super-app-theme--header' },
    { field: 'R1', headerName: 'R1', flex: 1, editable: true, type: 'number', headerClassName: 'super-app-theme--header' },
    { field: 'R2', headerName: 'R2', flex: 1, editable: true, type: 'number', headerClassName: 'super-app-theme--header' },
    { field: 'R3', headerName: 'R3', flex: 1, editable: true, type: 'number', headerClassName: 'super-app-theme--header' },
];
export const rowsC = [
    { id: 1, item: 0, R0: 'P1', R1: 3, R2: 2, R3: 2, },
    { id: 2, item: 0, R0: 'P2', R1: 6, R2: 1, R3: 3, },
    { id: 3, item: 0, R0: 'P3', R1: 3, R2: 1, R3: 4, },
    { id: 4, item: 0, R0: 'P4', R1: 4, R2: 2, R3: 2, },
];

const columnsA = [
    { field: 'R0', headerName: 'A', flex: 1, type: 'number', headerClassName: 'super-app-theme--header' },
    { field: 'R1', headerName: 'R1', flex: 1, editable: true, type: 'number', headerClassName: 'super-app-theme--header' },
    { field: 'R2', headerName: 'R2', flex: 1, editable: true, type: 'number', headerClassName: 'super-app-theme--header' },
    { field: 'R3', headerName: 'R3', flex: 1, editable: true, type: 'number', headerClassName: 'super-app-theme--header' },
];
export const rowsA = [
    { id: 1, item: 1, R0: 'P1', R1: 1, R2: 0, R3: 0 },
    { id: 2, item: 1, R0: 'P2', R1: 6, R2: 1, R3: 2 },
    { id: 3, item: 1, R0: 'P3', R1: 2, R2: 1, R3: 1 },
    { id: 4, item: 1, R0: 'P4', R1: 0, R2: 0, R3: 2 },
];

const columnsCA = [
    { field: 'R0', headerName: 'C-A', flex: 1, headerClassName: 'super-app-theme--header' },
    { field: 'R1', headerName: 'R1', flex: 1, headerClassName: 'super-app-theme--header' },
    { field: 'R2', headerName: 'R2', flex: 1, headerClassName: 'super-app-theme--header' },
    { field: 'R3', headerName: 'R3', flex: 1, headerClassName: 'super-app-theme--header' },
];
export const rowsCA = [
    { id: 1, item: 2, R0: 'P1', R1: rowsC[0].R1 - rowsA[0].R1, R2: rowsC[0].R2 - rowsA[0].R2, R3: rowsC[0].R3 - rowsA[0].R3 },
    { id: 2, item: 2, R0: 'P2', R1: rowsC[1].R1 - rowsA[1].R1, R2: rowsC[1].R2 - rowsA[1].R2, R3: rowsC[1].R3 - rowsA[1].R3 },
    { id: 3, item: 2, R0: 'P3', R1: rowsC[2].R1 - rowsA[2].R1, R2: rowsC[2].R2 - rowsA[2].R2, R3: rowsC[2].R3 - rowsA[2].R3 },
    { id: 4, item: 2, R0: 'P4', R1: rowsC[3].R1 - rowsA[3].R1, R2: rowsC[3].R2 - rowsA[3].R2, R3: rowsC[3].R3 - rowsA[3].R3 },
];
const columnsR = [
    { field: 'R0', headerName: '', flex: 1, headerClassName: 'super-app-theme--header' },
    { field: 'R1', headerName: 'R1', flex: 1, headerClassName: 'super-app-theme--header' },
    { field: 'R2', headerName: 'R2', flex: 1, headerClassName: 'super-app-theme--header' },
    { field: 'R3', headerName: 'R3', flex: 1, headerClassName: 'super-app-theme--header' },
];
export const rowsR = [
    { id: 1, item: 2, R0: 'P1', R1: 0, R2: 0, R3: 0 },
    { id: 2, item: 2, R0: 'P2', R1: 0, R2: 0, R3: 0 },
    { id: 3, item: 2, R0: 'P3', R1: 0, R2: 0, R3: 0 },
    { id: 4, item: 2, R0: 'P4', R1: 0, R2: 0, R3: 0 },
];

const columnsDisponibles = [
    { field: 'R1', headerName: 'R1', flex: 1, editable: true, type: 'number', headerClassName: 'super-app-theme--header' },
    { field: 'R2', headerName: 'R2', flex: 1, editable: true, type: 'number', headerClassName: 'super-app-theme--header' },
    { field: 'R3', headerName: 'R3', flex: 1, editable: true, type: 'number', headerClassName: 'super-app-theme--header' },
];
export const rowsDisponibles = [
    { id: 1, item: 3, R1: 0, R2: 1, R3: 1 },
];
const columnsMax = [
    { field: 'R1', headerName: 'R1', flex: 1, editable: true, type: 'number', headerClassName: 'super-app-theme--header' },
    { field: 'R2', headerName: 'R2', flex: 1, editable: true, type: 'number', headerClassName: 'super-app-theme--header' },
    { field: 'R3', headerName: 'R3', flex: 1, editable: true, type: 'number', headerClassName: 'super-app-theme--header' },
];
const rowsMax = [
    { id: 1, item: 4, R1: 9, R2: 3, R3: 6 },
];

export const dataMap = [
    {
        rows: rowsC,
        columns: columnsC,
        xs: 5,
        tittle: 'Solicitados',
        id: 0
    },
    {
        rows: rowsA,
        columns: columnsA,
        xs: 5,
        tittle: 'Asignados',
        id: 1
    },
    {
        rows: rowsDisponibles,
        columns: columnsDisponibles,
        xs: 3,
        tittle: 'Disponibles',
        id: 2
    },
    {
        rows: rowsMax,
        columns: columnsMax,
        xs: 3,
        tittle: 'Máximo',
        id: 4
    },
    {
        rows: rowsR, // Repuesta
        columns: columnsR, // Repuesta
        xs: 5,
        tittle: 'Respuesta',
        id: 3
    },
    {
        rows: rowsCA, // C-A
        columns: columnsCA, // C-A
        xs: 5,
        tittle: 'C-A',
        id: 3
    },
];