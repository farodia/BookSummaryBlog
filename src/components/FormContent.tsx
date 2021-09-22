import React from "react";
import '../modal.css'

const FormContent = () => {
    return (
        <form id="form-content">
            <div className="modal-body">
                <ul>
                    📚书籍名称：
                    <input className="title-content" required type="text" placeholder="请输入您将记录的书籍名称" name="bookTitle"/>
                </ul>
                <ul className="ul-textarea">
                    📃书籍总结：
                    <textarea required placeholder="请在此记录您对于本书的总结" rows={10} cols={40} name="bookSummary"/>
                </ul>
            </div>
            <input type="submit" value="提交" className="modal-confirm-btn"/>
            <input type="reset" value="重置" className="modal-cancel-btn" />
        </form>
    );
}
export default FormContent;