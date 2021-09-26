import React, {useState} from "react";
import SummaryContent from "./SummaryContent";
import EditModal from "./EditButton";
import "../App.css";
import TitleNavigator from "./TitleNavigator";
import {FormModal} from "./FormModal";
import {FormContent} from "./FormContent";

const BookSummaryPage = () => {
    const [isFormModalVisible, setFormModalVisible] = useState(false);
    const showFormModal = () => {
        setFormModalVisible(true);
    }

    const closeFormModal = () => {
        setFormModalVisible(false);
    }

    return (
        <div id="book-box">
            <div id="book-container">
                <SummaryContent/>
                <div className="content-row">
                    <EditModal onEdit={showFormModal}/>
                    <FormModal visible={isFormModalVisible} onCancel={closeFormModal}>
                        <FormContent onClose={closeFormModal}/>
                    </FormModal>
                    <TitleNavigator/>
                </div>
            </div>

        </div>

    );
}
export default BookSummaryPage;