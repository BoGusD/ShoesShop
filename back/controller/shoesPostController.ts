import { shoesDataType } from "../dataType/shoesDataType";
const dbClient = require("../service/mysqlConnect");

const controller = {
  addItem: async (data: shoesDataType) => {
    try {
      const query = `INSERT INTO item (itemImg, price, gender, itemName) VALUES ('${data.itemImg}', '${data.price}', '${data.gender}', '${data.itemName}');`;
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
