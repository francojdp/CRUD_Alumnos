const form = document.getElementById('formulario')
const button = document.getElementById('submitButton')

const dni = document.getElementById('dni')
const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const curso = document.getElementById('curso')


const formIsValid = {
    dni: false,
    nombre: false,
    apellido: false,
    curso: false
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateForm()
})

dni.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) formIsValid.dni = true
})

nombre.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) formIsValid.nombre = true
})

apellido.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) formIsValid.apellido = true
})

curso.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) formIsValid.curso = true
})

const validateForm = () => {
    const formValues = Object.values(formIsValid)
    const valid = formValues.findIndex(value => value == false)
    if(valid == -1) form.submit()
    else alert('No se pudo cargar el formulario. Verifique que todos los datos del alumno estén completos.')
}
