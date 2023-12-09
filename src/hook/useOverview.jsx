import { useEffect, useState } from 'react';

const useOverview = () => {
    const [overview, setOverview] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('./overview.json')
            .then(res => res.json())
            .then(data => {
                setOverview(data);
                setLoading(false);
            })
    }, [])
    return [overview, loading]
};

export default useOverview;