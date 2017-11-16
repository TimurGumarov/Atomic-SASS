# Atomic-SASS
#### SASS version of ACSS (Atomic CSS).
> v0.1.0 Not good for work.

Inspired by lecture about Atomic CSS and asked myself “What if to combine in with SASS? Variables, functions, mixins and ACSS... Sounds good!”

## Logic of v0.1
Add classes in HTML. For example like this (not ACSS formating now).
```html
<div id="firstDiv" class="d-b p-r bg-#333 c-white"></div>
<div id="secondDiv" class="d-ib p-a bg-#333 c-white mt-30px"></div>
```

In `.sass` file you can use this formating. With variables, functions, mixins and other stuff.
I recomend to use `.sass` becase it will be more comfortable to write `+d(b)` than `@include d(b)`.
```sass
// Content
// - #firstDiv
+d(b)
+p(r)
+bg(#333)
+c(white)
// - #secondDiv
+d(ib)
+p(a)
+bg(#333)
+c(white)
+mt(30px)
```

This `.sass` will compiled to this `.css`.
```css
.d-b {
  display; block;}
.p-r {
  position: relative;}
.bg-#333 {
  background: #333;}
.c-white {
  color: white;}
.d-ib {
  display: inline-block;}
.p-a {
  position: absolute;}
.mt-30px {
  margin-top: 30px;}
```
As you can see you can duplicate classes in `.sass` and it will be no duplicates of declarations in `.css`.
## Plans to v1.0
Implement all ACSS logic and formating in SASS. And combine it with my own vision of formating.