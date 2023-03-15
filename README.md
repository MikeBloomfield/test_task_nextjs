npm run dev

I've did all the requirements:

1. Typescript
2. Next.js
3. Fetching Movie API
4. Implemented search by for fetching movie by it's title
5. While clicking on item it redirects to separate item page
6. All the errors handles for user: different sing for fulfilled, pending and rejected fetches + if favourite page is empty
7. Adaptive is pretty simple but it's works (think that wasn't the case)

Bonus:

1. Styles is written in TailwindCSS
2. You can add favourite movies by clicking on heart icon, then remove them on '/favourites' page
3. Redux/Redux Toolkit is included
4. Some SEO optimizations is included

I didn't realize how to make pagination since 'page' query doesn't work properly.

Additional notes:

1. Item height is fitted according to movie picture and black background is added (type 'John Wick' to check it)
2. You can't add favourite movie twice, there is a check condition in Redux to avoid that
3. If movie doesn't have picture it renders a placeholder pic (type 'ddd' to check it)
4. Optional render of components depending on url endpoint (there's no input tag on '/favourites')
5. Loading bar before separate item page is loaded
6. Debounce function on input change to prevent too many requests (500ms)
7. Custom 404 page to handle invalid reguest

