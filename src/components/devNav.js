import React from "react";
import {
    FaArrowRight
} from 'react-icons/fa';
import { Link } from "react-router-dom";

const DevNav = () => {
    return (
        <>
        <Link to="/developer">
            <div className="text-white relative float float-right border-solid border p-3 m-3 "  >
                <h3 className="text-[#00df9a]">Developer Details <FaArrowRight size={15} className="inline-block" /> </h3>
            </div>
        </Link>
        </>
    )
}

export default DevNav;
