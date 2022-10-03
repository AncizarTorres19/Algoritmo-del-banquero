
export const GRID_DEFAULT_LOCALE_TEXT = {
    // Raíz
    noRowsLabel: 'Sin filas',
    noResultsOverlayLabel: 'No se encontraron resultados.',
    errorOverlayDefaultLabel: 'Ocurrió un error.',

    // Texto del botón de la barra de herramientas del selector de densidad
    toolbarDensity: 'Densidad',
    toolbarDensityLabel: 'Densidad',
    toolbarDensityCompact: 'Compacto',
    toolbarDensityStandard: 'Estándar',
    toolbarDensityComfortable: 'Cómodo',

    // Texto del botón de la barra de herramientas del selector de columnas
    toolbarColumns: 'Columnas',
    toolbarColumnsLabel: 'Seleccionar columnas',

    // Texto del botón de la barra de herramientas de filtros
    toolbarFilters: 'Filtros',
    toolbarFiltersLabel: 'Mostrar filtros',
    toolbarFiltersTooltipHide: 'Ocultar filtros',
    toolbarFiltersTooltipShow: 'Mostrar filtros',
    toolbarFiltersTooltipActive: (count) =>
        count !== 1 ? ` ${count} filtros activos` : ` ${count} filtro activo`,

    // campo de la barra de herramientas de filtro rápido
    toolbarQuickFilterPlaceholder: 'Buscar…',
    toolbarQuickFilterLabel: 'Buscar',
    toolbarQuickFilterDeleteIconLabel: 'Borrar',

    // Exportar el texto del botón de la barra de herramientas del selector
    toolbarExport: 'Exportar',
    toolbarExportLabel: 'Exportar',
    toolbarExportCSV: 'Descargar como CSV',
    toolbarExportPrint: 'Imprimir',
    toolbarExportExcel: 'Descargar como Excel',

    // Texto del panel de columnas
    columnPanelTextFieldLabel: 'Buscar columna',
    columnPanelTextFieldPlaceholder: 'Título de columna',
    columnPanelDragIconLabel: 'Reordenar columna',
    columnPanelShowAllButton: 'Mostrar todo',
    columnPanelHideAllButton: 'Ocultar todo',

    // Filtrar texto del panel
    filterPanelAddFilter: 'Agregar filtro',
    filterPanelDeleteIconLabel: 'Eliminar',
    filterPanelLinkOperator: 'Operador lógico',
    filterPanelOperators: 'Operator',  // TODO v6: cambiar el nombre a filterPanelOperator
    filterPanelOperatorAnd: 'Y',
    filterPanelOperatorOr: 'O',
    filterPanelColumns: 'Columnas',
    filterPanelInputLabel: 'Valor',
    filterPanelInputPlaceholder: 'Valor de filtro',

    // Filtrar texto de operadores
    filterOperatorContains: 'contiene',
    filterOperatorEquals: 'igual',
    filterOperatorStartsWith: 'comienza con',
    filterOperatorEndsWith: 'termina con',
    filterOperatorIs: 'es',
    filterOperatorNot: 'no es',
    filterOperatorAfter: 'es después',
    filterOperatorOnOrAfter: 'está en o después',
    filterOperatorBefore: 'es antes',
    filterOperatorOnOrBefore: 'está en o antes',
    filterOperatorIsEmpty: 'está vacío',
    filterOperatorIsNotEmpty: 'no está vacío',
    filterOperatorIsAnyOf: 'es cualquiera de',

    // Filtrar texto de valores
    filterValueAny: 'cualquiera',
    filterValueTrue: 'verdadero',
    filterValueFalse: 'falso',

    // Texto del menú de la columna
    columnMenuLabel: 'Menú',
    columnMenuShowColumns: 'Mostrar columnas',
    columnMenuFilter: 'Filtro',
    columnMenuHideColumn: 'Ocultar',
    columnMenuUnsort: 'Desordenar',
    columnMenuSortAsc: 'Ordenar por ASC',
    columnMenuSortDesc: 'Ordenar por DESC',

    // Texto de encabezado de columna
    columnHeaderFiltersTooltipActive: (count) =>
        count !== 1 ? ` ${count} filtros activos` : ` ${count} filtro activo`,
    columnHeaderFiltersLabel: 'Mostrar filtros',
    columnHeaderSortIconLabel: 'Ordenar',

    // Texto de pie de página de las filas seleccionadas
    footerRowSelected: (count) =>
        count !== 1
            ? ` ${count.toLocaleString()} filas seleccionadas`
            : ` ${count.toLocaleString()} fila seleccionada`,

    // Texto de pie de página de la cantidad total de la fila
    footerTotalRows: 'Filas totales:',

    // Texto de pie de página de cantidad de fila visible total
    footerTotalVisibleRows: (visibleCount, totalCount) =>
        `${visibleCount.toLocaleString()} de ${totalCount.toLocaleString()}`,

    // Texto de selección de casilla de verificación
    checkboxSelectionHeaderName: 'Selección de casilla de verificación',
    checkboxSelectionSelectAllRows: 'Seleccionar todas las filas',
    checkboxSelectionUnselectAllRows: 'Anular la selección de todas las filas',
    checkboxSelectionSelectRow: 'Seleccionar fila',
    checkboxSelectionUnselectRow: 'Anular selección de fila',

    // Texto de celda booleano
    booleanCellTrueLabel: 'sí',
    booleanCellFalseLabel: 'no',

    // Celda de acciones más texto
    actionCellMore: 'más',

    // Columna de texto fijo
    pinToLeft: 'Anclar a la izquierda',
    pinToRight: 'Pin a la derecha',
    desanclar: 'Desenganchar',

    // Datos del árbol
    treeDataGroupingHeaderName: 'Grupo',
    treeDataExpand: 'ver niños',
    treeDataCollapse: 'ocultar niños',

    // Agrupando columnas
    groupingColumnHeaderName: 'Grupo',
    groupColumn: (nombre) => `Agrupar por ${nombre} `,
    unGroupColumn: (nombre) => `Dejar de agrupar por ${nombre} `,

    // Maestro/detalle
    detailPanelToggle: 'Alternar panel de detalles',
    expandDetailPanel: 'Expandir',
    colapsoDetallePanel: 'Contraer',

    // Claves de traducción de componentes principales usadas
    MuiTablePagination: {
        labelRowsPerPage: "Filas por página:",
        // labelDisplayedRows: "de",
        labelDisplayedRows: ({ from, to, count }) => count === 1 ? '' : `Mostrando registros ${from}-${to} de un total de ${count} registros`,
        // backIconButtonText: "Anterior Página",
        // nextIconButtonText: "Siguiente Página"
    },
    columnsPanelTextFieldLabel: "Columna de búsqueda",
    columnsPanelTextFieldPlaceholder: "Título de columna",
    columnsPanelDragIconLabel: "Reorder columna",
    columnsPanelShowAllButton: "Mostrar todo",
    columnsPanelHideAllButton: "Ocultar todo",
    actionsCellMore: "más",

    // Texto de reordenación de filas
    rowReorderingHeaderName: 'Reordenación de filas',

    // Agregación
    aggregationMenuItemHeader: 'Agregación',
    agregaciónFunciónLabelSum: 'suma',
    agregaciónFunctionLabelAvg: 'avg',
    agregaciónFunciónLabelMin: 'min',
    agregaciónFunciónLabelMax: 'max',
    agregaciónFunctionLabelSize: 'tamaño',
};