<!-- version -->
# API Reference
<!-- versionstop -->

<!-- toc -->

- [Rules](#rules)
  - [`string.split(seperator, limit?)`](#stringsplit)

<!-- tocstop -->

# Rules

## `string.split(seperator, limit?)`

Used to split a string into an array:
- `seperator` - string to seperate based on.
- `limit` - [Optional] - number to limit the length of the returned array.

```js
const schema = Joi.string().split(',').items(...);
```

or if you want to limit the split results:

```js
const schema = Joi.string().split(',', 2).items(...);
```