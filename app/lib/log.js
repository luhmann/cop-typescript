export function log(message) {
  document
    .querySelector('.log')
    .insertAdjacentHTML('beforeend', `<div class="alert alert-info">${message}</div>`);
}
