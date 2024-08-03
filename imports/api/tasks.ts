import { Mongo } from "meteor/mongo";

export interface Task {
  _id?: string;
  title: string;
  createdAt: Date;
  status: "PENDING" | "COMPLETED";
}

export const TasksCollection = new Mongo.Collection<Task>("tasks");
