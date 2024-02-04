
import Image from "next/image";
import audioBtn from "../../assets/audiobtn.svg";
import copyBtn from "../../assets/copy.svg";
import bookmarkBtn from "../../assets/bookmark.svg";
import memorizeBtn from "../../assets/plan.svg";
import shareBtn from "../../assets/share.svg";
import reportBtn from "../../assets/report.svg";

const DuaCardBtn = () => {
    return (
        <div className="flex justify-between items-center mb-2 mt-5">
            <div><p><Image src={audioBtn} alt="image"/></p></div>
            <div className="flex justify-center gap-8">
                <p><Image src={copyBtn} alt="image"/></p>
                <p><Image src={bookmarkBtn} alt="image"/></p>
                <p><Image src={memorizeBtn} alt="image"/></p>
                <p><Image src={shareBtn} alt="image"/></p>
                <p><Image src={reportBtn} alt="image"/></p>
            </div>
        </div>
    );
};

export default DuaCardBtn;