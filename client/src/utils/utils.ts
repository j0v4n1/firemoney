export const generateDate = (today: Date, daysToAdd: number) => {
  today.setDate(today.getDate() + daysToAdd);
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear().toString().slice(-2);
  const formattedDay = day < 10 ? '0' + day : day;
  const formattedMonth = month < 10 ? '0' + month : month;
  const generateMonth = () => {
    switch (formattedMonth) {
      case '01':
        return 'января';
      case '02':
        return 'февраля';
      case '03':
        return 'марта';
      case '04':
        return 'апреля';
      case '05':
        return 'мая';
      case '06':
        return 'июня';
      case '07':
        return 'июля';
      case '08':
        return 'августа';
      case '09':
        return 'сентября';
      case 10:
        return 'октября';
      case 11:
        return 'ноября';
      case 12:
        return 'декабря';
      default:
        return 'ошибка';
    }
  };
  return `${formattedDay} ${generateMonth()} 20${year}`;
};
