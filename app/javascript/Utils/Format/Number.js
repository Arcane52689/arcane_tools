

export function timePassed(seconds) {
  if (seconds < 60) {
    return `${Math.floor(seconds * 10) / 10} seconds`
  } else if (seconds < 3600) {
    return `${Math.floor(seconds / 60)} minutes ${Math.floor(seconds) % 60} seconds`
  } else {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let seconds = Math.floor(seconds % 60);
    return `${hours} hours, ${minutes} minutes, ${seconds} seconds`
  }
}