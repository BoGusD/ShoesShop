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
  getKeyWordItems: async (data: string): Promise<shoesDataType[]> => {
    try {
      const query = `SELECT * FROM item
      WHERE itemName LIKE '%${data}%';`;
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
  addItem: async (data: shoesDataType) => {
    try {
      // // 중복 체크
      // const duplicateCheckQuery = `SELECT COUNT(*) AS count FROM item WHERE itemName = '${data.itemTitle}';`;
      // const duplicateCheckResult = await executeQuery(duplicateCheckQuery);
      // const duplicateCount: number = duplicateCheckResult[0].count;

      // if (duplicateCount > 0) {
      //   // 중복된 데이터가 이미 존재하는 경우
      //   throw new Error("중복된 데이터입니다.");
      // }

      // 중복된 데이터가 없는 경우 데이터 삽입
      const query = `INSERT INTO item (id, itemImg, price, gender, itemName) 
      VALUES ('${data.id}', '${data.itemImg}', '${data.price}', '${data.gender}', '${data.itemTitle}');`;
      const rows = await executeQuery(query);
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
