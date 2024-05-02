import { isAfter } from 'date-fns/isAfter';
import { isBefore } from 'date-fns/isBefore';
import { isValid } from 'date-fns/isValid';
import {
  alphaNumRegex,
  alphaRegex,
  alphaSpaceRegex,
  emailRegex,
  kebabCaseRegex,
  objectIdHexRegexp,
  urlRegex,
} from './regex';
import { Primitives } from './validationTypes';

export default class FieldValidator {
  private fieldToTest?: Primitives;
  private fieldName: string;
  private displayName: string;
  fieldHasMultipleValidators = false;
  oneOfValidatorsIsClean = false;
  multipleValidatorsError?: {
    message: string;
    fields: { fieldName: string; message: string }[];
  } = undefined;

  error?: {
    message: string;
    fields: { fieldName: string; message: string }[];
  } = undefined;

  constructor(
    fieldToTest: Primitives,
    fieldName: string,
    displayName?: string,
  ) {
    this.fieldToTest = fieldToTest;
    this.fieldName = fieldName;
    this.displayName = displayName ?? fieldName;
  }
  private isStringType(field: Primitives = this.fieldToTest): field is string {
    if (field == null) return false;
    if (typeof field === 'string') return true;

    this.error = {
      message: 'Validation error !',
      fields: [
        ...(this.error?.fields || []),
        {
          fieldName: this.fieldName,
          message: `${this.displayName} is not a valid string`,
        },
      ],
    };

    return false;
  }

  private isDateType(field: Primitives = this.fieldToTest): field is Date {
    if (field == null || typeof field === 'boolean') return false;
    if (field instanceof Date) return true;
    try {
      this.fieldToTest = new Date(field);

      return true;
    } catch (error) {
      this.error = {
        message: 'Validation error!',
        fields: [
          ...(this.error?.fields || []),
          {
            fieldName: this.fieldName,
            message: `${this.displayName} is not a valid date`,
          },
        ],
      };

      return false;
    }
  }
  private isNumberType(field: Primitives = this.fieldToTest): field is number {
    if (field == null) return false;
    if (typeof field === 'number') return true;
    if (!Number.isNaN(Number(field))) {
      return true;
    }
    this.error = {
      message: 'Validation error !',
      fields: [
        ...(this.error?.fields || []),
        {
          fieldName: this.fieldName,
          message: `${this.displayName} is not a number`,
        },
      ],
    };
    return false;
  }
  isEmail() {
    if (!this.isStringType(this.fieldToTest)) return this;
    if (!emailRegex.test(this.fieldToTest))
      this.error = {
        message: 'Validation error!',
        fields: [
          ...(this.error?.fields || []),
          {
            fieldName: this.fieldName,
            message: `${this.displayName} doit être une adresse email valide`,
          },
        ],
      };

    return this;
  }
  or() {
    this.fieldHasMultipleValidators = true;
    if (this.error) {
      this.multipleValidatorsError = {
        message: 'One or more of the validators failed',
        fields: [
          ...(this.multipleValidatorsError?.fields || []),
          this.error.fields[0],
        ],
      };
      this.error = undefined;
    } else {
      this.oneOfValidatorsIsClean = true;
    }

    return this;
  }
  exists() {
    if (this.fieldToTest == null)
      this.error = {
        message: 'Validation error!',
        fields: [
          ...(this.error?.fields || []),
          {
            fieldName: this.fieldName,
            message: `${this.displayName} not found`,
          },
        ],
      };

    return this;
  }
  isBoolean() {
    if (typeof this.fieldToTest !== 'boolean')
      this.error = {
        message: 'Validation error!',
        fields: [
          ...(this.error?.fields || []),
          {
            fieldName: this.fieldName,
            message: `${this.displayName} should be boolean`,
          },
        ],
      };

    return this;
  }

  isInArrayOfStrings(paramArray: string[]) {
    if (!this.isStringType(this.fieldToTest)) return this;

    if (!paramArray.includes(this.fieldToTest))
      this.error = {
        message: 'Validation error!',
        fields: [
          ...(this.error?.fields || []),
          {
            fieldName: this.fieldName,
            message: `${
              this.fieldName
            } should be one of the following values [${paramArray.join(', ')}]`,
          },
        ],
      };

    return this;
  }
  isAlpha() {
    if (!this.isStringType(this.fieldToTest)) return this;
    if (!alphaRegex.test(this.fieldToTest))
      this.error = {
        message: 'Validation error!',
        fields: [
          ...(this.error?.fields || []),
          {
            fieldName: this.fieldName,
            message: `${this.displayName} can only contain letters`,
          },
        ],
      };

    return this;
  }

  isKebabCase() {
    if (!this.isStringType(this.fieldToTest)) return this;

    if (!kebabCaseRegex.test(this.fieldToTest))
      this.error = {
        message: 'Validation error!',
        fields: [
          ...(this.error?.fields || []),
          {
            fieldName: this.fieldName,
            message: `${this.displayName} must contain only lower-case letters, numbers and hyphens`,
          },
        ],
      };

    return this;
  }

  isValidObjectId() {
    if (!this.isStringType(this.fieldToTest)) return this;

    if (!objectIdHexRegexp.test(this.fieldToTest))
      this.error = {
        message: 'Validation error!',
        fields: [
          ...(this.error?.fields || []),
          {
            fieldName: this.fieldName,
            message: `${this.displayName} is not a valid ObjectId`,
          },
        ],
      };

    return this;
  }

