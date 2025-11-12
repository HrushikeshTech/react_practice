1. Which library is commonly used for navigation in React applications? 
a) React Core  
b) React Router DOM  
c) Axios  
d) Redux 
Ans:- b) React Router DOM


2. What is the purpose of <BrowserRouter>? 
a) Handles API requests  
b) Enables routing and keeps UI in sync with URL  
c) Stores component state  
d) Loads external scripts 
ANs:- b) Enables routing and keeps UI in sync with URL
3. Which hook is used to navigate programmatically in React Router v6? 
a) useParams  
b) useLocation 
c) useNavigate  
d) useEffect 

Ans:- c) useNavigate

4. Which component is used to define individual routes? 
a) <Switch> 
b) <Path> 
c) <Route> 
d) <Router> 

Ans:- c) <Route>

5. What does <NavLink> do differently from <Link>? 
a) Allows nested routes  
b) Applies an “active” class to the current link  
c) Prevents navigation  
d) Adds dynamic parameters 

Ans:- b) Applies an “active” class to the current link

6. How do you handle undefined routes in React Router DOM? 
a) Using <Default> route 
b) Using <Route path="*">  
c) Using <NotFound> component 
d) Using <Catch> block 

Ans:- b) Using <Route path="*">

7. What hook helps you access URL parameters like /user/:id? 
a) useRoute 
b) useParam 
c) useParams 
d) useLocation 

ans:- c) useParams

8. What is the correct way to nest routes inside a parent route? 
a) Using multiple <BrowserRouter> components 
b) By placing <Route> elements inside another <Route>  
c) Using multiple App() components 
d) Declaring routes inside a .json file 

Ans:- b) By placing <Route> elements inside another <Route>

9. What does the useLocation() hook return? 
a) Current route parameters 
b) The route object of the previous page 
c) Information about the current URL (pathname, search, hash)  
d) Navigation history

Ans:- c) Information about the current URL (pathname, search, hash)

Short Answer Questions
-----------------------
1. What is the difference between <Link> and <NavLink> in React Router?

Ans:- <Link> is used to navigate between routes without reloading the page, while <NavLink> works the same but also adds an “active” class or style to the link when its route matches the current URL — making it useful for highlighting the active navigation item.

2. Explain the purpose of the useNavigate() hook. 

Ans:- The useNavigate() hook in React Router is used for programmatic navigation — it lets you navigate to different routes from within your component logic  without using a <Link> component.

3. What are dynamic routes in React Router? Give an example.

Ans:- Dynamic routes in React Router are routes that include variable path segments, allowing you to render pages based on dynamic data such as user IDs or product IDs.

4. How can you handle undefined or invalid routes in React?

Ans:- You can handle undefined or invalid routes in React by adding a catch-all route using path="*". This route renders a “Not Found” or error component when no other route matches.

5. What is the use of the useParams() hook? 

Ans:- The useParams() hook in React Router is used to access dynamic parameters from the URL. It returns an object containing key-value pairs of the route parameters.