/**
 * Created by Matan on 21/04/2014.
 */

Array.prototype.longestElement = function()
{
    var maxLength = 0;

    for(var i = 0 ; i < this.length ; i++)
    {
        if(this[i].toString().length > maxLength)
        {
            maxLength = this[i].toString().length;
        }
    }

    return maxLength;
}
