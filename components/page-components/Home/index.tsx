"use client";

import { Button } from "@/components/ui/Button";
import { HomePageComponentProps } from "./Home.props";
import { setOpenedModal } from "@/store/slices/openedModal";
import { Modal } from "@/types/modal.enum";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";

export const HomePageComponent = ({}: HomePageComponentProps) => {
    const dispatch = useAppDispatch();

    const onButtonClick = () => {
        dispatch(setOpenedModal(Modal.CreateSmth));
    };

    return (
        <div className="bg-blackOpacity-light p-6 rounded-md">
            <h1>Хоум</h1>
            <Button onClick={onButtonClick} color="purpleBackground">
                Modal test
            </Button>
        </div>
    );
};
