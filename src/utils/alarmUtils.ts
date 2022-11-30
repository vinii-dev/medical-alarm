export const createInitialAlarm = () => ({
  date: new Date(),
  weekDays: {
    Seg: true,
    Ter: true,
    Qua: true,
    Qui: true,
    Sex: true,
    Sab: true,
    Dom: true,
  },
});