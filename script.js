var r, g, b;
var paintColor = "black";
var dragging = false;
function getRandomInt(max)
{
	return Math.floor(Math.random() * Math.floor(max));
}

function drawGrid(grid)
{   
    alert("Left click to draw and Right click to Erase");
	var container =  document.getElementById("container");
    for (var row = 0; row < grid; row ++)
    {

        for (var column = 0; column < grid; column++)
        {
            var newDiv = document.createElement("div"); 
            newDiv.classList.add('grid');  //if drown down list is hover or click or arro
            newDiv.addEventListener("mousemove", function( event )  // highlight the mouseenter target //
            {  
                if(isChecked('rdioHover')) 
                {
                    if(isChecked('rdioRainbow')) 
                    { 
                        rndColor();
                    }
                    event.target.style.backgroundColor = paintColor;
                }
                else if(isChecked('rdioClickNdrag'))
                {
                     //left mouse button down
                      if (event.buttons == 1) 
                      {
                        if(isChecked('rdioRainbow')) 
                        { 
                            rndColor();
                        }
                        event.target.style.backgroundColor = paintColor;
                      }
                      //right mouse button down
                      if (event.buttons == 2) 
                      {
                        event.target.style.backgroundColor = '#eaebf2';
                      }
                }
            }, false);
            container.appendChild(newDiv);
        }
    }

 var leGrid = Array.from(document.querySelectorAll('.grid'));
 for (var i =0; i< leGrid.length; i++)
 {
     leGrid[i].style.width = (650/grid);
     leGrid[i].style.height = (650/grid);
 }
}   

 function clearGrid()
{
    var container =  document.getElementById("container");
    container.innerHTML = "";
}

var gridSize = document.getElementById("gridSizeField");
gridSize.addEventListener("click", function(e)
{
    
    gridSize.value = " ";
});
gridSize.addEventListener("keydown", function (e)
{
    if (e.keyCode === 13) //checks whether the pressed key is "Enter"
    {  
        isNumber(gridSize.value);
    }
});

var btnDrawGrid = document.getElementById("btnDrawGrid");
btnDrawGrid.addEventListener("click", function(e)
{
    isNumber(gridSize.value);
});

function isNumber(input) 
{
    if(isNaN(input) || input == "" ||input < 0 ||input > 100)
    {
        alert("Please enter a valid number!\n0x0 - 100x100 grid");    
    }
    else
    {
        clearGrid();
        drawGrid(input);    
    }
    //validation of the input...
}

    var rad = document.drawingStyle.myRadios;
    var prev = null;
    for (var i = 0; i < rad.length; i++)
    {
        rad[i].addEventListener('change', function()
        {
            (prev) ? console.log(prev.value): null;
            if (this !== prev) 
            {
                prev = this;
            }
            console.log(this.value);
        });
    }

 var otherRad = document.pickAcolor.myRadios;
    for (var i = 0; i < otherRad.length; i++)
    {
        otherRad[i].addEventListener('change', radioColorChange);
    }

function radioColorChange()
{
    console.log(this.value);
    if(this.value == "Black")
    {
        paintColor = "Black" 
    }
    else if (this.value == "Rainbow")
    {   
        rndColor();    
    }
    else if (this.value == "enterAcolor")
    {   
        var colorValueField = document.getElementById('inp');
        colorValueField.focus();
        colorValueField.addEventListener("keydown", function (e)
        {
           if (e.keyCode === 13) //checks whether the pressed key is "Enter"
           { 
               if(isValidHex(colorValueField.value) ) // test if valid hex
               {
                  paintColor = colorValueField.value;
               }
               else
               {
                    alert("Please enter a valid HEX color code value! #000000 - #FFFFFF")    
               }
           }
        });
   }
}
function isChecked(rdioIN)
{
    return document.getElementById(rdioIN).checked
}

function isValidHex(input)
{
    var validHex  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(input);
    return validHex;
}
function rndColor ()
{
    r = getRandomInt(255);
    g = getRandomInt(255);
    b = getRandomInt(255);
    paintColor = "#"+(r).toString(16)+(g).toString(16)+(b).toString(16);
}
