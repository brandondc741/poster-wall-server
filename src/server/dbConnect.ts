/// <reference path=""
import r = require("rethinkdb");
import { dbHost, dbPort } from "./config";

// Types
import { Connection } from "rethinkdb";
import logger from "./logger";

let connection: Connection;

const _initializeDb = (r): Promise<Connection> => {
  return new Promise((resolve, reject) => {
    r.connect(
      { host: dbHost, port: dbPort },
      (err: Error, conn) => {
        if (err) {
          reject(err);
        }
        resolve(conn);
      }
    );
  });
};

export const initializeDb = (): Promise<Connection> => {
  return _initializeDb(r);
};

export const getDb = async (): Promise<Connection> => {
  if (!connection) {
    try {
      connection = await _initializeDb(r);
    } catch (e) {
      logger.error(e);
      throw new Error(e);
    }
    return connection;
  } else {
    return connection;
  }
};
