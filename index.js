import { createRoot } from 'react-dom/client';
import React from "react";

import App from './src/Components/App';

const rootDOMElement = document.querySelector('.app');
const root = createRoot(rootDOMElement);
root.render(<App />);
