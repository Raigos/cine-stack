# Project Assumptions and Notes

## Technical Decisions

- Selected pnpm for its monorepo capabilities, as I wanted to do a monorepo
- TypeScript was required but aligns with my preferences anyway
- Implemented RTK Query for bonus points, though TanStack Query would be my typical choice for modern React
- Considering GraphQL for the wrapper but need to be mindful of project scope
- Using React Hook Form for form management, I use hooks regularly anyway
- Added Docker support for bonus points, though I usually wouldn't use it for JS/Node projects (package.json handles
  most cases)
- Using Material-UI for styling, despite its overhead, to meet project bonus points, I would have used shadUI
- Added the eslint, prettier, .editorconfig for consistency
- I added `husky` and `lint-staged` so that the code lints and prettier before commiting automatically for consistency
- I added the light and dark theme because I was looking into it the day before I received the test task and wanted to
  try it out
- After the setup is done, I will continue working on the wrapper

## Project Structure

- I have 3 packages front, wrapper, and shared. I hope to share some TS types or validations in the `/shared`

