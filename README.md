## jQuery Placeholder
Yet another placeholder library. This project was initially written years ago
 out of frustration over other solutions that placed temporary values
 in the inputs which would conflict with form validation and libraries that
 were bloated attempting to satisfy every need with hundreds of configurable
 options.
 
jQuery Placeholder works by wrapping the input and injecting its own label
above the element. It will only apply itself when the browser does not natively support placholders and attempts to replicate the 
element style as closely as possible. 

Each element has a class that can be 
overridden if custom styles are needed. The placeholder library 
works best for responsive, bootstrap-like forms where inputs are 100% of the parent 
width and may require some style tweaks if that is not how the form is structured. 
 
This library was lost over time but resurrected after a recent project 
required older IE support and decided to open source it in the hopes of helping others
still dealing with the issue and make sure the code was in a place I could find
it again.


### Setup

```html
// add style reference
<link href="jquery.placeholder.css" rel="stylesheet" />

// add script reference
<script src="jquery.placeholder.js"></script>

// grab a beer. you earned it
```

