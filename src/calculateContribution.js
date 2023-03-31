
function calculateContribution (content) {
  const [line1, line2, line3] = content.split('\n')
  const data = line2.trim().split(' ')
  const totalAnaContribution = Number.parseInt(line3, 10)
  const indexAnaDidnotEat = Number.parseInt(line1.trim().split(' ')[1])
  const totalItems = data.reduce((acum, item) => acum += Number.parseInt(item, 10), 0)
  const totalItemsWithOutAna = data.filter((data, index) => index !== indexAnaDidnotEat).reduce((acum, item) => acum += Number.parseInt(item, 10), 0)

  let result = 'Bon Appetit'
  const total = totalItemsWithOutAna / 2

  if (total !== totalAnaContribution) {
    result = `${(totalItems / 2) - total}`
  }

  return result
}

export default calculateContribution
