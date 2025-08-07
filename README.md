# Moment 2
## Objectorienterad programmering- Webbplats todolist

- Började med att starta upp ett vite projekt och utformade en README-fil (för arbetsprocessen). 
- Kontrollerade att projektet synkade till Netlify för publicering. 
- Startade upp med att skapa element i index.html dokumentet. 
- Utformade designen för html dokumentet i filen style.css och tillägg av symboler. 
- Gjorde en filstruktur på de TypeScript-filerna som ska bygga upp "Att-göra listan" på webbplatsen.
- Gav filerna namn baserat på deras kodinnehåll.
- I Itodo.ts filen skapades interfacet (Todo) med dess egenskaper (task, completed, priority).
- I filen todoList.ts gjordes klassen TodoList tillsammans med en konstruktor som grundar sig på interfacet, som också importerades till klassen.
- Vidare i filen todolistManager.ts skapades en TodoListManager-klass som innehåller "todos" som en array av Todoobjekt. I konstruktorn visas todoslistan som en tom array och med anrop för att ladda från localStorage. 
- Därefter har de metoder som ska finnas med skapats i samma fil. 
- I metoden "addTodo" kan en ny todo läggas till. Den har konstruerats med kontroller för att se till så att "task" är giltig med strängar, om inte så returnerar detta som falskt. Även om "priority" inte är ett heltal mellan 1 och 3 så returneras detta som falskt. Om "task" och "priority" stämmer, skapas ett nytt todoobjekt med de inmatade värdena. Samtidigt sätts "completed" till falskt. Nya todo läggs till i todolistan och sparas till localStorage och returerar detta som sant. 
- I metoden "markTodoCompleted" markeras en todo som klar. Detta kontrolleras genom att se om todoIndex är ett heltal mellan giltligt intervall. Om detta är korrekt sätts sant på "completed" för det specifika todot. Listan sparas också till localStorage. 
- Metoden "getTodos" ger den aktuella listan på todos av en array. 
- Metoden "saveToLocalStorage" gör om listan av todos till en JSON-sträng via "todos". Sparar denna till localStorage. Om detta inte fungerar syns ett felmeddelande i konsolen. 
- I metoden "loadFromLocalStorage" hämtas informationen från localStorage via "todos". Om det finns sparad information, görs ett försökt till att parsa JSON strängen till ett objekt. En kontroll görs om detta är en array. Sedan filtrereras informationen ut som inte passar in på task, completed och priority, för att sedan lägga till den filtrerade litan till todos. Vid eventuella fel syns ett felmeddelande i konsolen och listan inaktiveras.
- Metoden "deleteTodos" rensar alla todos som finns i listan. Sparar sedan den tomma listan till localStorage.
- Sedan i main.ts filen har det utformats den utskrift till DOM för de element som ska visas på webbplatsen. 
- I början av main.ts skapas en instans av klassen "TodoListManager" som hanterar listans innehåll. För att sedan skriva ut den aktuella listan i konsolen. 
- En händelsehanterare för hela HTML-sidan görs (DOMContentLoaded) och när den är färdigladdad inhämtas formuläret. En annan händelsehanterare läggs på formuläret, med tillägg på "event.preventDefault" förhindras det att skickas på det vanliga sättet (sidan behöver inte laddas om igen).Sedan anropas funktionen "createTodo", som kan lägga till ny uppgift.
- Funktionen "renderTodoList", hämtar in listan och sätter den som tom. Kör en loop för att gå igenom listan på alla todos. Skapar li-element för varje uppgift och en checkbox för att kunna markera varje uppgift som klar. En händelsehanterare som reagerar på ändring i checkboxen och vid markerad som klar, görs listan om. Utskrift på hur "task" och "priority" skrivs ut och syns på webbplatsen. Har lagt till en klass: "done" är slutförd och då blir uppgiften genomstruken. Därefter läggs "li" till i listan i DOM. 
- I funktionen "createTodo" inhämtas elementen (inmatningsfältet för "task" och "priority" ) från HTML-dokumentet som ska användas vid utskrift till webbplatsen. Texten från inmatningsfältet hämtas och hanteras, och gör om priritet till nummer. Tillägg av ny uppgift i listan görs via "myTodoList.addTodo". Om det lyckas töms inputfälten och gör om listan. Om inte, så syns ett felmeddelande på webbplatsen. 
- För att radera alla tillagda todos, hämtas knapp, som vid klick anropar "deleteTodo" som tar bort alla todos. Därefter görs listan om. 
- Vid sinomladdning, visas den aktuella todolistan. 


## Källor: 
- (Föreläsning) TypeScript föreläsning 2. Lars Lundin, 2025-04-02.
- (Föreläsning) BankInterface. Lars Lundin, 2025-04-02.
- (Föreläsning) BankKlasser. Lars Lundin, 2025-04-03.
- (Föreläsning): Uppföljning Moment 2. Lars Lundin 2025-04-10.
- (Internet) https://how.dev/answers/what-is-the-stringtrim-method-in-typescript
- (Internet) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
- (Internet) https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
- (Internet) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger 
- (Internet) https://fontawesome.com/ 

### Skriven av: thne1900, 2025.