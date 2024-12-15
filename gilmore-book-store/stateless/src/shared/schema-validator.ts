import { ValidationError } from '@errors/validation-error';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

export function schemaValidator(
  schema: Record<string, string | number | boolean | unknown>,
  body: Record<string, string | number | boolean | unknown>,
) {
  const ajv = new Ajv({
    allErrors: true,
  });

  addFormats(ajv);
  ajv.addSchema(schema);

  const valid = ajv.validate(schema, body);

  if (!valid) {
    const errorMessage = JSON.stringify(ajv.errors);
    throw new ValidationError(errorMessage);
  }
}
