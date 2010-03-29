/*!
 * Modernizr Jquery Support Extend
 * require Modernizr -> http://modernizr.com/
 *
 * Copyright (c) 2010 Olivier Gorzalka - http://clearideaz.com/
 * Licensed under the MIT license.
 * Modernizr ported to Jquery.support method
 * usage : 
 * if (jQuery.support.canvas) { alert('My browser supports "canvas" élements'); }
  * if (!jQuery.support.geolocation) { alert('My browser doesn't know where I am and it's problably a Microsoft browser'); }
 */
/*
 * Modernizr is a script that will detect native CSS3 and HTML5 features
 * available in the current UA and provide an object containing all
 * features with a true/false value, depending on whether the UA has
 * native support for it or not.
 * 
 * In addition to that, Modernizr will add classes to the <html>
 * element of the page, one for each cutting-edge feature. If the UA
 * supports it, a class like "cssgradients" will be added. If not,
 * the class name will be "no-cssgradients". This allows for simple
 * if-conditionals in CSS styling, making it easily to have fine
 * control over the look and feel of your website.
 * 
 * @author    Faruk Ates
 * @copyright   (2009) Faruk Ates.
 *
 * @contributor   Paul Irish
 * @contributor   Ben Alman
 */

jQuery.extend(jQuery.support, {
   'canvas': Modernizr.canvas,
   'canvastext': Modernizr.canvastext,
   'rgba': Modernizr.rgba,
   'hsla': Modernizr.hsla,
   'multiplebgs': Modernizr.multiplebgs,
   'borderimage': Modernizr.borderimage,
   'borderradius': Modernizr.borderradius,
   'boxshadow': Modernizr.boxshadow,
   'opacity': Modernizr.opacity,
   'cssanimations': Modernizr.cssanimations,
   'csscolumns': Modernizr.csscolumns,
   'cssgradients': Modernizr.cssgradients,
   'cssreflections': Modernizr.cssreflections,
   'csstransforms': Modernizr.csstransforms,
   'csstransforms3d': Modernizr.csstransforms3d,
   'csstransitions': Modernizr.csstransitions,
   'fontface': Modernizr.fontface,
   'geolocation': Modernizr.geolocation,
   'video': Modernizr.video,
   'audio': Modernizr.audio,
   'input': Modernizr.input,
   'inputtypes': Modernizr.inputtypes,
   'canPlayType': Modernizr.canPlayType,
   'localstorage': Modernizr.localStorage,
   'sessionstorage': Modernizr.sessionStorage,
   'webworkers': Modernizr.webWorkers,
   'applicationcache': Modernizr.applicationCache
});