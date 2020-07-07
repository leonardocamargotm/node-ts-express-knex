import IWorker from '../models';
import Worker from '../repositories/Worker';

const createSetting = async (data: IWorker): Promise<IWorker> => {
  const worker = new Worker();

  const salary = data.salary || 1000;

  const result = await worker.create({ name: data.name, salary });

  return result;
};

export default createSetting;
