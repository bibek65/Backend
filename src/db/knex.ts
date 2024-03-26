import Knex from "knex";
import knexConfig from "./knexfile";

// @ts-ignore
import knexStringCase from "knex-stringcase";

const knex = Knex(
  knexStringCase(
    process.env.NODE_ENV === "prod" ? knexConfig.prod : knexConfig.local
  )
);

export default knex;
