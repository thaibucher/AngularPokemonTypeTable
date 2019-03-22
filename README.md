___
Installation instructions:

Click green 'clone or download' button above, click Download ZIP, extract 'dist' to desired location.

Open 'index.html' in the dist folder in Firefox or Edge. As it uses multiple html files, Chrome will throw CORS policy issues by default. IE also has issues, other browsers have not been tested.
___
Usage instructions:

This is an expanded version of a standard type table used for the Pokemon series of games. The table represents how different attack types (rows) and defense (columns) types interact. The numbers represent the strength of that match up (ie a fire move will do half damage against a water type, but double damage against a grass type).

Hovering over a location on the chart highlights that row and column, making sure you can tell which matchup you're looking at. Click that cell to stick the highlighting into place, click anywhere in the table again to remove. You can also click any row name, on either side, to additionally highlight that row. Clicking a column name will black out that column, allowing you to ignore it, in case you are only interested in particular defense matchups.

The biggest addition to this table is the search function on the right. You can search by Pokemon type, number, or name. Selecting a Pokemon in the search results will black out every column except those of the selected Pokemon, and copy that column over to the right side of the table. If the Pokemon has two types, this new column on the right side will be a combination of the two columns, allowing you to look in only one location to get all the information you need when attacking that specific Pokemon. 

You can click the reset button in the upper left corner to clear any highlighting, black outs, and searches, or simply refresh the page.

___
Current state:
Table and list are mostly functionally complete.

Major tasks left:
Improve overall page styling, including getting the site to work at mobile resolutions.
Add some sort of tutorial, either as an extra page or through a couple tool-tips.
Add support for different generations of Pokemon games.


Notes:
Project was not developed through a github repository, everything has been uploaded after the fact. Attempting to open this as a new project may or may not currently work. Originally developed using Webstorm.
