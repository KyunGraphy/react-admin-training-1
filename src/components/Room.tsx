import { Box } from "@mui/material";
import { useGetList } from "react-admin";
import "./users.css";
import RoomCard from "./RoomCard";

export const Room = () => {
    const { data, isLoading, error } = useGetList("calcs");
    if (isLoading) {
        return <>Please wait...</>;
    }
    if (error) {
        return <p>ERROR</p>;
    }

    return (
        <Box sx={{ bgcolor: "lightgray", padding: "2em" }}>
            <div className="users">
                {data?.map((room) => (
                    <RoomCard key={room.id} {...room} />
                ))}
            </div>
        </Box>
    );
};
