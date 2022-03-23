#!/usr/bin/env node

/**
 * Module dependencies.
 */
import http from "http";
import mysql from "mysql2/promise";
import app from "../app";
import config from "../database/config";
import db from "../database";

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.on("error", onError);
server.on("listening", onListening);

/**
 * Create db if not exist
 * Initialize db
 * Start listening server
 */
const { host, port: dbport, username, password, database } = config;
mysql
  .createConnection({ host, port: dbport, user: username, password })
  .then((connection) => {
    connection
      .query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`)
      .then(() => {
        db.sequelize.sync().then(() => {
          server.listen(port);
        });
      });
  });

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: string) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: { syscall: string; code: unknown }) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr?.port;
  console.log("Listening on " + bind);
}
