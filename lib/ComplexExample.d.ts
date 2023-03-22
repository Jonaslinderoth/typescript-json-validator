export declare enum MyEnum {
  ValueA = 0,
  ValueB = 1,
  ValueC = 2,
}
export interface TypeA {
  id: number;
  value: string;
}
export interface TypeB {
  id: number | null;
  /**
   * @format date-time
   */
  value: string | null;
}
export interface RequestA {
  query: TypeA;
  body: TypeB;
  params: {
    e: MyEnum;
  };
}
export interface RequestB {
  query: TypeA;
}
