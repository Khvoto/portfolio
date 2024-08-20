 
const collection = document.getElementsByClassName('menu-item'); // Creates an HTMLCollection of menu items
const menuItems = Array.from(collection); // Converts the HTMLCollection to an array

menuItems.forEach((item) => {
  item.addEventListener('click', () => {

    /*
    * The following code is both a test during development to have an easy control of proper targeting of the click event.
    * As a rule, I would recommend commenting out this kind of code for production, as we don't want any leftovers.
    */
    const getMenuItemText = item.getElementsByClassName('menu-item-text'); // Find the text inside the menu item
    const makeArrayOfMenuItemText = Array.from(getMenuItemText); // Convert the HTMLCollection to an array
    console.log(makeArrayOfMenuItemText[0].innerText); // Logs the text of the clicked menu item for testing purposes

    /*
    * Following is the code that performs the desired action when a menu item is clicked.
    * It will toggle the different menu items content.
    */

    
  });
});
