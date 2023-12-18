{
  /**
   * Javascript
   * Primitive: number, string, boolean, bigint, symbol, undefined
   * Object: function, ary......
   */

  // number
  const num: number = "d"; // type error!
  const number: number = 1; // ok!

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // Bad!!
  let age: number | undefined;
  age = undefined;
  age = 1;

  // null
  let person: null; // Bad!!
  let person2: string | null;
}
