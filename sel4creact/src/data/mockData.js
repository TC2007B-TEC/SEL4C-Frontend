export const data = [
  { x: 1, text:'Liderazgo', y: 5156 },
  { x: 2, text:'Autocontrol', y: 3754 },
  { x: 3, text:'Conciencia y valor social', y: 2809 },
  { x: 4, text:'Innovación social y sost. financiera', y: 2721 },
  { x: 5, text:'Pensamiento sistemático', y: 2472 },
  { x: 6, text:'Pensamiento científico', y: 2472 },

];

export const pieChartData = [
  { x: 'Liderazgo', y: 18, text: '18%' },
  { x: 'Autocontrol', y: 8, text: '8%' },
  { x: 'Conciencia y valor social', y: 15, text: '15%' },
  { x: 'Innovación social y sost. financiera', y: 11, text: '11%' },
  { x: 'Pensamiento sistemático', y: 18, text: '18%' },
  { x: 'Pensamiento científico', y: 14, text: '14%' },
];

export const Actividades = [
  { x: 'Actividad 1', y: 18, text: '18%' },
  { x: 'Actividad 2', y: 8, text: '8%' },
  { x: 'Actividad 3', y: 15, text: '15%' },
  { x: 'Actividad 4', y: 11, text: '11%' },
  { x: 'Actividad 5', y: 18, text: '18%' },

];

export const stackedChartData = [
  [
    { x: 'Actividad 1', y: 200 },
    { x: 'Actividad 2', y: 150 },
    { x: 'Actividad 3', y: 125 },
    { x: 'Actividad 4', y: 75 },
    { x: 'Actividad 5', y: 30 },
  ],
  [
    { x: 'Actividad 1', y: 120 },
    { x: 'Actividad 2', y: 170 },
    { x: 'Actividad 3', y: 195 },
    { x: 'Actividad 4', y: 245 },
    { x: 'Actividad 5', y: 290 },
  ],
];

export const stackedCustomSeries = [

  { dataSource: stackedChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Actividades',
    type: 'StackingColumn',
    background: 'blue',

  },

  { dataSource: stackedChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Usuarios',
    type: 'StackingColumn',
    background: 'black',

  },
];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 100,
  maximum: 400,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};