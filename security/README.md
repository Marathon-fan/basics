# SECURITY


### How do JSON Web Tokens work?   

How do JSON Web Tokens work?
In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned and must be saved locally (typically in local storage, but cookies can be also used), instead of the traditional approach of creating a session in the server and returning a cookie.

Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer schema. The content of the header should look like the following:
```
Authorization: Bearer <token>
```

```
Tokens are usually associated with OAuth. OAuth 2 is an authorization protocol that solves identity delegation. The user is prompted for consent to access his/her data and the authorization server gives back an access_token that can be used to call the APIs acting as that user.

Typically these tokens are opaque. They are called bearer tokens and are random strings that will be stored in some kind of hash-table storage on the server (db, cache, etc.) together with an expiration, the scope requested (e.g. access to friend list) and the user who gave consent. Later, when the API is called, this token is sent and the server lookup on the hash-table, rehydrating the context to make the authorization decision (did it expire? does this token have the right scope associated for the API that wants to be accessed?).

The main difference between these tokens and the ones we've been discussing is that signed tokens (e.g.: JWT) are "stateless". They don't need to be stored on a hash-table, hence it's a more lightweight approach. OAuth2 does not dictate the format of the access_token so you could return a JWT from the authorization server containing the scope/permissions and the expiration.
```

