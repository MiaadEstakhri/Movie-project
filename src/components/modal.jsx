import XCircleIcon from "../assets/icons/xCircleIcon";

function Modal({ header, children, open, onOpen }) {
  //   if (!open) return null;
  return (
    <div className="w-full h-screen absolute flex  justify-center items-center overflow-hidden ">
      <div className="h-full  w-full z-10 bg-slate-600/80 absolute"></div>
      <div className="flex flex-col w-[500px] h-auto min-h-[300px] bg-slate-800 z-20 rounded-md px-3">
        <div className="flex items-center justify-between text-slate-50  text-xl font-bold border-b-2 border-neutral-300/20 py-3">
          <h2>{header}</h2>
          <button onClick={() => onOpen(false)}>
            <XCircleIcon color="#991b1b" className="h-7 w-7" />
          </button>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Modal;
