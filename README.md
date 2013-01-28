jQuery SearchBox Plugin
=====================
[jQuery SearchBox](https://github.com/zernel/jquery-searchbox) is a
[jQuery](http://jquery.com) plugin that will provide an easy way to add quicklinks support to
your search box. Like this:

![screenshots](https://raw.github.com/zernel/jquery-searchbox/master/screenshot.png)

The plugin can make the basic feature.

![screenshots2](https://raw.github.com/zernel/jquery-searchbox/master/screenshot2.png)

Usage:
------

    <script type="text/javascript" charset="utf-8">
      $(function() {
        // Ajax Example
        //$('#s-keyword').searchbox({
        //  resultsArea: '#s-results'
        //  , trigger: function(keyword) {
        //    var data = { q: { name_cont: keyword }};
        //      $.ajax({
        //        url: '/products/search',
        //        type: 'get',
        //        context: this,
        //        data: data,
        //        dataType: 'html',
        //        success: this.updateResultsArea
        //      });
        //    }
        //  });

        $('#s-keyword').searchbox({
          resultsArea: '#s-results'
          , trigger: function() {
            var testData = ''; // Add your code here.
            this.updateResultsArea(testData);
          }
        });
      })
    </script>

License:
--------
jQuery-searchbox is released under the [MIT license](http://www.opensource.org/licenses/MIT).
