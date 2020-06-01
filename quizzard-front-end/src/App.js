import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Play from './components/quiz/Play';
import QuizSummary from './components/quiz/QuizSummary';
import Register from "./components/Register/Register";
import AuthProvider from "./contexts/auth";
import Login from "./components/Login/Login";

 function App() {
  return (
      <AuthProvider>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/play/quiz" exact component={Play} />
          <Route path="/play/quizSummary" exact component={QuizSummary} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Router>
      </AuthProvider>
  );
}

export default App;
