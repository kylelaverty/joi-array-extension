'use strict';

module.exports = (joi) => ({
    name: 'string',
    base: joi.string(),
    coerce(value, state, options) {
        if (!value) {
            return value;
        }

        if (options.convert && typeof value === 'string') {
            return value.split(this._split.seperator, this._split.limit);
        }

        return value;
    },
    rules: [
        {
            name: 'split',
            description(params) {
                return `Should split the provided string on "${params.seperator}"`;
            },
            params: {
                seperator: joi.string()
                    .required()
                    .min(1),
                limit: joi.number()
                    .optional()
            },
            setup(params) {
                this._split.seperator = params.seperator;
                this._split.limit = params.limit;
            },
            validate(params, value, state, options) {
                // No-op just to enable description
                return value;
            }
        }
    ]
});