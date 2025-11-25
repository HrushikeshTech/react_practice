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

What is Next.js? 
-----------------
Next.js is a React framework that makes building modern web applications easier and faster. It adds powerful features on top of React so you don’t have to configure everything manually.

Difference between React and Next.js
-------------------------------------
 React is a JavaScript library for building UI components, but it handles only the frontend. Next.js is a full React framework that adds routing, server-side rendering, and backend APIs out of the box. With React you must configure things manually, while Next.js provides built-in optimization and better SEO. In short, React is UI-focused, and Next.js is full-stack and production-ready.

What is Server-Side Rendering? 
--------------------------------
Server-Side Rendering  is a technique where a web page is generated on the server before being sent to the browser.
Instead of sending an empty HTML file and loading data on the client, the server prepares the page with content already filled in.
This makes pages load faster and improves SEO because search engines can read the fully rendered HTML instantly.

What is Client-Side Rendering? 
--------------------------------
Client-Side Rendering (CSR) is when the browser downloads a mostly empty HTML file and then uses JavaScript to fetch data and build the UI directly on the user's device.
The initial load may be slower, but once loaded, the app feels fast and interactive—ideal for single-page applications like React.

How does routing work in Next.js? 
-----------------------------------
 In Next.js, routing works using a file-based system, where every file inside the pages/ or app/ folder automatically becomes a route. You don’t need React Router. Folders create nested routes, and special files like [id].js allow dynamic routing. The structure of your files directly controls how users navigate your app.

What is a dynamic route?  
-------------------------
A dynamic route in Next.js is a route that can change based on a variable value, such as a user ID or product ID.
You create it by naming a file with square brackets, like [id].js.
This allows URLs like /users/1 or /products/45 to use the same page template.
Dynamic routes are useful when you need to display different data using one component.

What are API Routes in Next.js? 
--------------------------------
API Routes in Next.js allow you to create backend APIs inside your Next.js project without needing a separate server.
You simply add files inside the pages/api/ folder (or app/api/ in the App Router), and each file automatically becomes an API endpoint.
These routes can handle requests like GET, POST, PUT, DELETE.
They’re useful for tasks like form handling, database queries, and authentication.

What is getStaticProps used for?
---------------------------------
getStaticProps is a Next.js function used to fetch data at build time for a page.
It allows Next.js to generate a static HTML page with pre-fetched data, making the page load very fast.
This is ideal for content that doesn’t change often, like blogs or product pages.
It runs only on the server side and never in the browser.

What is the purpose of the app directory in Next.js?  
----------------------------------------------------
The app directory in Next.js is used for the new App Router, which provides a modern way to build full-stack applications.
It introduces features like server components, layouts, nested routing, and streaming.
Pages and routes are created using folders and page.js files.
Overall, the app directory makes routing more powerful, organized, and scalable compared to the older pages directory.

What is the use of the Image component in Next.js?
--------------------------------------------------
The Image component in Next.js is used to display images in an optimized way.
It automatically handles lazy loading, responsive sizing, and image compression to improve performance.
It also serves images in modern formats for faster loading.
Overall, it makes your website faster and more efficient compared to using a normal <img> tag.