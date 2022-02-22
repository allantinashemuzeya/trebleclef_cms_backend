(function ($, Drupal) {
  Drupal.behaviors.ginToolbarActiveItem = {
    attach: function attach(context, settings) {
      // Check if on node edit form
      if (window.location.href.indexOf('admin/content') > -1) {
        $('.toolbar-icon-system-admin-content').addClass('is-active');
      }
      // If Structure
      else if (window.location.href.indexOf('admin/structure') > -1) {
        $('.toolbar-icon-system-admin-structure').addClass('is-active');
      }
      // If Appearance
      else if (window.location.href.indexOf('admin/appearance') > -1 || window.location.href.indexOf('admin/theme') > -1) {
        $('.toolbar-icon-system-themes-page').addClass('is-active');
      }
      // If Modules
      else if (window.location.href.indexOf('admin/modules') > -1) {
        $('.toolbar-icon-system-modules-list').addClass('is-active');
      }
      // If Configuration
      else if (window.location.href.indexOf('admin/config') > -1) {
        $('.toolbar-icon-system-admin-config').addClass('is-active');
      }
      // If People
      else if (window.location.href.indexOf('admin/people') > -1) {
        $('.toolbar-icon-entity-user-collection').addClass('is-active');
      }
      // If Reports
      else if (window.location.href.indexOf('admin/reports') > -1) {
        $('.toolbar-icon-system-admin-reports').addClass('is-active');
      }
      // If Help
      else if (window.location.href.indexOf('admin/help') > -1) {
        $('.toolbar-icon-help-main').addClass('is-active');
      }
    }
  };

  Drupal.behaviors.ginToolbarToggle = {
    attach: function attach(context, settings) {
      // Change when clicked
      $('#toolbar-bar .toolbar-item', context).on('click', function() {
        $('body').attr('data-toolbar-tray', $(this).data('toolbar-tray'));

        // Sticky toolbar width
        $(document).ready(function() {
          $('.sticky-header').each(function() {
            $(this).width($('.sticky-table').width());
          });
        });
      });

      // Toolbar toggle
      $('.toolbar-menu__trigger', context).on('click', function(e) {
        e.preventDefault();

        $(this).toggleClass('is-active');

        if ($(this).hasClass('is-active')) {
          $('body').attr('data-toolbar-menu', 'open');
        } else {
          $('body').attr('data-toolbar-menu', '');
        }
      });

      // Toolbar hover toggle
      // $('.toolbar-menu-administration', context).hover(function(e) {
      //   e.preventDefault();

      //   $(this).toggleClass('is-active');

      //   if ($(this).hasClass('is-active')) {
      //     $('body').attr('data-toolbar-menu', 'open');
      //   } else {
      //     $('body').attr('data-toolbar-menu', '');
      //   }
      // });
    }
  };

  Drupal.behaviors.ginScroll = {
    attach: function attach(context, settings) {
      var offsetTop = $(window).scrollTop(),
          offset = 40,
          scrollClass = '-has-scrolled';

      if (offsetTop > offset) {
        $('body').addClass(scrollClass);
      } else {
        $('body').removeClass(scrollClass);
      }

      // Scroll event
      $(window).scroll(function (event) {
        var offsetTop = $(window).scrollTop(),
            offset = 40;

        if (offsetTop > offset) {
          $('body').addClass(scrollClass);
        } else {
          $('body').removeClass(scrollClass);
        }
      });
    }
  };
})(jQuery, Drupal);
