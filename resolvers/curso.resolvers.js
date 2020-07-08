;
'use strict'

const cursos = [
    {
        id: '1',
        titulo: 'libro 1',
        profesor: 'Juan Silva',
        descripcion: 'el nuevo mundo',
        genero: 'accion'
    },
    {
        id: '2',
        titulo: 'libro 2',
        profesor: 'Emy',
        descripcion: 'Rose',
        genero: 'drama'
    }
]
module.exports = {
    Query:{
        getCursos: () =>{
            return cursos
        }
    }
}