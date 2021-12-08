import React, {FC, useState} from "react";
import SummaryContent from "./SummaryContent";
import EditIcons from "./EditButton";
import {FormModal} from "./FormModal";
import {FormContent} from "./FormContent";
import {CardChangeToast} from "./CardChangeToast";
import TitleNavigator from "./TitleNavigator";

interface BookCardProps {
    cardId: string,
    cardOrder: number
}

export const BookCard: FC<BookCardProps> = ({cardId, cardOrder}) => {
    const [isFormModalVisible, setFormModalVisible] = useState(false);
    const [isCardChangeToastVisible, setCardChangeToastVisible] = useState(false);
    const [isShowRightArrow, setShowRightArrow] = useState(true);

    return (
        <div className="book-container">
            <SummaryContent cardOrder={cardOrder} isFrontCard={isShowRightArrow}/>
            <div>
                <div>
                    <EditIcons onEdit={() => setFormModalVisible(true)}
                               onChange={() => setCardChangeToastVisible(true)}/>
                    <FormModal visible={isFormModalVisible} onCancel={() => setFormModalVisible(false)}>
                        <FormContent onClose={() => setFormModalVisible(false)} cardId={cardId} cardOrder={cardOrder}/>
                    </FormModal>
                    <CardChangeToast cardId={cardId} visible={isCardChangeToastVisible}
                                     onCancel={() => setCardChangeToastVisible(false)}/>
                </div>
                <TitleNavigator isRightArrow={isShowRightArrow} showRightArrow={() => {
                    setShowRightArrow(!isShowRightArrow)
                }}/>
            </div>

        </div>
    );
}