# Project Assumptions and Notes

## Technical Decisions

- Selected pnpm for its monorepo capabilities, as I wanted to do a monorepo
- TypeScript was required but aligns with my preferences anyway
- Implemented RTK Query for bonus points, though TanStack Query would be my typical choice for modern React
- Considering GraphQL for the wrapper(since it solves a lot of rest API shortcomings) but need to be mindful of project scope
- Using React Hook Form for form management, I use hooks regularly anyway
- Added Docker support for bonus points, though I usually wouldn't use it for JS/Node projects (package.json handles
  most cases)
- Using Material-UI for styling, despite its overhead, to meet project bonus points, I would have used shadUI
- Added the eslint, prettier, .editorconfig for consistency
- I added `husky` and `lint-staged` so that the code lints and prettier before commiting automatically for consistency
- I added the light and dark theme because I was looking into it the day before I received the test task and wanted to
  try it out
- After the setup is done, I will continue working on the wrapper
- After re-reading the task, I will not be using graphQL since the task explicitly says "Rest api service based on node", using it might show initiative but it can also show that I don't follow instructions carefully. Better be cautious
- After that, I will go through the nest.js documentation to refreshen my memory
- I think I finished with the wrapper next up the client, I should have added swagger for self documenting endpoints.. oh well maybe after the client
- I got home late and didn't want to work on the client yet, but I decided to take a look at the wrapper to see if I could find some problems and indeed I did
- I made sure to use postman before working on the client to make sure all the responses are  working
- With Christmas, working was a hectic. but finished the project

## Project Structure

- I have 3 packages front, wrapper, and shared. I hope to share some TS types or validations in the `/shared`

