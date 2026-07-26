# Akan Name Generator
## Project description
This is a web application that calculates the day of the week a user was born on and assigns them a traditional Akan name based on their birthdate and gender.

## Author name
Shayne Hera

## Contact info
Incase of any need of communication, contact me via email mhandohera@gmail.com

## Technologies used
HTML
CSS
JavaScript

## Behavior Driven Development
- Given a user enters a valid day,month, year and gender. When they submit the form the app calculates  the correct day and displays the matching Akan name.
- Otherwise, the app displays an alert and stops

## How it works
- The day of the week is calculated using the formula:
d = ( (CC/4 - 2*CC - 1) + (5*YY/4) + (26*(MM+1)/10) + DD ) mod 7
- Where CC is the first two digits of the year, YY the last to digits of the year, MM is the month, DD is the day of the month. All divisions are floored.The result (0-6) sre matched against the Akan name table below.


## Akan Names
- Day	       Male Name	Female Name
- Sunday	    Kwasi	    Akosua
- Monday	    Kwadwo    	Adwoa
- Tuesday	    Kwabena   	Abenaa
- Wednesday	    Kwaku   	Akua
- Thursday	    Yaw	        Yaa
- Friday	    Kofi	    Afua
- Saturday	    Kwame	    Ama

## License
This project is released under the MIT license.