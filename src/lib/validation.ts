import {
    validate,
    ValidationError,
    ValidatorOptions
} from 'class-validator';

export default class Validation {

    /**
     * validates given object based `class-validation` module
     * @param object checked object
     * @param validatorOptions options
     * @returns promise of error message array
     */
    static async validate(
        object: object,
        validatorOptions?: ValidatorOptions
    ): Promise<string[]> {
        let options: ValidatorOptions = {
            validationError: {
                target: false,
                value: false
            },
            ...validatorOptions
        }

        return this.handle(
            await validate(object, options)
        );
    }

    protected static handle(results: ValidationError[]): string[] {
        let errors: string[] = [];

        for (const result of results) {
            if (result?.constraints) {
                for (const key in result.constraints) {
                    const error = result.constraints[key];
                    if (Object.prototype.hasOwnProperty.call(
                        result.constraints, key
                    )) {
                        errors.push(error);
                    }
                }
            }
        }

        return errors;
    }

}
