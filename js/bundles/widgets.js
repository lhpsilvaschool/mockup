// Author: Rok Garbas
// Contact: rok@garbas.si
// Version: 1.0
// Description:
// 
// License:
//
// Copyright (C) 2010 Plone Foundation
//
// This program is free software; you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by the Free
// Software Foundation; either version 2 of the License.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
// more details.
//
// You should have received a copy of the GNU General Public License along with
// this program; if not, write to the Free Software Foundation, Inc., 51
// Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
//

/*jshint bitwise:true, curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, noempty:true, nonew:true, plusplus:true,
  undef:true, strict:true, trailing:true, browser:true, evil:true */
/*global define:false */

if (window.jQuery) {
  define( "jquery", [], function () {
    "use strict";
    return window.jQuery;
  } );
}

define([
  'jquery',
  'jam/Patterns/src/registry',
  'js/patterns/select2',
  'js/patterns/datetime',
  'js/patterns/autotoc',
  'js/patterns/accessibility'
], function($, registry) {
  "use strict";

  // BBB: we need to hook pattern to classes which plone was using until now
  var Widgets = {
    name: "plone-widgets",
    transform: function($root) {

      // apply autotoc pattern where enableFormTabbing exists
      var $match = $root.filter('.enableFormTabbing');
      $match = $match.add($root.find('.enableFormTabbing'));
      $match.addClass('pat-autotoc');
      $match.attr({
        'data-autotoc-levels': 'legend',
        'data-autotoc-section': 'fieldset',
        'data-autotoc-klass': 'autotabs'
      });

      // activate accessibility pattern by default
      $root.addClass('pat-accessibility');
      $root.attr({
        'data-accessibility-smallbtn': "#accessibility-smallText",
        'data-accessibility-normalbtn': "#accessibility-normalText",
        'data-accessibility-largebtn': "#accessibility-largeText"
      });
    },
    scan: function(selector) {
      registry.scan($(selector));
    }
  };

  registry.register(Widgets);

  return Widgets;
});
