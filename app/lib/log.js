export function log(message, level = 'info') {
  document
    .querySelector('.log')
    .insertAdjacentHTML('beforeend', `<div class="alert alert-${level}">${message}</div>`);
}
