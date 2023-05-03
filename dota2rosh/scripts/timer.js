window.onload = () => {
    const button = document.querySelector('#rosh-start-btn')
    const buttonTor = document.querySelector('#tor-start-btn')
    const buttonWhisRunLot = document.querySelector('#rune-start-btn')

    let countdown
    let countdownTor
    let countdownWhisdom
    let countdownRuneLot
    let timeRate = 1000
    button.addEventListener("click", () => {
          clearInterval(countdown);
          startTimer();
        });

      buttonTor.addEventListener("click", () => {
        clearInterval(countdownTor);
        startTimerTor();
      });

      buttonWhisRunLot.addEventListener("click", () => {
        clearInterval(countdownWhisdom);
        clearInterval(countdownRuneLot);
        startTimerWhisdom()
        startTimerRuneLot()
      });


// Roshan timer
function startTimer() {
    const field = document.querySelector("#rosh-time-field")
    field.innerHTML = `11:00`
    field.classList.add("timer-field-second")
    field.classList.remove("timer-field")
    field.classList.remove("timer-field-thrid");
    let timeLeft = 11 * 60 - 1; // 11 minutes in seconds
      countdown = setInterval(() => {
      const minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;
      // add leading zero to seconds if necessary
      if (seconds < 10) {
        seconds = "0" + seconds;
      }

    if (minutes <= 2) {
        field.classList.add("timer-field-thrid");
        field.classList.remove("timer-field-second")
        field.classList.remove("timer-field")
    }

    field.innerHTML = `${minutes}:${seconds}`
    if (timeLeft === 0) {
        clearInterval(countdown);
        field.innerHTML = "&#x2713"
        field.classList.add("timer-field")
        field.classList.remove("timer-field-thrid");
        field.classList.remove("timer-field-second")
      } else {
        timeLeft--;
      }
    }, timeRate);

}

function startTimerTor() {
  const field = document.querySelector("#tor-time-field")
  field.innerHTML = `10:00`
  field.classList.add("timer-field-second")
  field.classList.remove("timer-field")
  let timeLeft = 10 * 60 - 1; // 11 minutes in seconds

    countdownTor = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    // add leading zero to seconds if necessary
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

  field.innerHTML = `${minutes}:${seconds}`

  if (timeLeft === 0) {
      clearInterval(countdownTor);
      field.innerHTML = "&#x2713"
      field.classList.add("timer-field")
      field.classList.remove("timer-field-second")
    } else {
      timeLeft--;
    }
  }, timeRate);

}

function startTimerWhisdom() {
  const field = document.querySelector("#whisdom-time-field")
  field.innerHTML = `7:00`
  let timeLeft = 7 * 60 - 1; // 11 minutes in seconds

    countdownWhisdom = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    // add leading zero to seconds if necessary
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

  field.innerHTML = `${minutes}:${seconds}`

  if (timeLeft === 0) {
      clearInterval(countdownWhisdom);
      startTimerWhisdom()
    } else {
      timeLeft--;
    }
  }, timeRate);

}

function startTimerRuneLot() {
  const field = document.querySelector("#bountlot-time-field")
  field.innerHTML = `3:00`
  let timeLeft = 3 * 60 - 1; // 11 minutes in seconds

    countdownRuneLot = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    // add leading zero to seconds if necessary
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

  field.innerHTML = `${minutes}:${seconds}`

  if (timeLeft === 0) {
      clearInterval(countdownRuneLot);
      startTimerRuneLot()
    } else {
      timeLeft--;
    }
  }, timeRate);

}

}