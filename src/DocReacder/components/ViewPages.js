import useRefDocs from "../utils/useRefDocs"
import { Card, Stack, CardMedia, Box, Typography, CardActionArea, ListItemButton } from "@mui/material";

export default function ViewPages () {
    const { current: docs } = useRefDocs();
    return (
    <Stack
        display="flex"
        flex={1}
        spacing={4}
        my={1}
        alignItems="center"
        height="100%"
        overflow="auto"
    > 
        {docs.map(page => (
            <Box
                sx={{height: 260}}
                key={page.num}
            > 
                <Typography
                    align="center" 
                    component="div" 
                    variant="body1" 
                >{page.num}</Typography>
                <ListItemButton
                    action={null}
                >
                    <Card 
                        sx={{
                            width: 200, 
                            height: '100%', 
                            display: 'flex',
                            border: theme => `1px solid ${theme.palette.divider}`
                        }}
                        component="a"
                        href={`#${page.id}`}
                    > 
                        <CardMedia
                            title={`Page ${page.num}`} 
                            src={page.canvas.toDataURL('webp')}
                            component="img"
                            height={250}
                        /> 
                    </Card> 
                </ListItemButton>
            </Box> 
        ))}
        
    </Stack> 
    )
}