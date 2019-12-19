// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
   const newObj =  Object.assign({}, obj)
   newObj[key] = value
   return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
   obj[key] = value
   return obj
}

function deleteFromDriverByKey(driverObj, key) {
   const newObj = Object.assign({}, driverObj)
   delete newObj[key]
   return newObj
}

function destructivelyDeleteFromDriverByKey(driverObj, key) {
   delete driverObj[key]
   return driverObj
}
