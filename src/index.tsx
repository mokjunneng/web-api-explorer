import { App } from './App';
import { createRoot } from 'react-dom/client';

const getRoot = () => {
  const existingRoot = document.getElementById('root');

  if (existingRoot) { return existingRoot; }

  const newRoot = document.createElement('div');
  newRoot.id = 'root';
  document.body.appendChild(newRoot);

  return newRoot;
};

// Render
const clientRender = () => {
  const root = createRoot(getRoot());

  root.render(<App />);
};
clientRender();
