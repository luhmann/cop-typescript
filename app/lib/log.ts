export function log(message: string, level = 'info'): void {
  const logContainer = document.querySelector('.log')

  if (logContainer) {
    logContainer.insertAdjacentHTML('beforeend', `<div class="alert alert-${level}">${message}</div>`);
  }

}
