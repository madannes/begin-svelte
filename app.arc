@app
begin-app

@static

@http
get /todos
post /todos

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
