import { shoesDataType } from "../dataType/shoesDataType";
const dbClient = require("../service/mysqlConnect");

const controller = {
  getAllItems: async (): Promise<shoesDataType[]> => {
    try {
      const query = `SELECT * FROM item;`;
      const rows = await executeQuery(query);
      return rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  getAscItems: async (gender: string): Promise<shoesDataType[]> => {
    try {
      let query = `SELECT * FROM item`;
      let queryParams: string[] = [];

      if (gender === "male" || gender === "female") {
        query += ` WHERE gender = ?`;
        queryParams.push(gender);
      }

      query += ` ORDER BY price ASC`;

      const rows = await executeQuery(query, queryParams);
      return rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  getDescItems: async (gender: string): Promise<shoesDataType[]> => {
    try {
      let query = `SELECT * FROM item`;
      let queryParams: string[] = [];

      if (gender === "male" || gender === "female") {
        query += ` WHERE gender = ?`;

        queryParams.push(gender);
      }

      query += ` ORDER BY price DESC`;

      const rows = await executeQuery(query, queryParams);

      return rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

const executeQuery = (
  query: string,
  params: string[] = []
): Promise<shoesDataType[]> =>
  new Promise<shoesDataType[]>((resolve, reject) => {
    dbClient.query(query, params, (error: Error, rows: shoesDataType[]) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(rows);
    });
  });

module.exports = { controller };
