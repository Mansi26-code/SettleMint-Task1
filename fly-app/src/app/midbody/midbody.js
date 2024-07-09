import "./midbody.css";
import PersonIcon from '@mui/icons-material/Person';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const Midbody = () => {
    return (
        <>
            <div className="boxes">
                <div className="box1">
                    <div className="icon">
                        <PersonIcon />
                    </div>
                    <span>
                        <p><b>Customer Name</b></p>
                        <p>Abu Dhabi</p>
                        <p>Cooperative Society</p>
                    </span>
                </div>

                <div className="box2">
                    <div className="icon">
                        <FmdGoodIcon />
                    </div>
                    <span>
                        <p><b>Customer Location</b></p>
                        <p>Abu Dhabi</p>
                    </span>
                </div>

                <div className="box3">
                    <p><b>Type</b></p>
                    <p>Cucumber</p>
                </div>
            </div>
        </>
    );
}

export default Midbody;
