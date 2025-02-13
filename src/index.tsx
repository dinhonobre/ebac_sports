import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';  // Importe o Provider
import { store } from './redux/store';  // Importe a store do Redux
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    {/* Envolva o App com o Provider e passe a store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Se você quiser começar a medir o desempenho do seu app, passe uma função
// para registrar os resultados (por exemplo: reportWebVitals(console.log))
// ou envie para um endpoint de análise. Saiba mais: https://bit.ly/CRA-vitals
reportWebVitals();
