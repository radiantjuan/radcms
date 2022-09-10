/**
 * Finds all the forms based on IDs
 * @param errors
 * @return void
 */
export const InvalidForms = (errors) => {
    for (let fieldId in errors) {
        document.getElementById(fieldId).classList.add('is-invalid');
        document.getElementById(fieldId + 'ValidationMessage').textContent = errors[fieldId];
    }
}

/**
 * Removes all the invalid indicator when submit
 *
 * @return void
 */
export const RemoveAllInvalidMessage = () => {
    for (let formIndex in document.getElementsByClassName('form-control')) {
        document.getElementsByClassName('form-control')[0].classList.remove('is-invalid');
    }
}
