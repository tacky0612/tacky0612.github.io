(function () {
    'use strict';

    var skillComponent = Vue.extend({
        props: {
            skill: {
                type: String,
                default: null
            },
            icon: {
                type: String,
                default: null
            },
            imageLink: {
                type: String,
                default: null
            },
            items: {
                type: Array,
                default: () => ["ちょっとだけ"]
            },
            backgroundColor:{
                type: String,
                default: "bg-dark"
            },
            textColor:{
                type: String,
                default: "text-white"
            }
        },

        template: 
        '<li class="m-2 skills-item">\
            <div class="card h-100">\
                <div class="card-header" v-bind:class="[backgroundColor, textColor]">\
                    <i v-if="icon" v-bind:class="icon" class="me-3"></i>\
                    <img v-if="imageLink" v-bind:src="imageLink" class="me-3 skills-image">\
                    {{ skill }}\
                </div>\
                <div class="card-body">\
                    <ul class="p-0">\
                        <li v-for="item in items">\
                            {{item}}\
                        </li>\
                    </ul>\
                </div>\
            </div>\
        </li>'
    });

    var app = new Vue({
        el: "main",
        components: {
            'skill-component': skillComponent
        },
        data: {
            total: 0
        }
    });

})();

$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

$(document).ready(function () {
    $('.button').click(function (event) {
        $(this).parents('.skills-wrapper').find('.skills').slideToggle(500);
    });
});

$(function () {
    var headerHight = 80;
    $('a[href^="#"]').click(function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerHight;
        $("html, body").animate({
            scrollTop: position
        }, 100, "swing");
        return false;
    });
});