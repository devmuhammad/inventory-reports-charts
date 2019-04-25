import { Router } from 'express'
const router = Router();
import * as ChartController from "../controllers/chart.controller"


// Authentication Routes
router.get('/stockstatus', ChartController.stockStatus); //
router.get('/brandchart', ChartController.brandChart);  //
router.get('/monthofstock', ChartController.monthofStock); //
router.get('/avgmonthlyconsumption', ChartController.averageMonthlyConsumption); //
router.get('/avgitemconsumption', ChartController.averageItemConsumption); //
router.get('/minmaxconsumption', ChartController.minMaxConsumption); //
router.get('/daysofexpiry', ChartController.daysOfExpiry); //
router.post('/salessummary', ChartController.salesSummary); //

export = router;
