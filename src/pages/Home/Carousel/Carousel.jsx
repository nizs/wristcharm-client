
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const Carousel = () => {
    const axiosPublic = useAxiosPublic();

    const { data: carousel = [] } = useQuery({
        queryKey: ['carousel-data'],
        queryFn: async () => {
            const res = await axiosPublic.get('/carousels');
            console.log(res.data);
            return res.data;
        }
    })

    return (
        <div>
            <h2>{carousel.length} carousel data has been found</h2>
        </div>
    );
};

export default Carousel;