<!-- version -->
# API Reference
<!-- versionstop -->

<!-- toc -->

- [Rules](#rules)
  - [`array.separator(separator, limit?)`](#arrayseparator)

<!-- tocstop -->

# Rules

## `array.separator(separator, limit?)`

Used to seperate a string into an array:
- `separator` - string to seperate based on.
- `limit` - [Optional] - number to limit the length of the returned array.

```js
const schema = Joi.array().separator(',').items(...);
```

or if you want to limit the split results:

```js
const schema = Joi.array().separator(',', 2).items(...);
```