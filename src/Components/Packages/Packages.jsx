import { useState } from "react";
import Container from "../../Pages/Shared/Container/Container";
import usePackages from "../../hook/usePackages";
import PackageCard from "./PackageCard";



const Packages = () => {
    const [packages, refetch] = usePackages();
    const [filterType, setFilterType] = useState(packages);
    const [selectedType, setSelectedType] = useState("");

    const handleSearchType = (event) => {
        const selectedValue = event.target.value;
        setSelectedType(selectedValue);

        if (selectedValue === "Select All") {
            setFilterType(packages); // Reset to the original packages when "Select" is chosen
        } else {
            const filteringCategories = packages.filter((Type) =>
                Type.tour_type.toLowerCase().includes(selectedValue.toLowerCase())
            );
            setFilterType(filteringCategories);
        }
        refetch();
    };


    return (
        <Container>
            <div className="my-5 w-full flex justify-center">
                <form>
                    <select
                        type="text"
                        className="input input-bordered w-[200%]"
                        onChange={handleSearchType}
                        value={selectedType}
                    >
                        <option>Select All</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Urban">Urban</option>
                        <option value="Relaxation">Relaxation</option>
                        <option value="Historical">Historical</option>
                    </select>
                </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    filterType.map(tourPackage => <PackageCard key={tourPackage._id} tourPackage={tourPackage}></PackageCard>)
                }
            </div>
        </Container>
    );
};

export default Packages;