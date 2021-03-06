console.log("Loading...");

const data = require("@begin/data");

console.log("Loaded data...");

exports.handler = async function http(req) {
  console.log("Getting todos...");
  const todos = await data.get({ table: "todos" });
  console.log("Todos", todos);
  return {
    headers: {
      "content-type": "application/json; charset=utf8",
      "cache-control":
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
    },
    statusCode: 200,
    body: JSON.stringify(todos),
  };
};
