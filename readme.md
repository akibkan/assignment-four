 1: The main difference between them is the different methods for finding elements from the DOM.


 2: This can be done in 3 steps. First, a new tag is created using document. CreateElement. Then, classlist is used to add the text content. Then, it is displayed at the specified location using the appendchild method.


3: Event Bubbling and How It Works Event bubbling is a JavaScript mechanism where when an event (such as a click) occurs on an element, it is not limited to that element. Rather, the event flows through all its parent or ancestor elements above it. For example, if you click on a button inside a div, the click event will first be fired on the button, then it will reach its parent div, and finally it will go up to the document or window object. This works just like an air bubble rising from under water.


4: Event Delegation and its Need Event delegation is a technique where instead of adding separate event listeners to each child element, a listener is added to their common parent element. This is possible due to the convenience of event bubbling, because whatever happens in the child element, it will eventually reach the parent element. This reduces memory consumption and makes the code much more dynamic. Especially when you create new elements with JavaScript, there is no need to install a separate listener every time, because the parent element is already ready to hold all the news.


Difference between preventDefault() and stopPropagation() Although these two methods control the behavior of events, their functions are completely different. preventDefault() basically stops a default or normal action of the browser; such as preventing a link from going to another page when you click on it or a page from reloading when you submit a form. On the other hand, the stopPropagation() method stops the event bubbling process. That is, if you use it on an element, that event will no longer reach its parent elements above it. In simple terms, one changes the behavior of the browser, while the other prevents the event from propagating upwards.