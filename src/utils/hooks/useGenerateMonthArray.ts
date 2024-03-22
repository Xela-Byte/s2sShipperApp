const useGenerateMonthArray = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const monthArray = [];

  const lastDay = new Date(year, month, 0).getDate();

  for (let day = 1; day <= lastDay; day++) {
    const formattedDate = `${month}-${day}`;

    monthArray.push(formattedDate);
  }

  return monthArray;
};

export function generateRandomArray() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const randomArray = [];

  const lastDay = new Date(year, month, 0).getDate();

  for (let day = 1; day <= lastDay; day++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Generates random number between 1 and 100
    randomArray.push(randomNumber);
  }

  return randomArray;
}

export default useGenerateMonthArray;
