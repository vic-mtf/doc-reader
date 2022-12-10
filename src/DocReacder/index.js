import { useRef, useState } from 'react';
import {
    Backdrop,
    Box,
    CssBaseline,
} from '@mui/material';
import Header from './components/Header';
import Main from './components/Main';
import Reader from './components/Reader';
import NavRight from './components/NavRight';
import { RefProvider } from './utils/useRefDocs';

export default function DocReader ({url}) {
    const [open, setOpen] = useState(false);
    const docs = useRef(null);

    const handleDrawerOpen = (mode) => () => {
      setOpen(mode);
    };
  
    const handleDrawerClose = () => {
      setOpen(null);
    };

    return (
        <Backdrop
            sx={{ backdropFilter: 'flur(15px)' }}
            open={!url}
        >
            <RefProvider>
                <Box 
                    sx={{ display: 'flex', bgcolor: 'red'}}
                >
                    <CssBaseline />
                    <Header 
                        name="doc_name"
                        open={open}
                        handleDrawerOpen={handleDrawerOpen}
                        handleDrawerClose={handleDrawerClose}
                    /> 
                </Box>
                <Main open={!!open}>
                    <Reader/>
                </Main>
                <NavRight 
                    open={open} 
                    handleDrawerClose={handleDrawerClose}
                />
            </RefProvider> 
        </Backdrop>
    )
}