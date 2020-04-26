'use strict';

$(document).ready(function () {
    console.log('Ok');
    $('#sidebarCollapse').on('click', function () {
        console.log('click');
        $('#sidebar').toggleClass('active');
    });

});