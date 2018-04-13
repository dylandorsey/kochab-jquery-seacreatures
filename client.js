console.log('in js');

$(document).ready(onReady);


function onReady(){
    console.log('in JQ')
    let clickCounterOneValue = 0;
    $('.incrementorButton').on('click', function () {
        clickCounterOneValue++;
        $('#clickCounterOne').html(clickCounterOneValue);
    });
}