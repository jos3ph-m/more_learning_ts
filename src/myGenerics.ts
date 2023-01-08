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