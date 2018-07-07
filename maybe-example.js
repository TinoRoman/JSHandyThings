/**
 * In this example we need to find oldest man whenever it has or has not a name
 */

const R = require('ramda')
const Maybe = require('maybe')

const toMaybeUser = ( { age, name, sex } ) => ( { 
  age  : Maybe( age ),
  name : Maybe( name ),
  sex  : Maybe( sex ),
} )

const isAMan = ( user ) => user.sex.isJust()
  ? user.sex.value() === 'M'
  : false

const hasAge = ( user ) =>  user.age.isJust()

const manWithName = R.both( isAMan, hasAge )

const getName = ( user ) => user.name.isJust()
  ? user.name.value()
  : 'No name'

const getOldest = ( userA, userB ) => userA.age > userB.age
  ? userA
  : userB

const getOldestMan = ( users ) => users
  .map( toMaybeUser )
  .filter( manWithName )
  .reduce( getOldest )

const users = [
  { age: 17,   name: 'Tom',  sex: 'M' },
  { age: null, name: 'Kate', sex: 'F' },
  { age: 37,   name: null,   sex: 'M' }
]

const oldestMan = R.pipe( getOldestMan, getName )( users )

console.log( oldestMan )
