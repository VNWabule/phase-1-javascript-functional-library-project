function forEach(collection, callback) {
  for (let key in collection) {
    callback(collection[key], key, collection);
  }
  return collection;
}

function myMap(collection, callback) {
  let result = [];
  forEach(collection, (value, key, collection) => {
    result.push(callback(value, key, collection));
  });
  return result;
}

function myFilter(collection, callback) {
  let result = [];
  forEach(collection, (value, key, collection) => {
    if (callback(value, key, collection)) {
      result.push(value);
    }
  });
  return result;
}

function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue;
    forEach(collection, (value, key, collection) => {
        if (accumulator === undefined) {
        accumulator = value;
        } else {
        accumulator = callback(accumulator, value, key, collection);
        }
    });
    return accumulator;
    }

function myFind (collection, predicate) {
    for (let key in collection) {
        if (predicate(collection[key], key, collection)) {
        return collection[key];
        }
    }
    return undefined;
    }

function myEach (collection, callback) {
    for (let key in collection) {
        callback(collection[key], key, collection);
    }
    return collection;
    }

function mySize (collection) {
    let size = 0;
    for (let key in collection) {
        size++;
    }
    return size;
    }

function myFirst (array, n) {
    if (n === undefined) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
    }

function myLast (array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    } else {
        return array.slice(-n);
    }
    }

function myKeys (object) {
    let keys = [];
    for (let key in object) {
        keys.push(key);
    }
    return keys;
    }

function myValues (object) {
    let values = [];
    for (let key in object) {
        values.push(object[key]);
    }
    return values;
    }





