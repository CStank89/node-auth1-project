exports.seed = function (knex) {
  return knex("users").insert([
    { username: "Christopher", password: "daddy" },
    { username: "Allison", password: "mommy" },
    { username: "Toby", password: "puppers1" },
    { username: "Charlie", password: "puppers2" },
  ]);
};
