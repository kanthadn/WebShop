/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        var self = this
        $(function() {
            self.bindEvents();
                     });
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        //For all the popovers in the application
        $('[data-toggle="popover"]').popover({
                html : true,
                animation:false,
                trigger: 'manual'}).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });
        //FOr smooth transition of page switching scrolSpy 
        $("#nav ul li a[href^='#'],.shopNow").on('click', function(e) {
           // prevent default anchor click behavior
           e.preventDefault();
           // store hash
           var hash = this.hash;
           // animate
           $('html, body').animate({
               scrollTop: $(hash).offset().top
             }, 500, function(){

               // when done, add hash to url
               // (default click behaviour)
               window.location.hash = hash;
     });

});   
    },
    };
