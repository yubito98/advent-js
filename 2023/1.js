function findFirstRepeated(gifts) {
    const repeated = gifts.filter((num, index) => gifts.indexOf(num) !== index );
    const result = repeated.length === 0 ? -1 : repeated[0];
    return result
  }

const giftIds = [1, 2, 3, 4]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3



