import axios from "axios";
export async function Datos (email) {

    let us = email.usuario
    let datosIn = [];

    try {
        const response = await axios.get(`http://20.127.122.6:8000/getpreguntas/?test_type=D1&usuario=${us}`);
        const temp = Object.values(response.data)
        datosIn= datosIn.concat(temp.map(usuario => {
            return {
                idpregunta: usuario.idpregunta,
                test_type: usuario.test_type,
                resp: usuario.resp,
                usuario: usuario.usuario
            };
        }));
        const response2 = await axios.get(`http://20.127.122.6:8000/getpreguntas/?test_type=D2&usuario=${us}`);
        const temp2 = Object.values(response2.data)
        datosIn = datosIn.concat(temp2.map(usuario => {
            return {
                idpregunta: usuario.idpregunta,
                test_type: usuario.test_type,
                resp: usuario.resp,
                usuario: usuario.usuario,
            };
        }));
    }
    catch (error) {
        console.error(error);
    }

    let datosFn = [];

    try {
        const response = await axios.get(`http://20.127.122.6:8000/getpreguntas/?test_type=F1&usuario=${us}`);
        const temp = Object.values(response.data)
        datosFn = datosFn.concat(temp.map(usuario => {
            return {
                idpregunta: usuario.idpregunta,
                test_type: usuario.test_type,
                resp: usuario.resp,
                usuario: usuario.usuario,
            };
        }));
        const response2 = await axios.get(`http://20.127.122.6:8000/getpreguntas/?test_type=F2&usuario=${us}`);
        const temp2 = Object.values(response2.data)
        datosFn = datosFn.concat(temp2.map(usuario => {
            return {
                idpregunta: usuario.idpregunta,
                test_type: usuario.test_type,
                resp: usuario.resp,
                usuario: usuario.usuario,
            };
        }));
    } 
    catch (error) {
        console.error(error);
    }

    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    let e = 0;
    let f = 0;
    let g = 0;
    let h = 0;

    let af = 0;
    let bf = 0;
    let cf = 0;
    let df = 0;
    let ef = 0;
    let ff = 0;
    let gf = 0;
    let hf = 0;

    for (let i = 0; i < datosIn.length; i++){
        let idpregunta = datosIn[i].idpregunta;
        let test_type = datosIn[i].test_type;
        let resp = datosIn[i].resp;

        if (test_type==="D1"){
            if (idpregunta >= 0 && idpregunta <= 3) a = a+resp;
            else if (idpregunta >= 4 && idpregunta <= 9) b = b+resp;
            else if (idpregunta >= 10 && idpregunta <= 16) c = c+resp;
            else if (idpregunta >= 17 && idpregunta <= 23) d = d+resp;
        }

        else if(test_type === "D2"){
            if (idpregunta >= 0 && idpregunta <= 5) e = e+resp;
            else if (idpregunta >= 6 && idpregunta <= 12) f = f+resp;
            else if (idpregunta >= 13 && idpregunta <= 18) g = g+resp;
            else if (idpregunta >= 19 && idpregunta <= 24) h = h+resp;
        }     
    };

    for (let i = 0; i < datosFn.length; i++){
        let idpregunta = datosFn[i].idpregunta;
        let test_type = datosFn[i].test_type;
        let resp = datosFn[i].resp;

        if (test_type==="F1"){
            if (idpregunta >= 0 && idpregunta <= 3) af = af+resp;
            else if (idpregunta >= 4 && idpregunta <= 9) bf = bf+resp;
            else if (idpregunta >= 10 && idpregunta <= 16) cf = cf+resp;
            else if (idpregunta >= 17 && idpregunta <= 23) df = df+resp;
        }

        else if(test_type === "F2"){
            if (idpregunta >= 0 && idpregunta <= 5) ef = ef+resp;
            else if (idpregunta >= 6 && idpregunta <= 12) ff = ff+resp;
            else if (idpregunta >= 13 && idpregunta <= 18) gf = gf+resp;
            else if (idpregunta >= 19 && idpregunta <= 24) hf = hf+resp;
        }
    };

    a = Math.round((a/20)*100);
    b = Math.round((b/30)*100);
    c = Math.round((c/35)*100);
    d = Math.round((d/35)*100);
    e = Math.round((e/30)*100);
    f = Math.round((f/35)*100);
    g = Math.round((g/30)*100);
    h = Math.round((h/30)*100);

    af = Math.round((af/20)*100);
    bf = Math.round((bf/30)*100);
    cf = Math.round((cf/35)*100);
    df = Math.round((df/35)*100);
    ef = Math.round((ef/30)*100);
    ff = Math.round((ff/35)*100);
    gf = Math.round((gf/30)*100);
    hf = Math.round((hf/30)*100);

    const dataSet=[
        {label: "AC", name: "Autocontrol", x: a, y: af},
        {label: "Lid", name: "Liderazgo", x: b, y: bf},
        {label: "CVS", name: "Conciencia y valor social", x: c, y: cf},
        {label: "ISSF", name: "Innovación social y sostenibilidad financiera", x: d, y: df},
        {label: "PS", name: "Pensamiento sistemático", x: e, y: ef},
        {label: "PCi", name: "Pensamiento científico", x: f, y: ff},
        {label: "PCr", name: "Pensamiento crítico", x: g, y: gf},
        {label: "PI", name: "Pensamiento innovador", x: h, y: hf},
    ]
    return dataSet
};
