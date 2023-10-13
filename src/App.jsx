import quote from "../src/assets/image-qr-code.png";
function App() {
  return (
    <>
      <div>
        test
        
      </div>
      <div className="bg-body w-screen h-screen flex items-center justify-center flex-col">
        <div className="w-[315px] h-[884] bg-white rounded-[15px]">
          <div className="p-5">
            <div>
              <img src={quote} alt="" />
            </div>
            <div>
              <p className="text-heading font-headingText text-[22px] leading-7 flex items-center justify-center pt-[9px]">
                Improve your front-end<br></br> skills by building projects
              </p>
            </div>
            <div>
              <p className="text-[15px] font-[400] text-[#7B879D] leading-7  pt-[19px]  pb-[25px] flex items-center justify-center text-center">
                Scan the QR code to visit Frontend<br></br> Mentor and take yo
                ur coding skills<br></br> to the next level
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[#1F3251] font-[600] text-footerText left-7 pt-[28px]">
            Challenge by
            <span className=" underline">
              <a href="#"> Frontend Mentor</a>
            </span>
            . Coded by
            <span className="underline">
              <a href="#"> Your Name Here.</a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
