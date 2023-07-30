import { Box, TextField, Typography } from "@mui/material";
import React from "react";

type RoomProps = {
    id: number;
    room: string;
    basicCost: number;
    electricCost: number;
    waterCost: number;
    internetCost: number;
    serviceCost: number;
};

export default function HouseCard(props: RoomProps) {
    //------------------------------------
    const {
        room,
        basicCost,
        electricCost,
        waterCost,
        internetCost,
        serviceCost,
    } = props ?? {};
    //------------------------------------
    return (
        <React.Fragment>
            <Typography variant="h4" fontWeight={"bold"}>
                {room}
            </Typography>
            <Box display={"flex"} margin={"2em"} alignItems={"center"}>
                <Typography variant="h6" width={"180px"}>
                    Tiền phòng
                </Typography>
                <TextField disabled id="outlined-disabled" value={basicCost} />
            </Box>
            <Box display={"flex"} margin={"2em"} alignItems={"center"}>
                <Typography variant="h6" width={"180px"}>
                    Tiền điện
                </Typography>
                <TextField
                    disabled
                    id="outlined-disabled"
                    value={electricCost}
                />
            </Box>
            <Box display={"flex"} margin={"2em"} alignItems={"center"}>
                <Typography variant="h6" width={"180px"}>
                    Tiền nước
                </Typography>
                <TextField disabled id="outlined-disabled" value={waterCost} />
            </Box>
            <Box display={"flex"} margin={"2em"} alignItems={"center"}>
                <Typography variant="h6" width={"180px"}>
                    Tiền Internet
                </Typography>
                <TextField
                    disabled
                    id="outlined-disabled"
                    value={internetCost}
                />
            </Box>
            <Box display={"flex"} margin={"2em"} alignItems={"center"}>
                <Typography variant="h6" width={"180px"}>
                    Tiền dịch vụ
                </Typography>
                <TextField
                    disabled
                    id="outlined-disabled"
                    value={serviceCost}
                />
            </Box>
        </React.Fragment>
    );
}
