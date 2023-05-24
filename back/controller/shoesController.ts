import { shoesType } from "../dataType/shoesType";
const dbClient = require("../service/mysqlConnect");

const controller = {
  getAllItems: async (): Promise<shoesType[]> => {
    try {
      return new Promise<shoesType[]>((resolve, reject) => {
        dbClient.query(
          `SELECT * FROM shopping.item;`,
          (error: Error, rows: shoesType[]) => {
            if (error) {
              reject(error);
              return;
            }
            resolve(rows);
          }
        );
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  getAscItems: async (): Promise<shoesType[]> => {
    try {
      return new Promise<shoesType[]>((resolve, reject) => {
        dbClient.query(
          `SELECT * FROM item ORDER BY price ASC`,
          (error: Error, rows: shoesType[]) => {
            if (error) {
              reject(error);
              return;
            }
            resolve(rows);
          }
        );
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  getDescItems: async (): Promise<shoesType[]> => {
    try {
      return new Promise<shoesType[]>((resolve, reject) => {
        dbClient.query(
          `SELECT * FROM item ORDER BY price DESC`,
          (error: Error, rows: shoesType[]) => {
            if (error) {
              reject(error);
              return;
            }
            resolve(rows);
          }
        );
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

module.exports = { controller };
