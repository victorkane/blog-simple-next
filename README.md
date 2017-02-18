A simple blog to show use of [Next.js](https://github.com/zeit/next.js) in order to choose data hydration method (data-fetch, mobx, redux...). Served its simple purpose.

Reviewed Next with-mobx and with-redux examples, finally went with simple async/await data-fetch example for time being, since Next de-structures via pages, no page is so complex it needs redux.

The Content Server (in separate repo [blog-simple-next-content-server](https://github.com/victorkane/blog-simple-next-content-server)) must be running before firing up this app.

Once Content Server is running, install and run:

```bash
npm install
npm run dev
```
