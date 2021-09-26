import React, {FC} from "react";

interface CloseModalProps {
    titleElement?: string,
    onClose: ()=>void
}


const HeaderPartOfModal : FC<CloseModalProps>= ({titleElement,onClose}) => {
    return (
        <div className="modal-header">
            <div className="modal-title">{titleElement}</div>
            <div className="modal-close" onClick={onClose}>
                <svg width="20" height="20" viewBox="0 0 129 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                        <path
                            d="M61.5875 76.0626C50.3678 86.1072 39.3958 95.8365 28.5337 105.687C22.241 111.394 16.1736 117.348 9.89557 123.069C8.22346 124.632 6.30202 125.903 4.21051 126.828C3.17914 127.261 0.951989 126.828 0.444081 126.035C-0.227947 124.982 -0.0292548 123.114 0.335264 121.74C0.600447 120.738 1.68018 119.908 2.49474 119.104C17.9854 103.852 33.4831 88.6091 48.9875 73.3765C50.7272 71.6681 52.5169 70.0117 54.5157 68.1144C47.7401 60.6052 40.954 53.3593 34.4756 45.844C24.136 33.8442 14.004 21.6659 3.7862 9.56215C3.41477 9.12226 3.09527 8.64079 2.72038 8.20091C0.932342 6.08722 -0.328241 3.80904 1.70771 1.24507C3.2323 -0.674661 6.87694 -0.387934 9.41475 2.22366C15.7351 8.7258 21.8919 15.3855 27.9972 22.0963C39.1452 34.3429 50.2063 46.6692 61.3146 58.9522C61.7902 59.399 62.2958 59.8124 62.828 60.1895C71.4175 51.9798 79.9118 43.7969 88.4772 35.6841C98.4108 26.2803 108.379 16.9135 118.382 7.58361C122.135 4.07666 125.144 3.44455 127.446 5.49071C129.833 7.61046 129.611 11.1519 125.805 14.9489C115.515 25.2161 104.977 35.2339 94.4495 45.2629C86.4292 52.9054 78.281 60.4164 69.745 68.3992C76.6812 75.5733 83.3153 82.724 90.2706 89.5439C96.9511 96.0945 104.005 102.265 110.817 108.681C113.48 111.095 115.974 113.69 118.28 116.449C120.141 118.763 120.416 121.636 118.129 123.919C115.875 126.17 113.265 125.375 111.091 123.67C106.933 120.58 102.946 117.264 99.1501 113.736C87.5296 102.355 76.114 90.7657 64.6239 79.2517C63.7152 78.3424 62.8469 77.3883 61.5875 76.0626Z"
                            fill="gray"/>
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="129" height="127" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    );
}

export default HeaderPartOfModal;