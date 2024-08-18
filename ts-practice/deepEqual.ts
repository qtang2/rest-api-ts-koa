type Value =
  | number
  | string
  | boolean
  | null
  | undefined
  | { [key: string]: Value };

function deepEqual(a: Value, b: Value): boolean {
    if(a === b) return true
    if(typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) {
        if(Object.keys(a).length !== Object.keys(b).length) {
            return false
        }
        for( const key in a) {
            if(!b.hasOwnProperty(key) || !deepEqual(a[key], b[key as string])) {
                return false
            }
        }

        return true
    }
    return false
}

console.log(deepEqual({ name: "John", age: 30 }, { name: "John", age: 30 })); // true
console.log(deepEqual({ name: "John", age: 30 }, { name: "John", age: 31 })); // false
