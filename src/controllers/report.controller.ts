import { Request, Response } from "express";
import * as mysql from 'mysql';
import { dbconfig } from '../../dbconfig';

    const connection = mysql.createConnection(dbconfig);


/**
 * End of Day report
 */
export const endofday = async (req: Request, res: Response) => {
    try {
       
        let sql = `CALL sp_end_of_day(?,?,?,?)`;
        connection.query(sql, [req.body.filter_data,req.body.filter_location,req.body.offsets,req.body.nos], (error, results) => {
            if (error) {
                return res.status(500).json({ status: "error", message: "DB Internal Error ", err:error.message })
            }
             res.status(200).json({ status: "success", data: results[0] });

            // console.log(results[0]);
            // connection.end();
          });
                 
    } catch (error) {
        
        return res.status(500).json({ status: "error", message: "DB Error ", err:error })
    }
}


/**
 * Expiring Items by date
 */
export const expiringitems = async (req: Request, res: Response) => {
    try {
       
        let sql = `SELECT * FROM cabsolinventory.vw_expiringdate;`;
        connection.query(sql, (error, results) => {
            if (error) {
                return res.status(500).json({ status: "error", message: "DB Internal Error ", err:error.message })
            }
             res.status(200).json({ status: "success", data: results });

            // console.log(results[0]);
            // connection.end();
          });

    }catch (error) {
        return res.status(500).json({ status: "error", message: "DB Error ", err:error })
    }
}

/**
 * End of Month
 */
export const endofmonth = async (req: Request, res: Response) => {
    try {
        let sql = `CALL sp_end_of_month(?,?,?,?,?)`;
        
        connection.query(sql,[req.body.startdate,req.body.enddate,req.body.filter_location,req.body.offsets,req.body.nos], (error, results) => {
            if (error) {
                return res.status(500).json({ status: "error", message: "DB Internal Error ", err:error.message })
            }
             res.status(200).json({ status: "success", data: results[0] }); 
            // console.log(results[0]);
            // connection.end();
          });

    } catch (error) {
        
        return res.status(500).json({ status: "error", message: "DB Error ", err:error })
    }
}


/**
 * Item Summary
 */
export const itemsummary = async (req: Request, res: Response) => {
    try {
        let sql = `CALL sp_item_summary(?,?,?,?)`;
        connection.query(sql,[req.body.filter_brand,req.body.filter_location,req.body.offsets,req.body.nos], (error, results) => {
            if (error) {
                return res.status(500).json({ status: "error", message: "DB Internal Error ", err:error.message })
            }
             res.status(200).json({ status: "success", data: results[0] });

            // console.log(results[0]);
            // connection.end();
          });

    } catch (error) {
        
        return res.status(500).json({ status: "error", message: "DB Error ", err:error })
    }
}



