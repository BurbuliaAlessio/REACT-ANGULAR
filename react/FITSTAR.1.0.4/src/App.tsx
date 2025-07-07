import {Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/home/home.page.tsx';
import Login from './pages/login/login.page.tsx';
import Register from './pages/register/register.component.tsx';
import AboutUs from './pages/aboutUs/about-us.page.tsx';
import ErrorPage from './pages/error/error.page.tsx';
import { EquipmentsPage } from './pages/EquipmentsPage/equipments.page.tsx';
import EquipmentDetailPage from './pages/equipmentDetailPage/equipment-detail.page.tsx';
import PersonalAreaPage from './pages/presonalAreaPage/personal-area.page.tsx';

function App() {
	return (
		<BrowserRouter>
		<Routes>
		  <Route index element={<Home />} />
		  <Route path="/aboutUs" element={<AboutUs />} />
		  <Route path="/ourEquipments" element={<EquipmentsPage />} />
		  <Route path="/ourEquipments/:id" element={<EquipmentDetailPage />} />
		  <Route path="/personalArea" element={<PersonalAreaPage />} />
		  <Route path="/login" element={<Login />} />
		  <Route path="/register" element={<Register />} />
		  <Route path="/errorpage404" element={<ErrorPage />} />
  
		  {/* Catch all other undefined routes and redirect them to error page */}
		  <Route path="*" element={<Navigate to="/errorpage404" />} />
		</Routes>
	  </BrowserRouter>
	)
}

export default App;
