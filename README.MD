It is a basic Meteor example app with a few small tweaks. Please time box your total time spent on it and keep in mind that there are no bonus points for doing more than asked 
 
App is a very simple POC to create tasks. It displays tasks created in the last 24 hours. Status and title (non empty, must have valid characters apart from spaces) are required.

Things to do:

1.According to the details mentioned above, can you spot a bug and fix it?\
2.Can you find potential inefficiencies or performance issues in 2 existing task methods on the server? If so, tr y to improve it.\
3.There might be something wrong in imports/ui/components/task-item.tsx file… Or not 🤔\
4.Add a new method to Delete a task and a button on the UI (no need for any CSS).\
5.We have an unused file imports/api/automations.ts which defines a basic interface of Automations. It already has a few entries inserted in the DB (server/main.ts). Connect existing 2 task methods and the one you just created so that it triggers Automations action according to trigger and condition. For example, if task is created and has a status of PENDING, trigger automation's action (action can just be a simple console.log())\
6.Any other small tweaks to code you can think of. No refactors 🙂\