# SRCG (Simple React Component Generator)

This is an extremely basic generator for React components. It currently supports generating a regular class or functional component. It was designed to take away a little bit of the boilerplate you need when making a bunch of components.

## Example Usage

```
$ srcg --name='MyComponentsName' --type='function' --path='js/components'
```

## Options

### name

The name of the Component, which is used as the variable/class name and the default export name.

### type

Either `'function'` or `'class'` (default is `'class'`).

When `'function'` output is

### path

The output path, relative to the current working directory.

```
$ react-component-generator --name='MyComponentsName' --type='function' --path='js/components'

// MyComponentsName.js
import PropTypes from 'prop-types';
import React from 'react';

const MyComponentsName = props => {

};

MyComponentsName.propTypes = {

};

export default MyComponentsName;
```

When `'class'` output is

```
import PropTypes from 'prop-types';
import React from 'react';

class MyComponentsName extends React.Component {

}

MyComponentsName.propTypes = {

};

export default MyComponentsName;
```

## Why?

Because I was tired of writing `import PropTypes from 'prop-types'` 20 times a day.
