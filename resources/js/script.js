interact('.pagePreview')
  .resizable({
    edges: { bottom: true, left: true }
  })
  .on('resizemove', function (event) {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0),
        y = (parseFloat(target.getAttribute('data-y')) || 0);

    // don't mess with iframe
    document.querySelector('.previewBody').style['pointer-events'] = 'none';

    // update the element's style
    //target.style.width  = event.rect.width + 'px';
    target.style.flexBasis  = event.rect.width + 'px';
    target.style.height = event.rect.height + 'px';

    // translate when resizing from top or left edges
    x += event.deltaRect.left;
    y += event.deltaRect.top;

    target.style.webkitTransform = target.style.transform =
        'translate(' + x + 'px,' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
    var filePane = document.getElementsByClassName('filePane')[0];
    filePane.style.width = '100%';
  }).on('mouseup', function(event) {
    document.querySelector('.previewBody').style['pointer-events'] = '';
  });

interact('.filePane')
  .resizable({
    edges: { botttom: true, left: true }
  })
  .on('resizemove', function (event) {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0),
        y = (parseFloat(target.getAttribute('data-y')) || 0);

    // don't mess with iframe
    document.querySelector('.previewBody').style['pointer-events'] = 'none';

    // update the element's style
    target.style.width  = event.rect.width + 'px';
    // target.style.flexBasis  = event.rect.width + 'px';
    target.style.height = event.rect.height + 'px';
    target.parentNode.children[0].style.height = 'calc(100% - ' + target.style.height + ')';

    // translate when resizing from top or left edges
    // x += event.deltaRect.left;
    // y += event.deltaRect.top;

    // target.style.webkitTransform = target.style.transform =
        // 'translate(' + x + 'px,' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }).on('mouseup', function(event) {
    document.querySelector('.previewBody').style['pointer-events'] = '';
  });

window.onload = function() {
  blockFilterOnload();
  // attrOnload();
}
