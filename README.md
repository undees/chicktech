These code examples are from the
[ChickTech Workshop](https://www.eventbrite.com/e/website-performance-measuring-with-new-relic-tickets-24797775815?aff=newrelic)
on finding and fixing database N+1 issues.  Attendees built a few
quick Node.js apps to make sure all the pieces (Node, Postgres, New
Relic) were installed and working properly.

We used a typical [hello world](https://howtonode.org/hello-node)
example from the Internet as a starting point.

### Tutorial Steps

1. [Static "Hello world"](1-hello.js)
2. [Dynamic behavior](2-dynamic.js)
3. [Adding a delay](3-sleep.js)
4. [Measuring the delay](4-newrelic.js)
5. [Clocking database calls](5-db.js)

### Next Steps

Attendees downloaded an app with a
[deliberately added](https://github.com/TechChicks/actw/tree/8d56fccf4daae8da89caa47957317d0cf03b770d)
slow database query, then [diagnosed and
fixed](https://github.com/TechChicks/actw/commit/842adcfae83560148ab20ee21b140f234035cb84)
the N+1 problem causing it.
