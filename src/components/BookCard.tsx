import React, {FC, useState} from "react";
import SummaryContent from "./SummaryContent";
import EditIcons from "./EditButton";
import {FormModal} from "./FormModal";
import {FormContent} from "./FormContent";
import {CardChangeToast} from "./CardChangeToast";
import TitleNavigator from "./TitleNavigator";
import {useSelector} from "react-redux";
import {State} from "../state";

interface BookCardProps {
    cardId: string,
    cardIndex:number
}
export const BookCard:FC<BookCardProps> = ({cardId,cardIndex}) => {
    const [isFormModalVisible, setFormModalVisible] = useState(false);
    const [isCardChangeToastVisible, setCardChangeToastVisible] = useState(false);

    return (
        <div id="book-container">
            <SummaryContent/>
            <div>
                <div>
                    <EditIcons onEdit={() => setFormModalVisible(true)}
                               onChange={() => setCardChangeToastVisible(true)}/>
                    <FormModal visible={isFormModalVisible} onCancel={() => setFormModalVisible(false)}>
                        <FormContent onClose={() => setFormModalVisible(false)} cardId={cardId} cardIndex={cardIndex}/>
                    </FormModal>
                    <CardChangeToast cardIndex={cardId} visible={isCardChangeToastVisible}
                                     onCancel={() => setCardChangeToastVisible(false)} />
                </div>
                <TitleNavigator/>
            </div>

        </div>
    );
}