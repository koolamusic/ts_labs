// using namespaces within files 

namespace calculate{
  export function schoolFees(term: number, fee: number) : number {
    return term*fee;
  }
}

// We have declared this name space and can import it into another file