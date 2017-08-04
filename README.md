# React Generators

This repo houses a series of very basic generators for React files. It currently supports generating a regular class or functional component.

## Usage

```
$ node path/to/index.js --name='MyComponentsName' --type='function' --path='path/for/output/relative/to/__dirname'

# output
import PropTypes from 'prop-types';
import React from 'react';

const MyComponentsName = props => {

};

MyComponentsName.propTypes = {

};

export default MyComponentsName;
```

## Why?

So you don't have to type that all out by hand anymore.
