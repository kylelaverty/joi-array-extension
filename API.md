<!-- version -->
# API Reference
<!-- versionstop -->

<!-- toc -->

- [Rules](#rules)
  - [`array.seperator(seperator, limit?)`](#arrayseperator)

<!-- tocstop -->

# Rules

## `array.seperator(seperator, limit?)`

Used to seperate a string into an array:
- `seperator` - string to seperate based on.
- `limit` - [Optional] - number to limit the length of the returned array.

```js
const schema = Joi.array().seperator(',').items(...);
```

or if you want to limit the split results:

```js
const schema = Joi.array().seperator(',', 2).items(...);
```