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
