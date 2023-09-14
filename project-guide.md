## Project used technology
1. Project goal(Home/landing page,< Authentication,< Backend,< JWT,< Admin Panel,< Payment < getway,< image Hosting,< Admin only access)
2. React Router
3. Tailwind
4. DaisyUI
5. React awesome components(react-responsive-carousel)
- swipe-react-navigation
6. React Rating

# step by step project setup
## Final Project Part-1
1. test is `setup project` works or not
2. Setup `routes`, `layout` and footer
  - `<RouterProvider router={router} /> keeps the RouterProvider in main.jsx file`
  - create Routes folder & create file within Routes for routes(createBrowserRouter)
  - create Main.jsx layout file within Layout folder and connect to routes
  - create Pages folder within src folder 
  - create Page folder such as `shared` page(Navbar,Footer), `Home` page & all required pages  within Pages folder.
  - create Home folder,Banner folder, and all required folders within `Home` pages
  - for footer & navbar components create footer.jsx & navbar.jsx file within footer folder &navbar folder of  shared page, and connect with Main.jsx file Layout
  - connect pages  to routes such  as for home page ,home route
  - set up width of website
```sh
 <div className='max-w-screen-xl mx-auto'>
       <RouterProvider router={router}/>
       </div>
```
3. Create simple Top Banner react responsive carousel
- for navbar use  class(fixed z-10 bg-opacity-30 bg-block text white max-w-screen-xl)
4. Use swiper JS to create a category Swiper
5. Shared section title for different sections
6. Show shared Popular menu items in the home page 
7. Featured items section
8. Create Parallax and Add Testimonials with react rating
9. Added Bistro Boss section
## Final Project part-2
- Dynamic Page Title By Route Using React Helmet
- Implement Cover With With Blur Parallax Using React Parallax
- Create Custom Hook UseMenu To Load Menu Data
- Display different menu category items with cover
- Simple Food Order page with tabs
- Display food items on different tabs
- Select right tab based on the category
- Load menu data from server
## Final Project part-3
