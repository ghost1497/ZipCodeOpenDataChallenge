# Backend Info

- All people who need to work on the backend have access to the heroku account... nice try hackers...

## Directions to pull and work on backend
- Directions on how to pull and work on backend are located in the "Deploy" tab of the Heroku dashboard

## Endpoint calls
URL: https://visitdelawarebackendv2.herokuapp.com
- **Profile controller**
	- GET all profiles: `"/profiles"`
	- GET one profile by id: `"/profiles/{id}"`
	- GET one profile by name: `"/profiles/findByName/{name}"`
	- POST one profile: `"/profiles"`
	- PUT one profile: `"/profiles/{id}"`
	- DELETE one profile: `"/profiles/{id}"`
	
	- Attributes of profile database:
		- PROFILE_ID : `Integer id;`
		- NAME_ON_PROFILE : `String name;`
		- EMAIL_ON_PROFILE : `String emailAddress;`
		- BIRTHDAY_ON_PROFILE : `String birthDate; //format is 'mmddyyyy'`
		- ZIPCODE : `Integer zipcode;`
		- MOBILE_HANDICAP_FLAG : `boolean handicapFlag;`
		
- **National Parks Controller**
	- GET all parks in DE: `"/parksInDE"`
	- Attributes of NP database:
		- LOCAL_ID_KEY : `Long local_id;`
		- STATES : `String states;`
		- LATLONG : `String latLong;`
		- DESCRIPTION : `String description;`
		- DESIGNATION : `String designation;`
		- API_PARK_ID : `String id;`
		- DIRECTIONS_INFO : `String directionsInfo;`
		- DIRECTIONS_URL : `String directionsUrl;`
		- FULL_NAME : `String fullName;`
		- URL : `String url;`
		- WEATHER_INFO : `String weatherInfo;`
		- NAME_OF_PARK : `String name;`
