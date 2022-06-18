// 6. Функция-банкомат принимает параметром целое число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено

// Д.З.:

const getBanknoteList = (amountOfMoney)=> {
  const banknotes = [1000, 500, 100, 50, 20, 10, 2, 1]
    .sort((a, b) => a - b)
    .reverse()
  let numberOfBanknotes = []
  for (let i = 0; i < banknotes.length; i++){
    debugger
    if(amountOfMoney >= banknotes[i]){
      amountOfMoney = amountOfMoney - banknotes[i]
      numberOfBanknotes.push(banknotes[i])
      i = i -1
    }

  }
  return numberOfBanknotes
}
getBanknoteList(2501)

// const btnHandler = getBanknoteList(1500)
