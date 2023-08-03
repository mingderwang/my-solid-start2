// App.solid.js
import { createEffect, onCleanup, createSignal } from 'solid-js';

export default function App() {
  const [greeting, setGreeting] = createSignal();

  createEffect(async () => {
    const response = await fetch('/welcome');
    const data = await response.json();
    setGreeting(data.greeting);
  });

  return (
    <div>
      <h1>Welcome</h1>
      <p>{greeting()}</p>
    </div>
  );
}

