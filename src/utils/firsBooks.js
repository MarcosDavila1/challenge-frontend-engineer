/**
 * Esta función hace un fetch a una api externa y devuelve un array de libros con sus datos.
 * @returns {Array} Array de libros.
 */

async function landingBooks(){
    const response = await fetch(process.env.REACT_APP_API_SEARCH)
    const result = await response.json()
    return result.books
};

export default landingBooks;