# Windows JS

A window manager for your website style !

- Inspired by <a href="http://www.devjl.fr" target="_blank">devjl.fr</a>, for <a href="http://www.devjl.fr" target="_blank">devjl.fr</a>.
- To test it go <a href="https://camilleabella.github.io/Windows.js/" target="_blank">HERE</a> !
- To use this library, take the content of **./lib/**.
- This library is fast and light, make on full vanilla CSS & JS.
- CSS is simple to custom and more themes are coming !

<hr>

## Usage

### your-page.html

Add this code to your HTML head tag. To chose a theme, open the <a href="./themes/">`./themes/`</a> folder.

```html
<!-- Mandatory stylesheet -->
<link rel="stylesheet" href="windows.css">

<!-- Mandatory JS library -->
<script src="windows.js"></script>

<!-- Optional theme(s) that you have chosen -->
<script src="theme.js"></script>

<!-- Script in which you instantiate your windows -->
<script src="your-script.js"></script>
```

### your-script.js

Then instantiate your first window.  
All parameters are optional, enjoy !

```js
const
    x = Number, // left
    y = Number, // top
    width = Number,
    height = Number,
    options = {
        grab = Boolean, // show grab cursor while hovering header
        theme = String, // theme to use
        title = String, // title visible on top
        content = String, // HTML content of body
        style = String // StyleSheet of window (like real css file)
        ... /* custom options...
            You can add custom options if you use a special theme.
            like options.icon for Ubuntu 17 official theme.
        */
    };

new Window( x, y, width, height, options ) 
```

For example:

```js
new Window( 0, 0, 600, 300, {
    title: 'Windows.js — Test',
    content: `
        <h1> Hello World ! </h1>
    `,
    style: `
        h1 { 
            text-align: center; 
            padding: 15px;
            font-size: 38px;
            color: gray;
        }
    `
})
```

<hr>

## Create a theme

Using the `addTheme()` static method and populating CSS properties for each element of the window, you can create your own themes.

### addTheme method

```js
// Add new window theme
Window.addTheme(
    'Theme name', // name of your theme (unique name)
    'apple', // template of structore to use (or 'microsoft' & 'linux')
    styles // look the following example for details
)
```

### Example

By modifying only a few properties, you keep a theme almost identical to the default theme. This one is always read, it is just overwrite by the other themes. Like the constructor, all parameters are optional !

> Read <a href="./lib/window.css">`./lib/window.css`</a> to see the default theme source code !

```js
Window.addTheme( 'Default but red', 'apple', {

    // Styles

    window: { // base <div> of window
        /* 
            Name css properties like the 
            HTMLElement.style properties.
            like this : 
        */
        backgroundColor: 'red',
        color: 'white'
    },

    header: { /* title container */ 
        backgroundColor: 'white',
        color: 'red'
    },
    body: { /* content container */ },

    button: { /* for each button */ }, 

    close: { /* close button */ }, 
    close_hover: { /* close button hovered */ },

    minimize: { /* minimize button */ }, 
    minimize_hover: { /* minimize button hovered */ },

    fullscreen: { /* fullscreen button */ }, 
    fullscreen_hover: { /* fullscreen button hovered */ },

    title: { /* title side of header */ },
    buttons: { /* buttons side of header */ }
    
},{

    // Default options used on Window constructor if an option is missing

})
```

## Basic theme/template/css elements

Here are the basic elements understood by the CSS, usable in your templates and your themes.

- header
    - icon
    - title
    - buttons
        - close
        - minimize
        - fullscreen
- body
- footer