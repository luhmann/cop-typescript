export function log(message: string): void {
  const logContainer = document.querySelector('.log')

  if (logContainer) {
    logContainer
      .insertAdjacentHTML('beforeend', `<div class="alert alert-info">${message}</div>`);
  }
}
