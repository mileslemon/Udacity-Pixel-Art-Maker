// document is ready
$(function(){

    // creates a grid using sizes inputted by the user.
    function makeGrid() {
        var sizePicker = $('#sizePicker');
        var pixelCanvas = $('#pixel_canvas');
        var gridHeight = $('#input_height').val();
        var gridWidth = $('#input_width').val();

        // clears any existing pixel canvas
        pixelCanvas.empty();

        for (var i = 0; i < gridHeight; i++) {
        var row = $('<tr class="canvasRow"></tr>').appendTo(pixelCanvas);
            for (var j = 0; j < gridWidth; j++) {
                $('<td class="canvasCol"></td>').appendTo(row);
            }
        }
    }

    function paintCanvas() {
        // paints table cells when mouse is down and moused over
        // changes cell color to background color on shift hover

        // assumes mouse isnt clicked
        var clicked = false;
        var shiftClicked = false;

        // checks if mouse is clicked
        $('.canvasCol').mousedown(function (event) {
            clicked = true;
            // prevents the user from dragging the table
            event.preventDefault();
            // checks if shift is held while clicking
            if (event.shiftKey) {
                clicked = false;
                shiftClicked = true;
            }
        }).mouseup(function () {
            clicked = false;
            shiftClicked = false;
        }).mousemove(function () {
            // if mouse is clicked paints the cell the mouse is over
            if(clicked){
                var color = $('#colorPicker').val();
                $(this).css('background-color', color);
            // if shiftclicked paints the cell to the default color
            } else if (shiftClicked) {
                $(this).css('background-color', "#fff"); 
            }
        });
    }
    
    // calls the makeGrid function on form submission
    // prevents the page from refreshing when submitted
    $('#submitGrid').click( function( event ){
        event.preventDefault();
        makeGrid();
        paintCanvas();
    });

});