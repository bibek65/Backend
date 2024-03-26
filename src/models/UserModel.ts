import knex from "../db/knex";

class User {
  public static table = "users";

  public static async getAllUsers() {
    const users = await knex(this.table).select();
    return users;
  }

  public static async addUser(name: string) {
    const insertedValue = await knex(this.table)
      .insert({
        name,
      })
      .returning("*");
    return insertedValue;
  }
}

export default User;
