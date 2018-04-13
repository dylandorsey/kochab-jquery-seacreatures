console.log('in js');

$(document).ready(onReady);

let clickCounterOneValue = 0;

function onReady(){
    console.log('in JQ')
    // create event handler to handle clicks on the button
    $('#addCreatureInput').on('click', clickHandler, addNewCreature);
    $('#incrementorOne').on('click', clickHandler);
    $('#clickCounterOne').html(clickCounterOneValue); // displays initial clickCounterOne value
    // note that .html () would work for us here. However, .html() will repl
}

function clickHandler() {
    // increment the counter
    clickCounterOneValue++;
    console.log('addcreature clicked');
    // display the count
    updateDomCount();
}

function updateDomCount() {
    $('#clickCounterOne').text(clickCounterOneValue); // .text() method gets the value of an element
    $('#clickCounterOne').append(' sea creatures');
    $('#clickCounterOne').css('color', pickColor()); // sets the color to a random color
}

function addNewCreature () {
    newCreatureName = $('#nameInput').val()
    newCreatureSize = $('#sizeInput').val()
    newCreatureType = $('#typeInput').val()
    newCreatureSpeed = $('#speedInput').val()
    $('#creatureList').prepend(                
    '<tr>' + 
        '<td>' + newCreatureName + '</td>' +
        '<td>' + newCreatureSize + ' ft </td>' +
        '<td>' + newCreatureType + '</td>' +
        '<td>' + newCreatureSpeed + ' mph </td>' +
    '</tr>');
    // add the new sea creature to a table. 
    // the table should have titles for each column that are the same as the input variable titles
        // appendName(name);
        // appendSize(size);
        // appendType(type);
        // appendSpeed(speed);
}

    function pickColor() {
        let red = Math.floor(Math.random()*256);
        let green = Math.floor(Math.random()*256);
        let blue = Math.floor(Math.random()*256);
        console.log(red);
        newColor = 'rgb('+ red + green + blue+')';
        console.log(newColor);
        return newColor;
    }