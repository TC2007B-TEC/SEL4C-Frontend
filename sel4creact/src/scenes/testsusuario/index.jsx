// Importamos las librerías necesarias
import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import { useTheme } from '@mui/material';
import { tokens } from '../../theme';
// Creamos un componente para la pantalla de usuario
function UserResultadoScreen() {
  // Definimos el estado del componente
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [users, setUsers] = useState([]); 
  const [userTests, setUserTests] = useState([]);
  const [openTests, setOpenTests] = useState(false); 

  let color = ''
  if (theme.palette.mode==='dark'){
    color = 'white'
  }
  else{
    color = 'black'
  }

  let bcolor = ''
  if (theme.palette.mode==='dark'){
    bcolor = '#6c6c6c'
  }
  else{
    bcolor = '#e0e0e0'
  }
  // Definimos las columnas del datagrid
  const columns = [
    { field: "name", headerName: "Nombre", width: 150},
    { field: "lname", headerName: "Apellido", width: 150 },
    {
      field: "testd1",
      headerName: "Emprendedor Social Diagnostico",
      headerAlign: 'center',
      align: 'center',
      width: 200,
      renderCell: (params) => (
        // Creamos un botón para ver los tests de cada usuario
        <Button style={{color:color, background: bcolor}}
          variant="contained"
          color="secondary"
          // Pass the testType state as an argument to the handleTests function
          onClick={() => handleTestd1(params.row.email)}
        >
          ES D
        </Button>
      ),
    },
    {
        field: "testd2",
        headerName: "E-Complexity Diagnostico",
        headerAlign: 'center',
        align: 'center',
        width: 200,
        renderCell: (params) => (
          // Creamos un botón para ver los tests de cada usuario
          <Button style={{color:color, background: bcolor}}
            variant="contained"
            color="secondary"
            // Pass the testType state as an argument to the handleTests function
            onClick={() => handleTestd2(params.row.email)}
          >
            E-C D
          </Button>
        ),
      },
      {
        field: "testf1",
        headerName: "Emprendedor Social Final",
        headerAlign: 'center',
        align: 'center',
        width: 200,
        renderCell: (params) => (
          // Creamos un botón para ver los tests de cada usuario
          <Button style={{color:color, background: bcolor}}
            variant="contained"
            color="secondary"
            // Pass the testType state as an argument to the handleTests function
            onClick={() => handleTestf1(params.row.email)}
          >
            ES F
          </Button>
        ),
      },
      {
          field: "testf2",
          headerName: "E-Complexity Final",
          headerAlign: 'center',
          align: 'center',
          width: 200,
          renderCell: (params) => (
            // Creamos un botón para ver los tests de cada usuario
            <Button style={{color:color, background: bcolor}}
              variant="contained"
              color="secondary"
              // Pass the testType state as an argument to the handleTests function
              onClick={() => handleTestf2(params.row.email)}
            >
              E-C F
            </Button>
          ),
        },
    
  ];

  // Definimos una función para obtener los usuarios al montar el componente
  useEffect(() => {
    axios
      .get("http://20.127.122.6:8000/usuario/")
      .then((response) => {
        // Guardamos los usuarios en el estado
        setUsers(response.data);
      })
      .catch((error) => {
        // Mostramos un mensaje de error si hay algún problema
        console.error(error);
        alert("Error al obtener los usuarios");
      });
  }, []);

  // Definimos una función para obtener los tests de un usuario dado su email
  const handleTestd1 = (email) => {
    axios
      .get(
        "http://20.127.122.6:8000/getpreguntas/",
        // Aquí pasamos los parámetros como una propiedad params del objeto de opciones
        {
          params: {
            // Use the testType parameter as the test_type query
            test_type: "D1",
            usuario: email,
          },
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        // Si la solicitud al servicio web falla, limpiamos el estado de userTests
        if (!response.data) {
          setUserTests([]);
          return;
        }
  
        // Guardamos el array de preguntas en el estado
        // Aquí usamos response.data directamente, ya que es el array que nos devuelve la API
        setUserTests(response.data);
        console.log(response.data);
        // Abrimos el diálogo de tests
        setOpenTests(true);
      })
      .catch((error) => {
        // Mostramos un mensaje de error si hay algún problema
        console.error(error);
        alert("Error al obtener los tests");
      });
  };
  const handleTestd2 = (email) => {
    console.log("Running handleTests with email and testType:", email);
    axios
      .get(
        "http://20.127.122.6:8000/getpreguntas/",
        // Aquí pasamos los parámetros como una propiedad params del objeto de opciones
        {
          params: {
            // Use the testType parameter as the test_type query
            test_type: "D2",
            usuario: email,
          },
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        // Si la solicitud al servicio web falla, limpiamos el estado de userTests
        if (!response.data) {
          setUserTests([]);
          return;
        }
  
        // Guardamos el array de preguntas en el estado
        // Aquí usamos response.data directamente, ya que es el array que nos devuelve la API
        setUserTests(response.data);
        console.log(response.data);
        // Abrimos el diálogo de tests
        setOpenTests(true);
      })
      .catch((error) => {
        // Mostramos un mensaje de error si hay algún problema
        console.error(error);
        alert("Error al obtener los tests");
      });
  };

  const handleTestf1 = (email) => {
    axios
      .get(
        "http://20.127.122.6:8000/getpreguntas/",
        // Aquí pasamos los parámetros como una propiedad params del objeto de opciones
        {
          params: {
            // Use the testType parameter as the test_type query
            test_type: "F1",
            usuario: email,
          },
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        // Si la solicitud al servicio web falla, limpiamos el estado de userTests
        if (!response.data) {
          setUserTests([]);
          return;
        }
  
        // Guardamos el array de preguntas en el estado
        // Aquí usamos response.data directamente, ya que es el array que nos devuelve la API
        setUserTests(response.data);
        console.log(response.data);
        // Abrimos el diálogo de tests
        setOpenTests(true);
      })
      .catch((error) => {
        // Mostramos un mensaje de error si hay algún problema
        console.error(error);
        alert("Error al obtener los tests");
      });
  };
  const handleTestf2 = (email) => {
    console.log("Running handleTests with email and testType:", email);
    axios
      .get(
        "http://20.127.122.6:8000/getpreguntas/",
        // Aquí pasamos los parámetros como una propiedad params del objeto de opciones
        {
          params: {
            // Use the testType parameter as the test_type query
            test_type: "F2",
            usuario: email,
          },
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        // Si la solicitud al servicio web falla, limpiamos el estado de userTests
        if (!response.data) {
          setUserTests([]);
          return;
        }
  
        // Guardamos el array de preguntas en el estado
        // Aquí usamos response.data directamente, ya que es el array que nos devuelve la API
        setUserTests(response.data);
        console.log(response.data);
        // Abrimos el diálogo de tests
        setOpenTests(true);
      })
      .catch((error) => {
        // Mostramos un mensaje de error si hay algún problema
        console.error(error);
        alert("Error al obtener los tests");
      });
  };
  
  const preguntas = [
    {
      pregunta: "Cuando algo me apasiona hago lo posible para lograr mis metas.",
      idpregunta: 0,
      test_type: "D1"
    },
    {
      pregunta: "Cuando mi trabajo me apasiona hago lo posible por concluirlo, aunque enfrente circunstancias adversas, falta de tiempo o distractores.",
      idpregunta: 1,
      test_type: "D1"
    },
    {
      pregunta: "A pesar del rechazo o problemas, siempre busco conseguir mis objetivos.",
      idpregunta: 2,
      test_type: "D1"
    },
    {
      pregunta: "Soy tolerante ante situaciones ambiguas o que me generen incertidumbre.",
      idpregunta: 3,
      test_type: "D1"
    },
    {
      pregunta: "Tengo la capacidad de establecer una meta clara y los pasos para lograrla.",
      idpregunta: 4,
      test_type: "D1"
    },
    {
      pregunta: "Es común que logre convencer a otros sobre mis ideas y acciones.",
      idpregunta: 5,
      test_type: "D1"
    },
    {
      pregunta: "Domino diferentes formas de comunicar mis ideas: por escrito, en un video o en charlas cara a cara",
      idpregunta: 6,
      test_type: "D1"
    },
    {
      pregunta: "Se me facilita delegar actividades a los miembros de mi equipo de acuerdo con sus perfiles.",
      idpregunta: 7,
      test_type: "D1"
    },
    {
      pregunta: "Tengo la habilidad de identificar las fortalezas y debilidades de las personas con las que trabajo.",
      idpregunta: 8,
      test_type: "D1"
    },
    {
      pregunta: "Se me facilita colaborar de manera activa en un equipo para lograr objetivos comunes.",
      idpregunta: 9,
      test_type: "D1"
    },
    {
      pregunta: "Me apasiona trabajar en favor de causas sociales.",
      idpregunta: 10,
      test_type: "D1"
    },
    {
      pregunta: "Creo que la misión de mi vida es trabajar para el cambio social y mejorar la vida de las personas.",
      idpregunta: 11,
      test_type: "D1"
    },
    {
      pregunta: "Me interesa dirigir una iniciativa con resultados favorables para la sociedad y/o el medio ambiente.",
      idpregunta: 12,
      test_type: "D1"
    },
    {
      pregunta: "Soy capaz de identificar problemas en el entorno social o ambiental para generar soluciones innovadoras.",
      idpregunta:13,
      test_type: "D1"
    },
    {
      pregunta: "Manifiesto un compromiso por participar en aspectos sociales de mi entorno.",
      idpregunta: 14,
      test_type: "D1"
    },
    {
      pregunta: "Opino que el crecimiento económico debe ocurrir en igualdad de oportunidades y equidad para todos.",
      idpregunta: 15,
      test_type: "D1"
    },
    {
      pregunta: "Mis acciones y comportamientos se rigen por normas morales basadas en el respeto y cuidado hacia las personas y a la naturaleza.",
      idpregunta: 16,
      test_type: "D1"
    },
    {
      pregunta: "Sé cómo aplicar estrategias para crear nuevas ideas o proyectos.",
      idpregunta: 17,
      test_type: "D1"
    },
    {
      pregunta: "Sé aplicar conocimientos contables y financieros para el desarrollo de un emprendimiento.",
      idpregunta: 18,
      test_type: "D1"
    },
    {
      pregunta: "Tengo nociones sobre la logística para llevar a cabo la gestión de una organización.",
      idpregunta: 19,
      test_type: "D1"
    },
    {
      pregunta: "Sé cómo realizar un presupuesto para lograr un proyecto.",
      idpregunta: 20,
      test_type: "D1"
    },
    {
      pregunta: "Sé cómo establecer criterios de valoración y medir los resultados de impacto social.",
      idpregunta: 21,
      test_type: "D1"
    },
    {
      pregunta: "Creo que el cometer errores nos ofrece nuevas oportunidades de aprendizaje.",
      idpregunta: 22,
      test_type: "D1"
    },
    {
      pregunta: "Conozco estrategias para desarrollar un proyecto, aún con escasez de recursos.",
      idpregunta: 23,
      test_type: "D1"
    },
    {
      pregunta: "Tengo la capacidad de encontrar asociaciones entre las variables, condiciones y restricciones en un proyecto.",
      idpregunta: 0,
      test_type: "D2"
    },
    {
      pregunta: "Identifico datos de mi disciplina y de otras áreas que contribuyen a resolver problemas.",
      idpregunta: 1,
      test_type: "D2"
    },
    {
      pregunta: "Participo en proyectos que se tienen que resolver utilizando perspectivas Inter/multidisciplinarias.",
      idpregunta: 2,
      test_type: "D2"
    },
    {
      pregunta: "Organizo información para resolver problemas.",
      idpregunta: 3,
      test_type: "D2"
    },
    {
      pregunta: "Me agrada conocer perspectivas diferentes de un problema.",
      idpregunta: 4,
      test_type: "D2"
    },
    {
      pregunta: "Me inclino por estrategias para comprender las partes y el todo de un problema.",
      idpregunta: 5,
      test_type: "D2"
    },
    {
      pregunta: "Tengo la capacidad de Identificar los componentes esenciales de un problema para formular una pregunta de investigación.",
      idpregunta: 6,
      test_type: "D2"
    },
    {
      pregunta: "Conozco la estructura y los formatos para elaborar reportes de investigación que se utilizan en mi área o disciplina.",
      idpregunta: 7,
      test_type: "D2"
    },
    {
      pregunta: "Identifico la estructura de un artículo de investigación que se maneja en mi área o disciplina.",
      idpregunta: 8,
      test_type: "D2"
    },
    {
      pregunta: "Identifico los elementos para formular una pregunta de investigación.",
      idpregunta: 9,
      test_type: "D2"
    },
    {
      pregunta: "Diseño instrumentos de investigación coherentes con el método de investigación utilizado.",
      idpregunta: 10,
      test_type: "D2"
    },
    {
      pregunta: "Formulo y pruebo hipótesis de investigación.",
      idpregunta: 11,
      test_type: "D2"
    },
    {
      pregunta: "Me inclino a usar datos científicos para analizar problemas de investigación.",
      idpregunta: 12,
      test_type: "D2"
    },
    {
      pregunta: "Tengo la capacidad para analizar críticamente problemas desde diferentes perspectivas.",
      idpregunta:13,
      test_type: "D2"
    },
    {
      pregunta: "Identifico la fundamentación de juicios propios y ajenos para reconocer argumentos falsos.",
      idpregunta: 14,
      test_type: "D2"
    },
    {
      pregunta: "Autoevalúo  el nivel de avance y logro de mis metas para hacer los ajustes necesarios.",
      idpregunta: 15,
      test_type: "D2"
    },
    {
      pregunta: "Utilizo razonamientos basados en el conocimiento científico para emitir juicios ante un problema.",
      idpregunta: 16,
      test_type: "D2"
    },
    {
      pregunta: "Me aseguro de revisar los lineamientos éticos de los proyectos en los que participo.",
      idpregunta: 17,
      test_type: "D2"
    },
    {
      pregunta: "Aprecio críticas en el desarrollo de proyectos para mejorarlos.",
      idpregunta: 18,
      test_type: "D2"
    },
    {
      pregunta: "Conozco los criterios para determinar un problema.",
      idpregunta: 19,
      test_type: "D2"
    },
    {
      pregunta: "Tengo la capacidad de identificar las variables, de diversas disciplinas, que pueden ayudar a responder preguntas.",
      idpregunta: 20,
      test_type: "D2"
    },
    {
      pregunta: "Aplico soluciones innovadoras a diversas problemáticas.",
      idpregunta: 21,
      test_type: "D2"
    },
    {
      pregunta: "Soluciono problemas interpretando datos de diferentes disciplinas",
      idpregunta: 22,
      test_type: "D2"
    },
    {
      pregunta: "Analizo problemas de investigación contemplando el contexto para crear soluciones.",
      idpregunta: 23,
      test_type: "D2"
    },
    {
      pregunta: "Tiendo a evaluar con sentido crítico e innovador las soluciones derivadas de un problema.",
      idpregunta: 24,
      test_type: "D2"
    },
    {
      pregunta: "Cuando algo me apasiona hago lo posible para lograr mis metas.",
      idpregunta: 0,
      test_type: "F1"
    },
    {
      pregunta: "Cuando mi trabajo me apasiona hago lo posible por concluirlo, aunque enfrente circunstancias adversas, falta de tiempo o distractores.",
      idpregunta: 1,
      test_type: "F1"
    },
    {
      pregunta: "A pesar del rechazo o problemas, siempre busco conseguir mis objetivos.",
      idpregunta: 2,
      test_type: "F1"
    },
    {
      pregunta: "Soy tolerante ante situaciones ambiguas o que me generen incertidumbre.",
      idpregunta: 3,
      test_type: "F1"
    },
    {
      pregunta: "Tengo la capacidad de establecer una meta clara y los pasos para lograrla.",
      idpregunta: 4,
      test_type: "F1"
    },
    {
      pregunta: "Es común que logre convencer a otros sobre mis ideas y acciones.",
      idpregunta: 5,
      test_type: "F1"
    },
    {
      pregunta: "Domino diferentes formas de comunicar mis ideas: por escrito, en un video o en charlas cara a cara",
      idpregunta: 6,
      test_type: "F1"
    },
    {
      pregunta: "Se me facilita delegar actividades a los miembros de mi equipo de acuerdo con sus perfiles.",
      idpregunta: 7,
      test_type: "F1"
    },
    {
      pregunta: "Tengo la habilidad de identificar las fortalezas y debilidades de las personas con las que trabajo.",
      idpregunta: 8,
      test_type: "F1"
    },
    {
      pregunta: "Se me facilita colaborar de manera activa en un equipo para lograr objetivos comunes.",
      idpregunta: 9,
      test_type: "F1"
    },
    {
      pregunta: "Me apasiona trabajar en favor de causas sociales.",
      idpregunta: 10,
      test_type: "F1"
    },
    {
      pregunta: "Creo que la misión de mi vida es trabajar para el cambio social y mejorar la vida de las personas.",
      idpregunta: 11,
      test_type: "F1"
    },
    {
      pregunta: "Me interesa dirigir una iniciativa con resultados favorables para la sociedad y/o el medio ambiente.",
      idpregunta: 12,
      test_type: "F1"
    },
    {
      pregunta: "Soy capaz de identificar problemas en el entorno social o ambiental para generar soluciones innovadoras.",
      idpregunta:13,
      test_type: "F1"
    },
    {
      pregunta: "Manifiesto un compromiso por participar en aspectos sociales de mi entorno.",
      idpregunta: 14,
      test_type: "F1"
    },
    {
      pregunta: "Opino que el crecimiento económico debe ocurrir en igualdad de oportunidades y equidad para todos.",
      idpregunta: 15,
      test_type: "F1"
    },
    {
      pregunta: "Mis acciones y comportamientos se rigen por normas morales basadas en el respeto y cuidado hacia las personas y a la naturaleza.",
      idpregunta: 16,
      test_type: "F1"
    },
    {
      pregunta: "Sé cómo aplicar estrategias para crear nuevas ideas o proyectos.",
      idpregunta: 17,
      test_type: "F1"
    },
    {
      pregunta: "Sé aplicar conocimientos contables y financieros para el desarrollo de un emprendimiento.",
      idpregunta: 18,
      test_type: "F1"
    },
    {
      pregunta: "Tengo nociones sobre la logística para llevar a cabo la gestión de una organización.",
      idpregunta: 19,
      test_type: "F1"
    },
    {
      pregunta: "Sé cómo realizar un presupuesto para lograr un proyecto.",
      idpregunta: 20,
      test_type: "F1"
    },
    {
      pregunta: "Sé cómo establecer criterios de valoración y medir los resultados de impacto social.",
      idpregunta: 21,
      test_type: "F1"
    },
    {
      pregunta: "Creo que el cometer errores nos ofrece nuevas oportunidades de aprendizaje.",
      idpregunta: 22,
      test_type: "F1"
    },
    {
      pregunta: "Conozco estrategias para desarrollar un proyecto, aún con escasez de recursos.",
      idpregunta: 23,
      test_type: "F1"
    },
    {
      pregunta: "Tengo la capacidad de encontrar asociaciones entre las variables, condiciones y restricciones en un proyecto.",
      idpregunta: 0,
      test_type: "F2"
    },
    {
      pregunta: "Identifico datos de mi disciplina y de otras áreas que contribuyen a resolver problemas.",
      idpregunta: 1,
      test_type: "F2"
    },
    {
      pregunta: "Participo en proyectos que se tienen que resolver utilizando perspectivas Inter/multidisciplinarias.",
      idpregunta: 2,
      test_type: "F2"
    },
    {
      pregunta: "Organizo información para resolver problemas.",
      idpregunta: 3,
      test_type: "F2"
    },
    {
      pregunta: "Me agrada conocer perspectivas diferentes de un problema.",
      idpregunta: 4,
      test_type: "F2"
    },
    {
      pregunta: "Me inclino por estrategias para comprender las partes y el todo de un problema.",
      idpregunta: 5,
      test_type: "F2"
    },
    {
      pregunta: "Tengo la capacidad de Identificar los componentes esenciales de un problema para formular una pregunta de investigación.",
      idpregunta: 6,
      test_type: "F2"
    },
    {
      pregunta: "Conozco la estructura y los formatos para elaborar reportes de investigación que se utilizan en mi área o disciplina.",
      idpregunta: 7,
      test_type: "F2"
    },
    {
      pregunta: "Identifico la estructura de un artículo de investigación que se maneja en mi área o disciplina.",
      idpregunta: 8,
      test_type: "F2"
    },
    {
      pregunta: "Identifico los elementos para formular una pregunta de investigación.",
      idpregunta: 9,
      test_type: "F2"
    },
    {
      pregunta: "Diseño instrumentos de investigación coherentes con el método de investigación utilizado.",
      idpregunta: 10,
      test_type: "F2"
    },
    {
      pregunta: "Formulo y pruebo hipótesis de investigación.",
      idpregunta: 11,
      test_type: "F2"
    },
    {
      pregunta: "Me inclino a usar datos científicos para analizar problemas de investigación.",
      idpregunta: 12,
      test_type: "F2"
    },
    {
      pregunta: "Tengo la capacidad para analizar críticamente problemas desde diferentes perspectivas.",
      idpregunta:13,
      test_type: "F2"
    },
    {
      pregunta: "Identifico la fundamentación de juicios propios y ajenos para reconocer argumentos falsos.",
      idpregunta: 14,
      test_type: "F2"
    },
    {
      pregunta: "Autoevalúo  el nivel de avance y logro de mis metas para hacer los ajustes necesarios.",
      idpregunta: 15,
      test_type: "F2"
    },
    {
      pregunta: "Utilizo razonamientos basados en el conocimiento científico para emitir juicios ante un problema.",
      idpregunta: 16,
      test_type: "F2"
    },
    {
      pregunta: "Me aseguro de revisar los lineamientos éticos de los proyectos en los que participo.",
      idpregunta: 17,
      test_type: "F2"
    },
    {
      pregunta: "Aprecio críticas en el desarrollo de proyectos para mejorarlos.",
      idpregunta: 18,
      test_type: "F2"
    },
    {
      pregunta: "Conozco los criterios para determinar un problema.",
      idpregunta: 19,
      test_type: "F2"
    },
    {
      pregunta: "Tengo la capacidad de identificar las variables, de diversas disciplinas, que pueden ayudar a responder preguntas.",
      idpregunta: 20,
      test_type: "F2"
    },
    {
      pregunta: "Aplico soluciones innovadoras a diversas problemáticas.",
      idpregunta: 21,
      test_type: "F2"
    },
    {
      pregunta: "Soluciono problemas interpretando datos de diferentes disciplinas",
      idpregunta: 22,
      test_type: "F2"
    },
    {
      pregunta: "Analizo problemas de investigación contemplando el contexto para crear soluciones.",
      idpregunta: 23,
      test_type: "F2"
    },
    {
      pregunta: "Tiendo a evaluar con sentido crítico e innovador las soluciones derivadas de un problema.",
      idpregunta: 24,
      test_type: "F2"
    },
  ];
  const respuestas = [
    {
      respuesta: "Nada de acuerdo",
      idresp: 1
    },
    {
      respuesta: "Poco de acuerdo",
      idresp: 2
    },
    {
      respuesta: "Ni de acuerdo, ni en desacuerdo",
      idresp: 3
    },
    {
      respuesta: "De acuerdo",
      idresp: 4
    },
    {
      respuesta: "Muy de acuerdo",
      idresp: 5
    },
  ];

  function buscarPregunta(idpregunta, testtype) {
    const preguntasFiltradas = preguntas.filter((pregunta) => {
      return pregunta.idpregunta === idpregunta && pregunta.test_type === testtype;
    });
  
    if (preguntasFiltradas.length > 0) {
      return preguntasFiltradas[0];
    } else {
      return null;
    }
  }
  function buscarRespuesta(idresp) {
    const respuestasFiltradas = respuestas.filter((respuesta) => {
      return respuesta.idresp === idresp;
    });
  
    if (respuestasFiltradas.length > 0) {
      return respuestasFiltradas[0];
    } else {
      return null;
    }
  }

  // Definimos una función para cerrar los diálogos
  const handleClose = () => {
    // Cerramos los diálogos y limpiamos el estado
    setOpenTests(false);
    setUserTests([]);
  };

 
  // Retornamos el JSX del componente
  return (
    <div className="m-6 content-center justify-center align-middle" style={{ height: 500}}>
      <DataGrid style={{color:color}}
        rows={users}
        columns={columns}
        components={{
          Toolbar: GridToolbar,
        }}
        getRowId={(row) => row.email} // Usamos el email como id
      />
      
      {/* Mostramos el diálogo de tests si está abierto */}
      {openTests ? (
        <>
          {/* Render the dialog component */}
          <Dialog open={openTests} onClose={handleClose}>
            <DialogTitle>Tests</DialogTitle>
            <DialogContent>
              <ul>
                {userTests && userTests.length > 0 ? (
                  // If userTests is not null and has some elements, render them as list items
                  userTests.map((pregunta) => (
                    <li key={pregunta.id}>
                      Pregunta: {buscarPregunta(pregunta.idpregunta,pregunta.test_type).pregunta}
                      <br />
                      Respuesta: {buscarRespuesta(pregunta.resp).respuesta}
                      <br />
                    </li>
                  ))
                ) : (
                  // If userTests is null or empty, render a message saying "Test no disponible"
                  <li>Test no disponible</li>
                )}
              </ul>
            </DialogContent>
          </Dialog>
        </>
      ) : null}

    </div>
  );
}

export default UserResultadoScreen;