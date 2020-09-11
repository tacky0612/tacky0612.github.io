(function () {
    'use strict';

    var skillComponent = Vue.extend({
        props: {
            skill: {
                type: String,
                default: "None"
            },
            image: {
                type: String,
                default: "fas fa-angle-down"
            },
            text: {
                type: String,
                default: "ちょっとだけ"
            }
        },

        template: '\
        <div>\
            <div class="list-head">\
                <i v-bind:class= image ></i><h4>{{ skill }}</h4>\
            </div>\
            <div class="list-body">\
                <p>{{ text}}</p>\
            </div>\
        </div>'
    });

    var app = new Vue({
        el: ".contents",
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
    $(".skills button").click(function (event) {
        $(this).next().slideToggle(500);
    });
});