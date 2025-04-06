import { inject, injectable } from 'tsyringe';

import { Prisma, Item } from '@prisma/client';

@injectable()
export default class CreateItemService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute(data: Prisma.ItemCreateInput): Promise<Item> {
    const user = this.usersRepository.createItem(data);
    return user;
  }
}
