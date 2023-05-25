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
  getAscItems: async (gender: string): Promise<shoesDataType[]> => {
    console.log("gender", gender);
    try {
      return new Promise<shoesDataType[]>((resolve, reject) => {
        if (gender === "male") {
          dbClient.query(
            `SELECT * FROM item
            WHERE gender = 'male'
            ORDER BY price ASC;
            `,
            (error: Error, rows: shoesDataType[]) => {
              if (error) {
                reject(error);
                return;
              }
              resolve(rows);
            }
          );
        } else if (gender === "female") {
          dbClient.query(
            `SELECT * FROM item
            WHERE gender = 'female'
            ORDER BY price ASC;
            `,
            (error: Error, rows: shoesDataType[]) => {
              if (error) {
                reject(error);
                return;
              }
              resolve(rows);
            }
          );
        } else {
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
        }
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  getDescItems: async (gender: string): Promise<shoesDataType[]> => {
    try {
      return new Promise<shoesDataType[]>((resolve, reject) => {
        if (gender === "male") {
          dbClient.query(
            `SELECT * FROM item
            WHERE gender = 'male'
            ORDER BY price DESC;
            `,
            (error: Error, rows: shoesDataType[]) => {
              if (error) {
                reject(error);
                return;
              }
              resolve(rows);
            }
          );
        } else if (gender === "female") {
          dbClient.query(
            `SELECT * FROM item
            WHERE gender = 'female'
            ORDER BY price DESC;
            `,
            (error: Error, rows: shoesDataType[]) => {
              if (error) {
                reject(error);
                return;
              }
              resolve(rows);
            }
          );
        } else {
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
        }
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

module.exports = { controller };
