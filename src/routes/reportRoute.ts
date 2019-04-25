import { Router } from 'express'
const router = Router();
import * as ReportController from "../controllers/report.controller"


// Authentication Routes
router.post('/endofday', ReportController.endofday); //endpoint for endof Day post
router.get('/expiringitems', ReportController.expiringitems);  //endpoint for expiringitem post
router.post('/endofmonth', ReportController.endofmonth); //endpoint to end of Month  post
router.post('/itemsummary', ReportController.itemsummary); //endpoint to end of Month  post

export = router;
