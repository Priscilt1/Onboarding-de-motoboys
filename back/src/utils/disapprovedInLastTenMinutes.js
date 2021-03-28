const differenceInMinutes = require('date-fns/differenceInMinutes')

function disapprovedInLastTenMinutes(user){
  const differenceInMinute = differenceInMinutes(
    Date.now(),
    user.updatedAt
  )
  
  const lastTenMinutes = (differenceInMinute < 10) 
  let disapprovedInLastTenMinutes = false
  if (user.status == 'disapproved' && lastTenMinutes) {
    disapprovedInLastTenMinutes = true
  }
  return disapprovedInLastTenMinutes
}

module.exports = disapprovedInLastTenMinutes