export declare enum EntityTypes {
  TypeOne = 'TypeOne',
  TypeTwo = 'TypeTwo',
  TypeThree = 'TypeThree',
}
export interface EntityOne {
  type: EntityTypes.TypeOne;
  foo: string;
}
export interface EntityTwo {
  type: EntityTypes.TypeTwo;
  bar: string;
}
export declare type Entity =
  | EntityOne
  | EntityTwo
  | {
      type: EntityTypes.TypeThree;
      baz: number;
    };
export declare type Value =
  | {
      number: 0;
      foo: string;
    }
  | {
      number: 1;
      bar: string;
    }
  | {
      number: 2;
      baz: string;
    };
