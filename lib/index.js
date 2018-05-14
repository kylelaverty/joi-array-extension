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
            return value.split(this._flags.seperator, this._flags.limit);
        }

        return value;
    },
    rules: [
        {
            name: 'seperator',
            description(params) {
                return `Should split the provided string on "${params.seperator}"`;
            },
            params: {
                seperator: joi.string()
                    .required()
                    .min(1),
                limit: joi.number()
                    .optional()
                    .min(0)
            },
            setup(params) {
                this._flags.seperator = params.seperator;
                this._flags.limit = params.limit;
            },
            validate(params, value, state, options) {
                // No-op just to enable description
                return value;
            }
        }
    ]
});