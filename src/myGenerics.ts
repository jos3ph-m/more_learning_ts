const score: Array<number> = []
const names: Array<string> = []


// this could be anything
function identityOne(val: boolean | number): boolean | number {
  return val
}

// this could be anything
function identityTwo(val: any):any{
  return val
}

// once we pass on something that value type is logged. 
function identityThree<Type>(val: Type): Type {
  return val
}

// for example
//identityThree(3)

// shortcut of identityThree
function identityFour<T>(val: T): T {
  return val
}

interface Bottle{
  brand: string,
  type: number
}

//identityFour<Bottle>({})

function getSearchProducts<T>(products: T[]): T {
  // do some database operations
  const myIndex = 3
  return products[myIndex]
}

const getMoreSearchProducts = <T,>(products: T[]): T => {
  // do some database operations
  const myIndex = 4
  return products[myIndex]
}