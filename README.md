# Burning Airlines Lab

![image](https://pbs.twimg.com/media/COeYbe1WUAABHQ1.jpg)


#### Estimated Time: 2 days

## Summary: An Airlines Reservation System

# Requirements

### Admin Interface

An admin can create planes on the `/airplanes` page (a standard Rails CRUD page).

A plane has a name, rows, and columns.

When a new plane is saved the page should show a seating diagram.

An admin can create flights on the `/flights` page (a standard Rails CRUD page).

A flight has a flight number, origin, destination, date, and plane.

When a new flight is saved, the page should show a list with the newest date at the top of the list and the number of available seats on the plane.

### Public Interface

A user can search for flights on the `/search` page (a route within a React SPA).
The search page should have an input form for the origin and destination.
When a user creates a search, the page should show a list of flights with the newest date at the top, and include the number of available seats on the flight.

When the user selects a flight, we should go to the show page ie, `/flights/3` (a route within a React SPA).
The plane show page should show a seating diagram with available seats, seats taken by other users, and any seats that have already been reserved by the curernt user.

A user can select a seat to reserve by clicking on it.

When the user saves their reservation, the seating diagram should update to show the selected seat as reserved.

When a seat reservation is saved, the available seats column on the `/flights` ADMIN page should show the current number of free seats remaining for that flight (after a page reload, not live). 

**Ideally the seating diagram should update live, in real-time, to show seats becoming occupied as other users of the system make reservations. This will require regularly asking the server for any new reservations for this flight, i.e. _polling_.**

Probably don't bother with doing authentication inside your React app - just hardcode a user ID for now...

# Wireframe

**NOTE**: The admin pages, i.e. the first two diagrams (the top row) **do _not_ need to be React-based - you can create them as standard Rails CRUD routes which render using Rails templates**. The bottom two pages shown _do_ need to be within a React Single-Page App.

![image](http://i.imgur.com/Xa2DNrr.png)

# Models
There are models for Airplane, Flight, User, and Reservation.

An Airplane has many Flights and a Flight belongs to an Airplane.

A User has many Reservations and a Reservation belongs to a User.

A Flight has many Reservations and a Reservation belongs to a Flight.

The Reservation model also acts as a join between Users and Flights, which have a many-to-many relationship through Reservations.

The Airplane model has rows and columns to determine the configuration of the plane; the Reservation model has a row and a column for a particular seat.

# Tools
- Rails
- React
- React Router is recommended