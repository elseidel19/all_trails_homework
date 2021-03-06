# all_trails_homework

## Testing

- **For screen shots of the experience, check out the "screenshots" folder. I could not seem to upload a video. To see a video, look for a video attachment on the email I sent to Travis after completing the assignment**
- I tested the page on Chrome. I opened chrome from the terminal with `open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security` and then pointed to localhost. I disabled the security because I was having an issue with CORS and figured it would be fine since I was developing my my machine.
- **NOTE**: I did not upload all the node_modules since there are a ton of them. If you need to see those let me know!

## Features
- List view with different restaurants around AllTrails headquarters that match the search criteria
- Map centered around AllTrails headquarters with pins for all the restaurants in the list view
- Each restaurant card contains helpful information: a picture of the restaurant, the name, ratings, phone number, address
- Clicking on the restaurant card takes you to the google maps page for that restaurant

## Missing features/Issues (mostly due to time restraints)
- **Error Handling**: There is very minimal error handling on the API calls. I would need to fix this in order for the solution to be robust and production ready. Currently we will run into problems if the API has an issue or if we have empty fields. Exception is photos, for which I added a default
- **Hard coding**: Certain parts of the implementation are hard coded (ex. center of the map, radius to search). We would likely want this to be configerable
- **Highlighting Map Pins**: I think when we click on a card on the side, we want to highlight the appropriate map pin and vice versa. I did not build this out due to time. I think we could accomplish this by having some "is_highlighted" state value for the pin and the restaurant card. When the click happens, we reset the state accordingly.
- **Pagination**: I just grabbed the first page of results (maxes out at 20). Depending on the use case, we may want more options
- **Favoriting**: I believe we would need a backend to implement this. I have never set up my own backend, so I just decided to skip this. At my previous job, we would store the data in a database and then accessed the data on the frontend through graphql

## Things I struggled with
- **UI Polish**: I think my CSS skills are a bit weak. In my previous job, we had many custom components and you could kind of just plug and play without much extra formatting. For this project I used a 3P library that did not totally line up with the design, so there was a lot more formatting to be done and I stuggled a bit
- **Fitting to different screens**: My solution does not fit very well on small screens (I did some hard coding of whitespace instead of using relative sizes). In particular, mobile is a bit of a mess. Building out solutions that work on both desktop and mobile web is not something I have prioritized before, and it is definitely something I would need to work on.
