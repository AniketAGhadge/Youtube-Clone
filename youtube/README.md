
" First step Create Raw UI Design " :- (On Pen and Paper then same on UI)  ------


Create react app using command npx create-react-app projectName
            npx stands for node package exection
            npx used when we are running that command only one time through out the project
            npm stand for Node Package Module
            npm used when we are going to use that command more than one time

Install Tailwindcss npm i -D tailwindcss
            -D is for development
            (a)     Create tailwind config by npx tailwindcss init
            (b)     Add config in module 
                        ["./src/**/*.js"] - If we have multiple type of file where we are useing tailwind then we can use ["./src/**/*.{js,html}"]
            (c)     clear all part from App.css and add
                        @tailwindcss base
                        @tailwindcss component
                        @tailwindcss utilities

Create component folder inside src 

Create Header.js inside component folder
            -   Add all images required for Header

Create Sidebar.js inside component folder
            -   Add all images required for Sidebar

Create ButtonList.js and VideoContainer.js inside component folder

Create MainContainer.js inside component folder
            -   Add <ButtonList/> and <VideoContainer/>


Create Body.js inside component folder
            -   Add <Sidebar/> and <Maincontainer/> (Use flex so sidebar and maincontainer will get to next to each other)

Add <Header/> and <Body/> in App.js

------------------------------------------------------------------------------------------------------------------------------------

"Creating Redux Store" so we can call action for Hamburger icon collaps and open :-

"/When we click it dispatch action which call reducer function which create slice in REdux store/"

Install Reduxjs Toolkit
        npm i @reduxjs/toolkit    --- used to install redux libery
        npm i react-redux         --- used to install libery to understand the redux to react

Create utils folder inside src folder
        - Create store.js in utils
                - In store we will configure store by using configureStore({})
        - Create slice in utile name as navBarSlice.js
                - we will create slice using createSlice which will take name, initialState and reducers.
                - in reducers we will create actions
                - export action as export {actionName} = fileName.actions
                - export reducer as export default fileName.reducer
        - In store.js we will add reducer in configureStore with its name and fileName as name : fileName

Done with creating REdux Store.

------------------------------------------------------------------------------------------------------------------------------------

Creating action so that on click Hamburger the sidebar visable and hide :-

In Header.js
        - We will create onCLick function on Hambergurger icon
        - Onclick we will dispatch a action using useDispatch() which will call the action created in reducers function in navBarSlice
        - That action function takes state as paramater To know the state we will subscribe the store by using useSelector in sidebar.js which will point to exact action from store e.g store.app.isMenuOpen then we will use early binding or ternary operator to check the state.

-----------------------------------------------------------------------------------------------------------------------------------------






