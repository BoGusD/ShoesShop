import { shoesDataType } from "../dataType/shoesDataType";
const dbClient = require("../service/mysqlConnect");

const controller = {
  getAllItems: async (): Promise<shoesDataType[]> => {
    try {
      return new Promise<shoesDataType[]>((resolve, reject) => {
        dbClient.query(
          `SELECT * FROM shopping.item;`,
          (error: Error, rows: shoesDataType[]) => {
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
  getAscItems: async (): Promise<shoesDataType[]> => {
    try {
      return new Promise<shoesDataType[]>((resolve, reject) => {
        dbClient.query(
          `SELECT * FROM item ORDER BY price ASC`,
          (error: Error, rows: shoesDataType[]) => {
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
  getDescItems: async (): Promise<shoesDataType[]> => {
    try {
      return new Promise<shoesDataType[]>((resolve, reject) => {
        dbClient.query(
          `SELECT * FROM item ORDER BY price DESC`,
          (error: Error, rows: shoesDataType[]) => {
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
