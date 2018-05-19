function kittens() {
  kittens = ['Milo', 'Otis', 'Garfield']
}

kittens()

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var kitnew = [...kittens, name]
  return kitnew
}

function prependKitten(name){

}

function removeLastKitten() {

}

function removeFirstKitten() {

}
