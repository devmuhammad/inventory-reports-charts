import { Request, Response } from "express";
import * as mysql from 'mysql';
import { dbconfig } from '../../dbconfig';

    const connection = mysql.createConnection(dbconfig);


/**
 * Brand Chart
 */
export const brandChart = async (req: Request, res: Response) => {
    try {
       
        let sql = `CALL sp_brand_chart()`;
        connection.query(sql, (error, results) => {
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
 * Stock Status
 */
export const stockStatus = async (req: Request, res: Response) => {
    try {
       
        let sql = `CALL sp_stock_status()`;
        connection.query(sql, (error, results) => {
            if (error) {
                return res.status(500).json({ status: "error", message: "DB Internal Error ", err:error.message })
            }
             res.status(200).json({ status: "success", data: results[0] });

            // console.log(results[0]);
            // connection.end();
          });

    }catch (error) {
        return res.status(500).json({ status: "error", message: "DB Error ", err:error })
    }
}

/**
 * Month of Stock
 */
export const monthofStock = async (req: Request, res: Response) => {
    try {
        let sql = `CALL sp_month_of_stock()`;
        
        connection.query(sql, (error, results) => {
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
 * Average Monthly Consumption
 */
export const averageMonthlyConsumption = async (req: Request, res: Response) => {
    try {
        let sql = `CALL sp_avg_monthly_consumption()`;
        
        connection.query(sql, (error, results) => {
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
 * Average Item Consumption
 */
export const averageItemConsumption = async (req: Request, res: Response) => {
    try {
        let sql = `CALL sp_avg_item_consumption()`;
        
        connection.query(sql, (error, results) => {
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
 * Min Max Monthly Consumption
 */
export const minMaxConsumption = async (req: Request, res: Response) => {
    try {
        let sql = `CALL sp_minmax_consumption()`;
        
        connection.query(sql, (error, results) => {
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
 * Days Of Expiry
 */
export const daysOfExpiry = async (req: Request, res: Response) => {
    try {
        let sql = `CALL sp_days_of_expiry()`;
        
        connection.query(sql, (error, results) => {
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
 * Sales Chart
 */
export const salesSummary = async (req: Request, res: Response) => {
    try {
        
        let sql = `CALL sp_sales_chart(?)`;
        connection.query(sql,[req.body.filter_time], (error, results) => {
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



