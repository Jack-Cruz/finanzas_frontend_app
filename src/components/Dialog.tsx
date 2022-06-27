import { Dialog, DialogContent, DialogTitle } from "@mui/material";

interface SingleDialogProps {
    imageurl: string,
    title: string,
    open: boolean,
    onClose: () => void
}

export default function SimpleDialog(props: SingleDialogProps){
    const { onClose, open } = props;

    return(
        <Dialog onClose={() => onClose()} open={open} maxWidth="md" fullWidth={true}>
            <DialogTitle>¿Necesitas ayuda?</DialogTitle>
            <DialogContent>
                <img src={props.imageurl} alt={props.title} width="100%" height="auto"/>
            </DialogContent>
        </Dialog>    
    )
}