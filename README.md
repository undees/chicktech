These code examples are from the
[ChickTech Workshop](https://www.eventbrite.com/e/website-performance-measuring-with-new-relic-tickets-24797775815?aff=newrelic)
on finding and fixing database N+1 issues.  Attendees built a few
quick Node.js apps to make sure all the pieces (Node, Postgres, New
Relic) were installed and working properly.

We used a typical [hello world](https://howtonode.org/hello-node)
example from the Internet as a starting point.

### Tutorial Steps

* [Static "Hello world"](1-hello.js)
* [Dynamic behavior](2-dynamic.js)
* [Adding a delay](3-sleep.js)
* [Measuring the delay](4-newrelic.js)
* [Clocking database calls](5-db.js)
