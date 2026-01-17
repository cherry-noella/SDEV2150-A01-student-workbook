**Goal**: Practice core JavaScript and basic DOM interactions by building a small To‑Do app.

**TASK(deliverables)**

1. Build a single static page and a separate JS file (e.g., src/js/main.js).
2. Page must include:
   - An input for a new task and an "Add" button.
   - A list area that displays tasks as DOM elements.
3. Behaviour:
   - Add a non-empty task by clicking Add or pressing Enter.
   - Each task item includes:
      - Text label
      - A "Done" toggle that visually marks completion (strike-through or dim)
      - A "Delete" button that removes the item from the DOM

4. Include a short README.md explaining how to open and run the page in a browser.
5. Utilize Vite to scaffold and complete your development.

**Acceptance Criteria**
- Adding a non-empty task creates a new list item in the DOM.Pressing Enter also adds the task.
- "Done" toggles a completed style immediately.
- "Delete" removes the item immediately.
- JavaScript is modular (separate file), uses functions and event listeners, and contains at least one comment explaining logic.
- README explains how to open/test the page.
  
**Stretch Challenges (optional)**
- Persist tasks using localStorage.
- Add an "Edit" button to change task text in place.
- Show validation feedback for empty input.