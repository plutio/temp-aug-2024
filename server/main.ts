import { Meteor } from "meteor/meteor";
import { Task, TasksCollection } from "/imports/api/tasks";
import "/imports/api/tasksMethods";
import {
  AutomationsCollection,
  Automation,
  AutomationTrigger,
  AutomationEntity,
} from "/imports/api/automations";

async function insertTask({
  title,
  status,
}: Pick<Task, "title" | "status">): Promise<void> {
  await TasksCollection.insertAsync({ title, status, createdAt: new Date() });
}

async function insertAutomation({
  trigger,
  condition,
  action,
}: Pick<Automation, "trigger" | "condition" | "action">): Promise<void> {
  await AutomationsCollection.insertAsync({
    trigger,
    condition,
    action,
  });
}

Meteor.startup(async () => {
  if ((await TasksCollection.find().countAsync()) === 0) {
    await insertTask({
      title: "Do the Tutorial",
      status: "COMPLETED",
    });

    await insertTask({
      title: "Follow the Guide",
      status: "PENDING",
    });

    await insertTask({
      title: "Read the Docs",
      status: "PENDING",
    });

    await insertTask({
      title: "Discussions",
      status: "COMPLETED",
    });
  }

  if ((await AutomationsCollection.find().countAsync()) === 0) {
    await insertAutomation({
      trigger: {
        type: AutomationTrigger.CREATE,
        entity: AutomationEntity.TASK,
      },
      condition: {
        type: "STATUS",
        value: "PENDING",
      },
      action: {
        type: "NOTIFY",
        value: "EMAIL",
      },
    });

    await insertAutomation({
      trigger: {
        type: AutomationTrigger.UPDATE,
        entity: AutomationEntity.TASK,
      },
      condition: {
        type: "STATUS",
        value: "PENDING",
      },
      action: {
        type: "NOTIFY",
        value: "EMAIL",
      },
    });

    await insertAutomation({
      trigger: {
        type: AutomationTrigger.DELETE,
        entity: AutomationEntity.TASK,
      },
      condition: {
        type: "STATUS",
        value: "PENDING",
      },
      action: {
        type: "NOTIFY",
        value: "EMAIL",
      },
    });

    await insertAutomation({
      trigger: {
        type: AutomationTrigger.CREATE,
        entity: AutomationEntity.PROJECT,
      },
      condition: {
        type: "STATUS",
        value: "PENDING",
      },
      action: {
        type: "NOTIFY",
        value: "EMAIL",
      },
    });
  }
});
