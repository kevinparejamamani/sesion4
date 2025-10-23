import * as modelPersona from "../models/persona.model.js";

export const findAll = async function() {
    console.log("------------service------------");
    let results= await modelPersona.findAll();
    console.log("luego del modelo");
    console.log(results);
    return results;
};

export const login = async function(objUsuario) {
    console.log("------------service------------");
    let results= await modelPersona.login(objUsuario);
    console.log("luego del modelo");
    console.log(results);
    return results;
};

export const findById = async function(id_persona) {
    console.log("------------service------------");
    let results= await modelPersona.findById(id_persona);
    return results;
};
