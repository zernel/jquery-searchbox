(function($){
  $.fn.searchbox = function(options) {

    var defaults = {
      resultsArea: '#s-results',
      trigger: function(keyword) {
        console.log('Syncing');
        this.updateResultsArea('No result matching your search.');
      }
    };

    var searchBox = new SearchBox($.extend(defaults, options));

    $(this)
    .keyup(function() {
      var keyword = $(this).val();
      searchBox.search(keyword);
    })
    .blur(function() {
      searchBox.isTyping = false;
      setTimeout(function() { searchBox.hideResultsArea(); }, 500);
    })
    .focus(function() {
      searchBox.isTyping = true;
      if($(this).val() != '') {
        searchBox.resultsArea.show();
      }
    });
  };

  function SearchBox(options) {
    this.resultsArea = $(options.resultsArea);
    this.trigger = options.trigger;
    this.isHover = false;
    this.isTyping = false;
    this.keyword = ''; // TODO
    this.init();
  };

  SearchBox.prototype = {
    constructor: SearchBox,

    init: function() {
      var self = this;
      this.resultsArea.hover(
        function() {
          self.isHover = true;
          self.resultsArea.show();
        },
        function() {
          self.isHover = false;
          setTimeout(function() { self.hideResultsArea(); },500);
        }
      );
    },

    search: function(keyword) {
      if($.trim(keyword) != '') {
        this.keyword = keyword;
        clearTimeout(this.searchEvent);
        var self = this;
        this.searchEvent = setTimeout(function() {
          self.trigger(keyword);
        }, 500);
      } else {
        this.resultsArea.hide().empty();
      }
    },

    updateResultsArea: function(results) {
      this.show();
      this.resultsArea.html(results);
    },

    show: function() {
      this.resultsArea.show();
    },

    hideResultsArea: function() {
      if(!this.isHover && !this.isTyping) {
        this.resultsArea.hide();
      }
    }
  }
})( jQuery );
