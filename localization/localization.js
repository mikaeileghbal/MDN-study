const btnDate = document.getElementById("btnDate");
const inputDate = document.getElementById("date");

const btnTime = document.getElementById("btnTime");
const inputTime = document.getElementById("time");

btnDate.addEventListener("click", (e) => {
  const now = new Date();
  console.log(now);

  const localDate = new Intl.DateTimeFormat("fa-IR", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  inputDate.value = localDate.format(now);
});

btnTime.addEventListener("click", (e) => {
  const now = new Date();
  console.log(now);

  inputTime.value = now.toLocaleTimeString("en-US", {
    timeZone: "Europe/Berlin",
    timeStyle: "medium",
    hourCycle: "h24",
  });
});
