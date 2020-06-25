Alright, Day Planner -
I started by grabbing the date and breaking it down, using preset arrays to generate a user friendly Date, generate hour names outside of military time.
I then dynamically generated the day. I went with CSS Grid straight up instead of bootstrap and hard coded that rather than appending it to every line via jQuery/javascript.
Apparently createElement is faster than jQuery methods, and after reading way too much of a forum post, I used that instead of jQuery, which dominates the rest of this project.
