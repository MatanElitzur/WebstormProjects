/**
 * Created by Matan on 19/04/2014.
 */

function Rectangle(w,h)
{
    this.width = w;
    this.height = h;
};

//***********************************************************
// Instance functions
//***********************************************************
Rectangle.prototype.area = function()
{
    return this.width * this.height;
}

Rectangle.prototype.perimeter = function()
{
    return (2* this.width) + (2*this.height);
}

//Override base toString function
Rectangle.prototype.toString = function()
{
    return "Rectangle of width: " + this.width + " & height: " + this.height;
}

//Override base valueOf function
Rectangle.prototype.valueOf = function()
{
    return this.area();
}

Rectangle.prototype.equals = function(oRect)
{
    return (this.width == oRect.width && this.height == oRect.height);
}

//Examples
// oRect instanceof Rectangle --> returns true
// oRect instanceof Object --> returns true, inherits from Object
// oRect instanceof Array --> returns false

//************************************************************************
// Static Class functions
//************************************************************************
Rectangle.MAX = new Rectangle(0,0);

Rectangle.Min = function(a,b)
    {
        if(a.area() == b.area())
        {
            return null;
        }
        else if(a.area() > b.area())
        {
            return a;
        }
        else
        {
            return b;
        }
    }