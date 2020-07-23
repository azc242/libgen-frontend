# General
This project was built to create a more user-friendly, appealing, and forgiving interface and web application alternative to Library Genesis. Library Genesis is an online database for files, books, and much more.
### Autocorrecting
The autocorrecting feature supported takes the [most common misspellings](https://en.wikipedia.org/wiki/Wikipedia:Lists_of_common_misspellings/For_machines) and corrects them. It also takes the most common contractions in the English language and corrects misspellings off by up to two characters.
For example, searching

> cant hurt me

would correct to:
> can't hurt me

Similarly, searching

> tghe boook theif

would correct to:

> the book thief

Note: This static frontend works in conjunction with its [backend counterpart](https://github.com/azc242/libgen-backend).

## Available Scripts

Clone the repo, then in the frontend directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## What I Learned

In constructing the frontend, I learned various skills. In addition to working with the React library, I also used various custom pre-built components. I also got to work on state management using React Hooks, as well as implementing autocorrecting features. Learning how to connect a backend and make get requests to an API completely separate from the React frontend was also challenging, but important.

## Dependencies
- [react](https://www.npmjs.com/package/react)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [@material-ui/core](https://www.npmjs.com/package/@material-ui/core)
- [@material-ui/icons](https://www.npmjs.com/package/@material-ui/icons)
- [@material/card](https://www.npmjs.com/package/@material/card)
- [axios](https://www.npmjs.com/package/axios)
- [micro-spelling-corrector](https://www.npmjs.com/package/micro-spelling-correcter)
- [misspellings](https://www.npmjs.com/package/misspellings)
