/*!
* jQuery Magnet Library v0.01
* https://github.com/CindyLinz/jQuery-menu-skeleton
*
* Copyright 2011, Cindy Wang (CindyLinz)
* Dual licensed under the MIT or GPL Version 2 licenses.
*
* Date: 2011.12.5
*/
(function($){
    var data_key = '_magnet.'+Math.random()+Math.random()+Math.random();

    // $(elem).magnet([options,] pivot); // magnet
    // $(elem).magnet(); // unmagnet
    $.fn.magnet = function(pivot){
        var $pivot = $(pivot);
        var $float = this;

        var data = $float.data(data_key);
        if( !data ){
            data = {};
            $float.data(data_key, data);
        }

        if( data.timer ){
            clearInterval(data.timer);
            delete data.timer;
        }

        var t = 100;

        if( $pivot.length ){
            var p_off = $pivot.offset();
            var f_off = $float.offset();
            var offset = [
                f_off.left - p_off.left,
                f_off.top - p_off.top
            ];
            var v = [0, 0];
            data.timer = setInterval(function(){
                f_off = $float.offset();
                p_off = $pivot.offset();
                v[0] = p_off.left + offset[0] - f_off.left;
                v[1] = p_off.top + offset[1] - f_off.top;
                $float.offset({
                    left: f_off.left + v[0] * 3 * t / 1000,
                    top: f_off.top + v[1] * 3 * t / 1000
                });
            }, t);
        }
    };
})(jQuery)
