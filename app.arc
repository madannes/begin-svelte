@app
begin-app

@static

@http
get /todos

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
