# SRCG (Simple React Component Generator)

This is an extremely basic generator for React components. It currently supports generating a regular class or functional component. It was designed to take away a little bit of the boilerplate you need when making a bunch of components.

## Install

```
$ npm install -g srcg
```

_Prefers global installation, but it should also work local to a project._

## Example Usage

```
$ srcg --name 'MyComponentsName' --type 'function' --path 'js/components --connected'
```

## Options

### name

The name of the Component, which is used as the variable/class name and the default export name.

### type

Either `'function'` or `'class'` (default is `'class'`).

When `'function'` output is

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

### path

The output path, relative to the current working directory.

### connected

Pass this to create a class that is wrapped with `connect` and `mapStateToProps` (a la `react-redux`)

## Why?

Because I was tired of writing `import PropTypes from 'prop-types'` 20 times a day.
