# useClearParams

React hook to to return and clear the url parameters

## Features

- clears parameters from the url
- returns url parameters as a URLSearchParam object

## Install

```bash
yarn add use-clear-params
# or
npm i use-clear-params --save
```

## Demos

```tsx
import useClearParams from "use-clear-params";

function App() {
  const query = useClearParams();

  // assuming the url is something like:
  // https://www.your-site/?username=jdoe&email=jane@gmail.com
  console.log(query.get("username")); // jdoe
  console.log(query.get("email")); // jane@gmail.com

  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

```
