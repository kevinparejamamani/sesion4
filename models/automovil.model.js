import {Sequelize, DataTypes} from 'sequelize';
import orm from '../config/sequelize.js';
import {Tipo} from './tipo.model.js';
import {Marca} from './marca.model.js';
import {Persona} from './persona.model.js';

export const Automovil = orm.define('automovil', {
    id_automovil:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 30],
        }
    },
    precio:{
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate: {
            isDecimal: true
        }
    },
    activo:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    fecharegistro:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
        validate: {
            isDate: true
        }
    },
    id_marca:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true
        },
        references:{
            model:Marca,
            key:'id_marca'
        }
    },
    id_tipo:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true
        },
        references:{
            model:Tipo,
            key:'id_tipo'
        }
    },
    id_persona:{
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: true
        },
        references:{
            model:Persona,
            key:'id_persona'
        }
    },
    archivo:{
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1, 100],
        }
    },
},{
    freezeTableName: true,
    tableName: 'automovil',
    timestamps: false,
});

Marca.hasMany(Automovil, {foreignKey:'id_marca'});
Automovil.belongsTo(Marca, {foreignKey:'id_marca'});

Tipo.hasMany(Automovil, {foreignKey:'id_tipo'});
Automovil.belongsTo(Tipo, {foreignKey:'id_tipo'});


export const connect = async function() {
    await orm.authenticate();
    console.log("conexion establecida");
}

export const getAll = async function() {
    console.log("------------model------------");
    const results= await Automovil.findAll({
        include:[Marca, Tipo],
        where:{
            activo:true
        }
    });
    console.log(results);
    return results.map(u=>u.toJSON());
};

export const getById = async function(idAutomovil) {
    console.log("------------model------------");
    const results= await Automovil.findAll({
        include:[Marca, Tipo],
        where:{
            activo:true,
            id_automovil:idAutomovil
        }
    });
    console.log(results);
    return results.map(u=>u.toJSON());
};

export const create = async function(objAutomovil, id_persona) {
    try{
        const automovil= await Automovil.create({
            nombre:objAutomovil.nombre, 
            precio:objAutomovil.precio, 
            id_marca:objAutomovil.id_marca, 
            id_tipo:objAutomovil.id_tipo, 
            id_persona:id_persona
        });
        console.log(automovil);
        return automovil.toJSON().id_automovil;
    }catch(error){
        console.log("excepcion...");
        console.log(error);
        throw error;
    }
};


export const update = async function(id_automovil, objAutomovil) {
    try{
        const [updatedRows]= await Automovil.update({
            nombre:objAutomovil.nombre, 
            precio:objAutomovil.precio, 
            id_marca:objAutomovil.id_marca, 
            id_tipo:objAutomovil.id_tipo
        },{
            where:{
                id_automovil:id_automovil
            }
        });
        console.log(updatedRows);
        return updatedRows;
    }catch(error){
        console.log("excepcion...");
        console.log(error);
        throw error;
    }
};

export const deletes = async function(id_automovil) {
    try{
        const [updatedRows]= await Automovil.update({
            activo:false
        },{
            where:{
                id_automovil:id_automovil
            }
        });
        console.log(updatedRows);
        return updatedRows;
    }catch(error){
        console.log("excepcion...");
        console.log(error);
        throw error;
    }
};

export const getReporte = async function(preciobase) {
    console.log("------------model------------");
    const results= await orm.query('call bdprueba.get_reporte(?)',
        {
            replacements: [preciobase]
        }
    );
    console.log(results);
    return results;
};

export const updateArchivo = async function(id_automovil, filename) {
    try{
        const [updatedRows]= await Automovil.update({
            archivo:filename
        },{
            where:{
                id_automovil:id_automovil
            }
        });
        console.log(updatedRows);
        return updatedRows;
    }catch(error){
        console.log("excepcion...");
        console.log(error);
        throw error;
    }
};

