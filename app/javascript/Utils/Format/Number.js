

export function timePassed(secondsPassed) {
  if (secondsPassed < 60) {
    return `${Math.floor(secondsPassed * 10) / 10} seconds`
  } else if (secondsPassed < 3600) {
    return `${Math.floor(secondsPassed / 60)} minutes ${Math.floor(secondsPassed) % 60} secondsPassed`
  } else {
    let hours = Math.floor(secondsPassed / 3600);
    let minutes = Math.floor((secondsPassed % 3600) / 60);
    let seconds = Math.floor(secondsPassed % 60);

    return `${hours} hours, ${minutes} minutes, ${seconds} seconds`
  }
}