This is a very basic fivetran connector that just proxies the azure function to any URL that is passed in as part of the "secrets" for the fivetran connector.

Format into the "secrets" object in Fivetran would be something like: {"url" : "http://yoursite.com/route", "other_secrets" : "???"}

The "state" gets forwarded on to the URL in the following way:

```
{
    "state" : {
        // the state from fivetran
    },
    "config" : {
        // the "secrets" object from fivetran
    }

}
```
