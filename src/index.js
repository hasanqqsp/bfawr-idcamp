import React from 'react';
import { createRoot } from 'react-dom/client';
import NotesApp from './components/NotesApp';
// import style
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import { BrowserRouter } from 'react-router-dom';
const root = createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <NotesApp />
    </BrowserRouter>
    
);