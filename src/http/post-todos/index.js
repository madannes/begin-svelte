const data = require("@begin/data");

exports.handler = async function http(req) {
  const result = await data.set({ table: "todos", todo: req.body });
  return {
    headers: {
      "content-type": "application/json; charset=utf8",
      "cache-control":
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
    },
    statusCode: 201,
    location: `/todos/${result.key}`,
    body: JSON.stringify(result),
  };
};
