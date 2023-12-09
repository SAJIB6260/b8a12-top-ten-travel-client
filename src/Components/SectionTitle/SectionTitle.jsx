

const SectionTitle = ({heading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12">         
            <h3 className="text-2xl font-semibold md:text-3xl border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;