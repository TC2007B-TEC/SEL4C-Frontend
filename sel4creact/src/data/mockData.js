import axios from 'axios';

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

let cantidadUs;
axios.get('http://20.127.122.6:8000/usuario/')
  .then(function (response) {
    cantidadUs = response.data.length;
  })
  .catch(function (error) {
    console.log(error);
});

export const RadarChartData = [
  // [
  //   { x: 'Liderazgo', y: 18, text: '18%' },
  //   { x: 'Autocontrol', y: 8, text: '8%' },
  //   { x: 'Conciencia y valor social', y: 15, text: '15%' },
  //   { x: 'Innovación social y sost. financiera', y: 11, text: '11%' },
  //   { x: 'Pensamiento sistemático', y: 18, text: '18%' },
  //   { x: 'Pensamiento científico', y: 14, text: '14%' },
  // ],
  // [
  //   { x: 'Liderazgo', y: 30, text: '30%' },
  //   { x: 'Autocontrol', y: 45, text: '45%' },
  //   { x: 'Conciencia y valor social', y: 40, text: '40%' },
  //   { x: 'Innovación social y sost. financiera', y: 70, text: '70%' },
  //   { x: 'Pensamiento sistemático', y: 90, text: '90%' },
  //   { x: 'Pensamiento científico', y: 24, text: '24%' },
  // ],
  [
    { x: 1, y: 18, text: '18%' },
    { x: 2, y: 8, text: '8%' },
    { x: 3, y: 15, text: '15%' },
    { x: 4, y: 11, text: '11%' },
    { x: 5, y: 18, text: '18%' },
    { x: 6, y: 14, text: '14%' },
  ],
  [
    { x: 1, y: 30, text: '30%' },
    { x: 2, y: 45, text: '45%' },
    { x: 3, y: 40, text: '40%' },
    { x: 4, y: 70, text: '70%' },
    { x: 5, y: 90, text: '90%' },
    { x: 6, y: 24, text: '24%' },
  ],
];

export const RadarCustomSeries = [

  { dataSource: RadarChartData[0],
    xName:"x", 
    yName:"y" ,
    type:'Radar' ,
    fill:'red',
    drawType:'Area',
    
  },

  { dataSource: RadarChartData[1],
    xName:"x", 
    yName:"y" ,
    type:'Radar' ,
    fill:'red',
    drawType:'Area',

  },
];


export const preguntas = [
  [1, 1, 2],
  [2, 1, 5],
  [3, 1, 3],
  [4, 1, 4],
  [5, 1, 2],
  [6, 1, 3],
  [7, 1, 2],
  [8, 1, 1],
  [9, 1, 3],
  [10, 1, 4],
  [11, 1, 1],
  [12, 1, 2],
  [13, 1, 3],
  [14, 1, 2],
  [15, 1, 1],
  [16, 1, 2],
  [17, 1, 1],
  [18, 1, 1],
  [19, 1, 2],
  [20, 1, 3],
  [21, 1, 4],
  [22, 1, 5],
  [23, 1, 4],
  [24, 1, 3],
  [1, 2, 4],
  [2, 2, 2],
  [3, 2, 1],
  [4, 2, 3],
  [5, 2, 1],
  [6, 2, 2],
  [7, 2, 2],
  [8, 2, 1],
  [9, 2, 3],
  [10, 2, 2],
  [11, 2, 1],
  [12, 2, 1],
  [13, 2, 3],
  [14, 2, 2],
  [15, 2, 4],
  [16, 2, 3],
  [17, 2, 2],
  [18, 2, 1],
  [19, 2, 3],
  [20, 2, 1],
  [21, 2, 1],
  [22, 2, 3],
  [23, 2, 2],
  [24, 2, 2],
  [25, 2, 3],
]


