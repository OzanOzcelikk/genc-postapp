import './App.css';
import { ToastContainer } from "react-toastify";
import AppRouter from './router/AppRouter';
import AuthContextProvider from './contexts/AuthContextProvider';
import { BlogProvider } from './contexts/BlogContext';


function App() {
  return (
    <AuthContextProvider>
      <BlogProvider>
        <AppRouter/>
    <ToastContainer/>
    </BlogProvider>
    
    </AuthContextProvider>
    
   
    
    
  );
}

export default App;
