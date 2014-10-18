/**
 * Created by Matan on 20/04/2014.
 */

function DepthRectangle(w,h,d)
{
    Rectangle.call(this,w,h); // Call the constructor of base class in this example for Rectangle constructor
    this.depth = d;
}

//Declaration inheritance from Rectangle and not from Object class
DepthRectangle.prototype = new Rectangle();
//Since the DepthRectangle prototype was just created with the Rectangle constructor,
//we have to re-assign the constructor property to be our DepthRectangle.
//Because of the assign in line 12
DepthRectangle.prototype.constructor = DepthRectangle;


//DepthRectangle Functions
DepthRectangle.prototype.volume = function()
{
    return this.area() * this.depth;
}

DepthRectangle.prototype.toString = function()
{
    return "DepthRectangle with width: " + this.width + " & height: " + this.height + " & depth: " + this.depth;
}