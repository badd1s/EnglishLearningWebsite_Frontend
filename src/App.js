import Header from './common/Header'
import Home from './pages/system/Home.js';
import Footer from './common/Footer';
import Register from './pages/system/Register.js';
import Login from './pages/system/Login.js';
import Layout from './components/system/Layout';
import Missing from './components/system/Missing';
import Unauthorized from './components/system/Unauthorized';
import RequireAuth from './components/system/RequireAuth';
import PersistLogin from './components/system/PersistLogin';
import { Routes, Route } from 'react-router-dom';
import ROLES from './config/Roles.js';
// Alphabet
import Alphabet from './pages/Learn/Alphabet.js';

//Vocabulary
import VocabularyList from './pages/Learn/Vocabulary/VocabularyList.js';
import VocabularyPage from './pages/Learn/Vocabulary/VocabularyPage.js';

//Profile
import Profile from './pages/user/Profile.js';

//Grammar
import GrammarList from './pages/Learn/Grammar/GrammarList.js';
import GrammarPage from './pages/Learn/Grammar/GrammarPage.js';

//Admin
import HomeAdmin from './pages/admin/HomeAdmin.js';
import VocabularyAdmin from './pages/admin/VocabularyAdmin.js';
import GrammarAdmin from './pages/admin/GrammarAdmin.js';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Routes>
          <Route element={<PersistLogin />}>
            <Route path="/" element={<Layout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/unauthorized" element={<Unauthorized />} />


              <Route path="/register" element={<Register />} />
              <Route path="/alphabet" element={<Alphabet />} />
              <Route path='/' element={<Home />} />

              {/* Từ vựng */}
              <Route path="/listVocabulary" element={<VocabularyList />} />
              <Route path='/listVocabulary/:id' element={<VocabularyPage />} />

              {/* Ngữ pháp */}
              <Route path="/listGrammar" element={<GrammarList />} />
              <Route path='/listGrammar/:id' element={<GrammarPage />} />

              {/*Protect these routes */}
              {/* User */}
              <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
                {/* Thông tin cá nhân */}
                <Route path='/profile/:id' element={< Profile />} />
              </Route>

              {/* Admin */}
              <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                <Route path='/admin' element={<HomeAdmin />} />
                <Route path='/admin/grammar' element={<GrammarAdmin />} />
                <Route path='/admin/vocabulary' element={<VocabularyAdmin />} />
              </Route>

            </Route>

            {/* catch all */}
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;