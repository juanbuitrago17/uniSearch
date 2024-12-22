
const planets = require('../data/planets.json');

export function searchInObjects(data, content) {
    return data.filter(item => {
        // Convertimos el texto a minúsculas para comparar de manera insensible a mayúsculas/minúsculas.
        const query = content.toLowerCase();
        
        // Verificamos si el contenido aparece en alguna de las propiedades clave.
        return (
            item.name.toLowerCase().includes(query) || // Coincidencia en el nombre
            item.description.toLowerCase().includes(query) // Coincidencia en la descripción
        );
    });
}
