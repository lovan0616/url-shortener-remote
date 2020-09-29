function generateScram() {
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  const upperCase = lowerCase.toUpperCase()
  const number = '0123456789'
  let scram = ''
  const collection = (lowerCase.concat(upperCase, number)).split('')

  for (let i = 0; i < 5; i++) {
    let index = Math.floor(Math.random() * collection.length)
    scram = scram.concat(collection[index].split())
  }
  return scram
}