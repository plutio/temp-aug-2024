import { Meteor } from "meteor/meteor";
import { TasksCollection } from "./tasks";
import { Task } from "./tasks";

Meteor.methods({
  "tasks.insert"({ title, status }: { title: string; status: Task["status"] }) {
    if (typeof title !== "string" || title.length === 0) {
      throw new Meteor.Error("Invalid title");
    }

    const existingTask = TasksCollection.findOne({ title });

    if (existingTask) {
      throw new Meteor.Error("Task already exists");
    }

    const task: Task = {
      title,
      createdAt: new Date(),
      status,
    };

    TasksCollection.insert(task);
  },

  "tasks.fetch"() {
    const tasks = TasksCollection.find().fetch();

    return tasks.filter(
      (task) => task.createdAt > new Date(Date.now() - 24 * 60 * 60 * 1000)
    );
  },
});
