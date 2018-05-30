'use strict';

module.exports = (joi) => ({
    name: 'array',
    base: joi.array(),
    coerce(value, state, options) {
        if (!value) {
            return [];
        }

        if (Array.isArray(value) || value instanceof Array) {
            return value;
        }

        if (options.convert && typeof value === 'string') {
            return value.split(this._flags.separator, this._flags.limit);
        }

        return value;
    },
    rules: [
        {
            name: 'separator',
            description(params) {
                return `Should split the provided string on "${params.separator}"`;
            },
            params: {
                separator: joi.string()
                    .required()
                    .min(1),
                limit: joi.number()
                    .optional()
                    .min(0)
            },
            setup(params) {
                this._flags.separator = params.separator;
                this._flags.limit = params.limit;
            },
            validate(params, value, state, options) {
                // No-op just to enable description
                return value;
            }
        }
    ]
});