import { Router } from 'express';
import { testController } from '../controllers/test';
const router = Router();

router.get('/test', testController.test);

export default router;
