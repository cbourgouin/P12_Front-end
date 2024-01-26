function Modal({ text, modalOpen, setModalOpen }) {

    return <div
        style={
            modalOpen === true ? {
            position: "fixed",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%"
        } : {
            display: "none",
        }}
    >
        <div
            onClick={() => setModalOpen(false)} 
            style={{
                backgroundColor: "black",
                opacity: 0.75,
                zIndex: 0,
                height: "100%",
                width: "100%"
            }}
        >
        </div>
        <div
            style={{
                backgroundColor: "white",
                position: "fixed",
                opacity: 1,
                zIndex: 1,
                padding: "15px 30px 15px 30px",
                minWidth: "440px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                borderRadius: "8px"
            }}
        >
            <div>{text}</div>
            <button
                onClick={() => setModalOpen(false)}
                style={{
                    position: "absolute",
                    zIndex: 2,
                    top: 0,
                    right: 0,
                    width: "30px",
                    height: "30px",
                    backgroundColor: "black",
                    border: "none",
                    borderRadius: "50%",
                    transform: "translate(50%, -50%)",
                    padding: "5px"
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    style={{
                        height: "20px",
                        width: "20px",
                    }}>
                    <path fill="#ffffff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
            </button>
        </div>
    </div>
}

export default Modal;