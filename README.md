I've did all the requirements:

1. Typescript
2. Next.js
3. Fetching Movie API
4. Implemented search by for fetching movie by it's title
5. While clicking on item it redirects to separate item page
6. All the errors handles for user: different sing for fulfilled, pending and rejected fethes + if favourite page is empty
7. Adaptive is pretty simple but it's works (think that wasn't the case)

Bonus:

1. Styles is written in TailwindCss
2. You can add favourite movies by clicking on heart icon
3. Redux/Redux Toolkit is included
4. Some SEO optimizations is included

I didn't realize how to make pagination since 'page' query doesn't work properly.

Additional notes:

1. Item height is fitted according to movie picture and gray background is added (type 'John Wick' to check it)
2. You can't add favourite movie twice, it's okay
3. If movie doesn't have picture there goes placeholder (type 'ddd' to check it)
4. Optional render depending on url endpoint (there's no input on '/favourites')
5. Loading bar before separate item page is loaded
6. Debounce function on input change to prevent too many requests (500ms)
