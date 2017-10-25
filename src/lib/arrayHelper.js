export const immutableMove = (array, from, to) => {
  const copy = [...array] // make a copy to ork on
  const el = copy.splice(from, 1)[0] // remove our element from the copy and store it
  return [...copy.slice(0, to), el, ...copy.slice(to)] // insert the element at the to position
}
