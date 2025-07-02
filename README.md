# Moment 2
## Objectorienterad programmering- Webbplats todolist

- Började med att starta upp ett vite projekt och utformade en README-fil. 
- Kontrollerade att projektet synkade till Netlify för publicering. 
- Startade upp med att skapa element i index-html dokumentet. 
- Utformade designen för för html dokumentet i filen style.css. 
- Gjorde en filstruktur på TypeScript filerna som ska bygga upp Att-göra listan på webbplatsen.
- Gav dem namn baserat på deras innehåll.
- I Itodo.ts filen skapades interfacet (Todo) med dess egenskaper (task, completed, priority).
- I filen todoList.ts gjordes klassen TodoList som grundar sig på interfacet.
- Vidare i filen todolistManager.ts skapades de attribut och metoder för klassen som klassen skulle innehålla 
(todos, addTodo, markTodoCompleted, getTodos, saveToLocalStorage och loadFromLocalStorage).
- Sedan i main.ts filen utformades den utskrift till DOM för de element som ska visas på webbplatsen så som formulär med inputfält och knappar. Funktioner gjordes för att i dem använda metoderna som skapades med klassen. 
- En utökad metod gjordes i todoListManager.ts för att via en händelsehanterare via en knapp (i main.ts) kunna radera alla tillagda todos (att-göra uppgifter). 


## Källor: 
- MittUniversitetet(VIDEO): Uppföljning Moment 2. Lars Lundin April 10, 2025. Hämtad från: https://play.miun.se/media/Uppf%C3%B6ljning+Moment+2/0_tfimzssc 

### Skriven av: thne1900, 2025.