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
  kittens = [...kittens, name]
  return kittens
}

function prependKitten(name){

}

function removeLastKitten() {

}

function removeFirstKitten() {

}
