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

  // unknown
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any
  let anything: any = 0;
  anything = "hello";

  // void
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // Bad!

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
  }

  // object
  let obj: object; // Bad!
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
