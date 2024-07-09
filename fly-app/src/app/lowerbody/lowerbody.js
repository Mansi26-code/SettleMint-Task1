import './lowerbody.css';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const Lowerbody = () => {
    return (
        <>
            <div className="box4">
                <div className="b1">
                <div className="location">
                        <p><b>Farm</b></p>
                        <span>Al Aln</span>
                    </div>
                    <br/>
                    <div className="time">
                        <p><b>Farm Id</b></p>
                        <span>4097688</span>
                    </div>
                </div>
                <ArrowRightAltIcon className="arrow-icon" fontSize="large" />
                <div className="b2">
                    <div className="subdiv2"><b>Collection Center</b></div>
                    <div className="location">
                        <p><b>Location</b></p>
                        <span>Abu Krayyay</span>
                    </div>
                    <div className="time">
                        <p><b>Time</b></p>
                        <span>02-09-2023 &nbsp; 14:35</span>
                    </div>
                </div>
                <ArrowRightAltIcon className="arrow-icon" fontSize="large" />
                <div className="b3">
                    <div className="subdiv3"><b>Packing Center</b></div>

                    <div className="location">
                        <p><b>Location</b></p>
                        <span>Abu Krayyay</span>
                    </div>
                    <br/>
                    <div className="time">
                        <p><b>Time</b></p>
                        <span>02-09-2023 &nbsp; 14:35</span>
                    </div>
                </div>
                <ArrowRightAltIcon className="arrow-icon" fontSize="large" />
                <div className="b4">
                    <div className="subdiv4">Distribution Center</div>

                    <div className="location">
                        <p><b>Location</b></p>
                        <span>Abu Krayyay</span>
                    </div>
                   <br/>
                    <div className="time">
                        <p><b>Time</b></p>
                        <span>02-09-2023 &nbsp; 14:35</span>
                    </div>
                </div>
                <ArrowRightAltIcon className="arrow-icon" fontSize="large" />
                <div className="truck">
                    <LocalShippingIcon fontSize="large" />
                </div>
                <ArrowRightAltIcon className="arrow-icon" fontSize="large" />
                <div className="b5">
                    <div className="subdiv5"></div>
                   
                    <div className="location">
                        <p><b>Location</b></p>
                        <span>Abu Krayyay</span>
                    </div>
                   <br/>
                    <div className="time">
                        <p><b>Time</b></p>
                        <span>02-09-2023 &nbsp; 14:35</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Lowerbody;

