import { motion } from "framer-motion"

const Card = ({ view }) => {
    return (
        <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 1 }}   
        className="card bg-base-100 bg-opacity-30 shadow-xl image-full group">
            <figure><img className="group-hover:scale-125 transition w-full" src={view.image} alt={view.place} /></figure>
            <div className="card-body">
                <h2 className="card-title">{view.title}</h2>
                <p>{view.place}</p>
            </div>
        </motion.div>
    );
};

export default Card;