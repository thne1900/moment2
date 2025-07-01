# Moment 2
## Objectorienterad programmering- Webbplats todolist

- Började med att starta upp ett vite projekt och utformade en README-fil. 
- Kontrollerade att projektet synkade till Netlify för publicering. 
- Startade upp med att skapa element i index-html dokumentet. 
- Utformade designen för för html dokumentet i filen style.css. 
- Gjorde en filstruktur på TypeScript filerna som ska bygga upp Att-göra listan på webbplatsen.
- Gav dem namn baserat på deras innehåll.
- I todo.ts filen skapades interfacet Todo med dess egenskaper (task, completed, priority).
- I filen todoList.ts gjordes klassen TodoList som grundar sig på interfacet.
- Vidare i filen todolistManager.ts skapades de attribut och metoder för klassen som klassen skulle innehålla 
(todos, addTodo, markTodoCompleted, getTodos, saveToLocalStorage och loadFromLocalStorage).
- Sedan i main.ts filen utformades där utskrift till DOM för de element som ska visas på webbplatsen. Funktioner gjordes för att i dem använda metoderna som skapades med klassen. 