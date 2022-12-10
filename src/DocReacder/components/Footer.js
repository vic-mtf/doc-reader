import { Fade, Paper, Stack } from "@mui/material";
import { useEffect, useState } from "react";


export default function Footer ({rootRef}) {
    const [show, setShow] = useState(true);
    const [isEnter, setIsEnter] = useState(false);

    let timer = null;

    useEffect(() => {
        if(show && !isEnter)
            timer = setTimeout(() => {
                setShow(false);
            }, 3000);

        return () => {
            clearTimeout(timer);
        };

    }, [show, isEnter]);

    return (
        <Stack
          position="fixed"
          display="flex"
          flex={1}
          bottom={0}
          alignItems="center"
          width="100%"
          py={4}
          onMouseEnter={() => {
            setShow(true);
            setIsEnter(true);
          }}
          onMouseLeave={() => {
            setShow(true);
            setIsEnter(false);
          }}
        >
            <Fade
                in={show}
            >
                <Paper
                    sx={{width:150}}
                    elevation={5}
                >
                    
                </Paper>
            </Fade>
        </Stack>
    );
}