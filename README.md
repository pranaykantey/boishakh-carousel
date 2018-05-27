# Boishakh carousel
##### A simple carousel with jquery, and easy to use.
**Boishakh slider** is made to create simple image carousel.
### How to use?
#### include all required css and js files.
##### *JavaScript files*
```
<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js" />
```
_After includint jquery include Boishakh carousel JS file._
```
<script type="text/javascript" src="js/boishakh-carousel.js" />
```
##### *CSS file*
```
<link rel="stylesheet" href="css/style.css">
```
###### _Boishakh carousel is a jquery plugin and dependent on jquery_

```javascript
$('.boishakh-carousel').boishakhCarousel();
```
#### Use html like this
```html
<div class="boishakh-carousel">
  <div class="bc-item">
    <p>First slide content goes here</p>
  </div>
  <div class="bc-item">
    <p>Second slide content goes here</p>
  </div>
  <div class="bc-item">
    <p>Third slide content goes here</p>
  </div>
  <div class="bc-item">
    <p>Fourth slide content goes here</p>
  </div>
</div>
````
### Available Options:
_Available options with default value_
```javascript
  items: 2,
  itemsBigTablet: 3,
  itemsOnTablet: 2,
  itemsOnMobile: 3,
  margin: 2,
  pauseOnHover: true,
  autoStructure: true,
  background: '#ffffff',
  prev: 'Before',
  next: 'After'
```
###### **_Thanks to all_**