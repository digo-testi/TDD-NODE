import { MongoClient } from "mongodb";

export const MogoHelper = {
  client: null as MongoClient,
  async connect(uri: string): Promise<void> {
    this.client = await MongoClient.connect(process.env.MONGO_URL);
  },
  async disconnect () {
    await this.client.close()
  }
};
