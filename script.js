// aktuelles Datum
function currentDay() {
    const Wochentag = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    const Monate = ['Jänner', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'October', 'November', 'Dezember'];
    const jetzt = new Date();
    const dayOfWeek = Wochentag[jetzt.getDay()];
    const dayOfMonth = jetzt.getDate();
    const month = Monate[jetzt.getMonth()];
    const year = jetzt.getFullYear(); 
    const dateString = `${dayOfWeek}, ${month} ${addLeadingZero(dayOfMonth)}, ${year}`;
    document.getElementById("currentDay").innerText = dateString;
  }
  
  // aktuelle Uhrzeit
  function currentTime() {
    const jetzt = new Date();
    const Stunde = addLeadingZero(jetzt.getHours());
    const Minute = addLeadingZero(jetzt.getMinutes());
    const Sekunde = addLeadingZero(jetzt.getSeconds()); 
    const timeString = `${Stunde}:${Minute}:${Sekunde}`;
    document.getElementById("currentTime").innerText = timeString;
  }
  
  // Null
  function addLeadingZero(value) {
    if (value < 10) {
      return `0${value}`;
    } else {
      return value.toString();
    }
  }
  
  // aktuelle Seite auf Browser geöffnet
  function timeOnPage() {
    const jetzt = new Date();
    const timeElapsed = jetzt - window.performance.timing.navigationStart;
    const Stunde = addLeadingZero(Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const Minute = addLeadingZero(Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60)));
    const Sekunde = addLeadingZero(Math.floor((timeElapsed % (1000 * 60)) / 1000));
    const timeString = `${Stunde}:${Minute}:${Sekunde}`;
    alert(`You have been on this page for  ${timeString}`);
  }
  
  // Aktualisieren
  function refresh() {
    location.reload();
  }
  