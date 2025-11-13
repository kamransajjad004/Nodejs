// HTTP Mehtods and its status codes
/*
HTTP methods tell the server what action the client wants to perform.

1.GET

Used to fetch data
No body
Safe & indempotent
Examples: Get a list of users

2.POST

Used to create something
Sends data in body
Example: Register a new user

3.PUT

Used to replace/update full record
Idempotent (same request = same result)
Example: Update entire user data

4.PATCH

Used to update partially
Modify only selected fileds
Example: Update only user's name

5.DELETE

Remove a resource
Example: Delete user by id

*/

// Status Codes
/*

1xx - Informational
100 Continue => Server ready for request body
101 Switching Protocols => Upgrading to WebSocket

2xx - Success
200 OK => Request successful
201 Created => New source created(POST)
202 Accepted => Processing but not completed
204 No Content => Success but no response body (DELETE/PUT)

3xx - Redirection
301 Moved Permanently => New URL
302 Found (Temporary Redirect)
304 Not Modified => Use cached content

4xx - Client Errors
400 Bad Request => Wrong input/body
401 Unauthorized => No/invalid token
403 Forbidden => You are not allowed
404 Not FOund => Resource not found
405 Method Not Allowed => Wrong HTTP Method
409 Conflict => Duplicate record / data conflict
429 TOo Many Requests => Rate limit exceeded

5xx - Server errors
500 Internal Server Error => Something crashed
501 Not Implemented => Method not supported
502 Bad Gateway => Server upstream failed
503 Service unavailable => Server down/overload
504 Gateway Timeout => Upstream took too long

*/
