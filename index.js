// Write your solution in this file!
 var driver = { name: 'Fiat'};

 function updateDriverWithKeyAndValue(driver, key, value) {
    newdriver = {...driver}
    newdriver[key] = value
    return newdriver
 }

 function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
 }

function deleteFromDriverByKey(driver, key) {
    newdriver = Object.assign({}, driver);
    delete newdriver[key]
    return newdriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
