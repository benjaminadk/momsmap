# Mom's Map
![momsmap](https://s3-us-west-1.amazonaws.com/benjaminadk/images/moms-map.png)

# How It Works
- GPS coordinates and other information are placed into a Fusion Table
- This Fusion Table is referenced by the Google Map upon instanciation 
- I use and HTML Select Component twice - one for where you are, one for destination
- I listen for change within this component
- OnChange I call to the Google Directions API which return turn by turn direction
  - Instead of the standard verbose list, the directions are represented by markers with tooltips
  - Now on a mobile device directions are more visual in nature and you still get the verbage
- Now any two points on the map can be navigated between seamlessly
- No more getting lost for Mom


# Other Features
- Custom color scheme and layout weeds out unecessary items and its colors my Mom likes
- Icons will look good on all devices - ipad, iphone, etc
- Optional street view
- Each waypoint has info window with website, phone number, etc
- Just add new points to Fusion Table and Select List, easily expandable
