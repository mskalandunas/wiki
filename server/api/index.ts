import { Router } from 'express';

export const router = Router();

const getController = (req, res) => {
  console.log(req);
  console.log(res);

  res.send('Hello world');
}

router.route('/api/')
  .get(getController);