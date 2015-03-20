# bootstrap-pager

Bootstrap Pager plugin intended to be used 
with standard Pager component (http://getbootstrap.com/components/#pagination-pager).

Compatible with Bootstrap v3.1.1.

## Usage

### HTML:

```html
<div class="panel panel-default">
  <div class="panel-body bg-warning">
    <div class="pages">
      <article>
        ...
      </article>
      <article>
        ...
      </article>
      <article>
        ...
      </article>
    </div><!-- /.pages -->
    <ul class="pager">
      <li class="previous disabled"><a href="#">&larr; Prev</a></li>
      <li class="next"><a href="#">Next &rarr;</a></li>
    </ul>
  </div><!-- /.panel-body -->
</div><!-- /.panel -->
```

### JavaScript:

```javascript
$('.panel').bootstrapPager();
```
