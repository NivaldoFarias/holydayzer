import express from "express";

const app = express(),
  port = process.env.PORT || 3000,
  holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "2/28/2022", name: "Carnaval" },
    { date: "3/1/2022", name: "Carnaval" },
    { date: "3/2/2022", name: "Quarta-feira de Cinzas" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    {
      date: "8/5/2022",
      name: "Aniverário da cidade de João Pessoa (feriado local)",
    },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "10/18/2022", name: "Dia do Servidor Público" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" },
  ];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/holidays", (req, res) => {
  res.json(holidays);
});

app.get("/holidays/:month", (req, res) => {
  const month = req.params.month;
  const monthHolidays = holidays.filter((holiday) => {
    return holiday.date.split("/")[0] === month;
  });
  res.json(monthHolidays ? monthHolidays : []);
});

app.get("/is-today-holiday", (req, res) => {
  const today = new Date();
  const isHoliday = holidays.find(
    (holiday) => holiday.date === today.toLocaleDateString()
  );

  console.log(today.toLocaleDateString());
  res.send(
    isHoliday ? "Sim, hoje é nome-do-feriado" : "Não, hoje não é feriado"
  );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
