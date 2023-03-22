export const ExampleTypeSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  defaultProperties: [],
  properties: {
    answer: {
      default: 42,
      type: 'number',
    },
    email: {
      type: 'string',
    },
    value: {
      type: 'string',
    },
  },
  required: ['answer', 'value'],
  type: 'object',
};
