import { Modal } from "@/types/modal.enum";
import { Modal as IModal } from "./modal.interface";
import { CreateSmth } from "./CreateSmth";

export const modals: IModal[] = [
    {
        key: Modal.CreateSmth,
        component: <CreateSmth />,
    },
];
