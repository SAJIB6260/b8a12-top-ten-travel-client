import { motion } from "framer-motion"

const MeetGuide = ({guide}) => {
    return (
        <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 1 }}
        className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{guide.name}</h2>
                <p>Contact: {guide.email}</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">view Details</button>
                </div>
            </div>
        </motion.div>
    );
};

export default MeetGuide;