  isAlphaSpace() {
    if (!this.isStringType(this.fieldToTest)) return this;
    if (!alphaSpaceRegex.test(this.fieldToTest))
      this.error = {
        message: 'Validation error!',
        fields: [
          ...(this.error?.fields || []),
          {
            fieldName: this.fieldName,
            message: `${this.displayName} must contain only letters and spaces`,
          },
        ],
      };

    return this;
  }

  isAlphaNum() {
    if (!this.isStringType(this.fieldToTest)) return this;
    if (!alphaNumRegex.test(this.fieldToTest))
      this.error = {
        message: 'Validation error!',
        fields: [
          ...(this.error?.fields || []),
          {
            fieldName: this.fieldName,
            message: `${this.displayName} must contain only letters and numbers`,
          },
        ],
      };

    return this;
  }

  maxLength(length: number) {
    if (!this.isStringType(this.fieldToTest)) return this;
    if (this.fieldToTest.length > length)
      this.error = {
        message: 'Validation error!',
        fields: [
          ...(this.error?.fields || []),
          {
            fieldName: this.fieldName,
            message: `${this.displayName} must not exceed ${length} characters`,
          },
        ],
      };

    return this;
  }

  minLength(length: number) {
    if (!this.isStringType(this.fieldToTest)) return this;
    if (this.fieldToTest.length < length)
      this.error = {
        message: 'Validation error!',
        fields: [
          ...(this.error?.fields || []),
          {
            fieldName: this.fieldName,
            message: `${this.displayName} must have at least ${length} characters`,
          },
        ],
      };

    return this;
  }

  isPasswordMatch(password: string) {
    if (!this.isStringType(this.fieldToTest)) return this;
    if (this.fieldToTest !== password)
      this.error = {
        message: 'Validation error!',
        fields: [
          ...(this.error?.fields || []),
          {
            fieldName: this.fieldName,
            message: `${this.displayName} must be identical to the password`,
          },
        ],
      };

    return this;
  }

  isUrl() {
    if (!this.isStringType(this.fieldToTest)) return this;
    if (!urlRegex.test(this.fieldToTest))
      this.error = {
        message: 'Validation error!',
        fields: [
          ...(this.error?.fields || []),
          {
            fieldName: this.fieldName,
            message: `${this.displayName} must be a valid url`,
          },
        ],
      };

    return this;
  }

  //date
  isDate() {
    if (!(this.isDateType(this.fieldToTest) && isValid(this.fieldToTest)))
      this.error = {
        message: 'Validation error!',
        fields: [
          ...(this.error?.fields || []),
          {
            fieldName: this.fieldName,
            message: `${this.displayName} must be a valid date`,
          },
        ],
      };

    return this;
  }

  isBeforDate(maxDate: Date) {
    if (!this.isDateType(this.fieldToTest)) return this;
    if (isAfter(this.fieldToTest, maxDate))
      this.error = {
        message: 'Validation error!',
        fields: [
          ...(this.error?.fields || []),
          {
            fieldName: this.fieldName,
            message: `${this.displayName} must be before ${maxDate}.`,
          },
        ],
      };

    return this;
  }

  isAfterDate(minDate: Date) {
    if (!this.isDateType(this.fieldToTest)) return this;

    if (isBefore(this.fieldToTest, minDate))
      this.error = {
        message: 'Validation error!',
        fields: [
          ...(this.error?.fields || []),
          {
            fieldName: this.fieldName,
            message: `${this.displayName} must be after ${minDate}`,
          },
        ],
      };

    return this;
  }

  isNumber() {
    if (!this.isNumberType(this.fieldToTest)) return this;
    const fieldToTest = Number(this.fieldToTest);

    if (Number.isNaN(fieldToTest))
      this.error = {
        message: 'Validation error!',
        fields: [
          ...(this.error?.fields || []),
          {
            fieldName: this.fieldName,
            message: `${this.displayName} must be a valid number`,
          },
        ],
      };

    return this;
  }

  isLessThanNumber(max: number) {
    if (!this.isNumberType(this.fieldToTest)) return this;
    const fieldToTest = Number(this.fieldToTest);

    if (fieldToTest > max)
      this.error = {
        message: 'Validation error!',
        fields: [
          ...(this.error?.fields || []),
          {
            fieldName: this.fieldName,
            message: `${this.displayName}  must be less than ${max}`,
          },
        ],
      };

    return this;
  }

  isBiggerThanNumber(min: number) {
    if (!this.isNumberType(this.fieldToTest)) return this;
    const fieldToTest = Number(this.fieldToTest);

    if (fieldToTest < min)
      this.error = {
        message: 'Validation error!',
        fields: [
          ...(this.error?.fields || []),
          {
            fieldName: this.fieldName,
            message: `${this.displayName} must be greater than ${min}`,
          },
        ],
      };

    return this;
  }

  isBetween({ min, max }: { min: number; max: number }) {
    if (!this.isNumberType(this.fieldToTest)) return this;
    const fieldToTest = Number(this.fieldToTest);

    if (!(fieldToTest > min && fieldToTest < max)) {
      this.error = {
        message: 'Validation error!',
        fields: [
          ...(this.error?.fields || []),
          {
            fieldName: this.fieldName,
            message: `${this.displayName} should be between ${min} and ${max} `,
          },
        ],
      };
    }

    return this;
  }
}
