import "./equipment-detail.style.css"

import EquipmentDetail from "../../components/equipment-detail/equipment-detail.component";
import Footer from "../../components/footer/footer.component";
import Navbar from "../../components/navbar/navbar.component";
import EquipmentBookingsById from "../../components/equipment-booking/equipment-bookings.component";

export const EquipmentDetailPage = () => {
    return (
        <>
        <Navbar>

        </Navbar>
        <main className="equipment-container">
            <EquipmentDetail>

            </EquipmentDetail>
            <EquipmentBookingsById>

            </EquipmentBookingsById>
        </main>
        <Footer>
            
        </Footer>
        </>
    )
}

export default EquipmentDetailPage;