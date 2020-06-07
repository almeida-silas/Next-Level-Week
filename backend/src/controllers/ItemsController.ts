import { Response, Request } from 'express';
import knex from '../config/database';

interface IItem {
  id: number;
  title: string;
  image: string;
}

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');

    const serializedItems = items.map((item: IItem) => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://localhost:3333/uploads/${item.image}`,
      };
    });

    return response.json(serializedItems);
  }
}

export default new ItemsController();
