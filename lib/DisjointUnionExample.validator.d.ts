import Ajv = require('ajv');
import {
  EntityTypes,
  EntityOne,
  EntityTwo,
  Entity,
  Value,
} from './DisjointUnionExample';
export declare const ajv: Ajv.Ajv;
export {EntityTypes, EntityOne, EntityTwo, Entity, Value};
export declare const Schema: {
  $schema: string;
  definitions: {
    Entity: {
      else: {
        else: {
          else: {
            properties: {
              type: {
                enum: string[];
                type: string;
              };
            };
            required: string[];
          };
          if: {
            properties: {
              type: {
                enum: string[];
                type: string;
              };
            };
            required: string[];
          };
          then: {
            defaultProperties: never[];
            properties: {
              baz: {
                type: string;
              };
              type: {
                enum: string[];
                type: string;
              };
            };
            required: string[];
            type: string;
          };
        };
        if: {
          properties: {
            type: {
              enum: string[];
              type: string;
            };
          };
          required: string[];
        };
        then: {
          $ref: string;
        };
      };
      if: {
        properties: {
          type: {
            enum: string[];
            type: string;
          };
        };
        required: string[];
      };
      then: {
        $ref: string;
      };
    };
    EntityOne: {
      defaultProperties: never[];
      properties: {
        foo: {
          type: string;
        };
        type: {
          enum: string[];
          type: string;
        };
      };
      required: string[];
      type: string;
    };
    EntityTwo: {
      defaultProperties: never[];
      properties: {
        bar: {
          type: string;
        };
        type: {
          enum: string[];
          type: string;
        };
      };
      required: string[];
      type: string;
    };
    EntityTypes: {
      enum: string[];
      type: string;
    };
    Value: {
      else: {
        else: {
          else: {
            properties: {
              number: {
                enum: number[];
                type: string;
              };
            };
            required: string[];
          };
          if: {
            properties: {
              number: {
                enum: number[];
                type: string;
              };
            };
            required: string[];
          };
          then: {
            defaultProperties: never[];
            properties: {
              baz: {
                type: string;
              };
              number: {
                enum: number[];
                type: string;
              };
            };
            required: string[];
            type: string;
          };
        };
        if: {
          properties: {
            number: {
              enum: number[];
              type: string;
            };
          };
          required: string[];
        };
        then: {
          defaultProperties: never[];
          properties: {
            bar: {
              type: string;
            };
            number: {
              enum: number[];
              type: string;
            };
          };
          required: string[];
          type: string;
        };
      };
      if: {
        properties: {
          number: {
            enum: number[];
            type: string;
          };
        };
        required: string[];
      };
      then: {
        defaultProperties: never[];
        properties: {
          foo: {
            type: string;
          };
          number: {
            enum: number[];
            type: string;
          };
        };
        required: string[];
        type: string;
      };
    };
  };
};
export declare function validate(
  typeName: 'EntityTypes',
): (value: unknown) => EntityTypes;
export declare function validate(
  typeName: 'EntityOne',
): (value: unknown) => EntityOne;
export declare function validate(
  typeName: 'EntityTwo',
): (value: unknown) => EntityTwo;
export declare function validate(
  typeName: 'Entity',
): (value: unknown) => Entity;
export declare function validate(typeName: 'Value'): (value: unknown) => Value;
