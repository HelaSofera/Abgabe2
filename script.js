//aktuelles Datum
function currentDay() {
    const Wochentag = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
    const Monat = ['Jänner', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
    const jetzt = new Date();
    const Wochentage = Wochentag[jetzt.getUTCDay()];
    const Tag = jetzt.getUTCDate();
    const Monate = Monat[jetzt.getUTCMonth()];
    const Jahr = jetzt.getFullYear();
    const dateString = `${Wochentage}, ${Monate}, ${addLeadingZero(Tag)}, ${Jahr}`;
    document.getElementById("currentDay").innerText = dateString;
}
//aktuelle Uhrzeit
function currentTime() {
    const jetzt = new Date();
    const Stunde = addLeadingZero(jetzt.getUTCHours());
    const Minute = addLeadingZero(jetzt.getUTCMinutes());
    const Sekunde = addLeadingZero(jetzt.getUTCSeconds());
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
  
  // time on page mit alert
  function timeOnPage() {
    const jetzt = new Date();
    const timeOnPage = jetzt - window.PerformanceNavigationTiming;
    const Stunde = addLeadingZero(Math.floor((timeOnPage % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const Minute = addLeadingZero(Math.floor((timeOnPage % (1000 * 60 * 60)) / (1000 * 60)));
    const Sekunde = addLeadingZero(Math.floor((timeOnPage % (1000 * 60)) / 1000));
    const timeString = `${Stunde}:${Minute}:${Sekunde}`;
    window.alert(`You have been on this page for  ${timeString}`);
  }
  
  // Aktualisieren
  function refresh() {
    location.reload();
}