import {
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    Modal,
    Select,
    styled,
} from "@mui/material";
import { CloseIcon } from "../../assets/iconCollections";
import { ImageUploadIcon } from "../../assets/iconCollections";
import { Button } from "../../UI/Button";
import { Input } from "../../UI/Input";
import { useState } from "react";

const sizesData = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];
export const AdminModal = ({ open, onClose, selectedCategory }) => {
    const [sizes, setSizes] = useState([]);
    return (
        <Modal open={open} onClose={onClose}>
            <Content>
                <TitleSection>
                    <h2>Добавить новую позицию</h2>
                    <CloseIcon />
                </TitleSection>
                <Form >
                    <Input
                        fullWidth
                        label="Название товара"
                        type="text"
                        name="title"
                    />
                    <Input
                        fullWidth
                        label="Цена"
                        type="number"
                        name="price"
                    />
                    <FormControl>
                        <InputLabel id="sizes">Доступные размеры</InputLabel>
                        <Select
                            multiple
                            value={sizes}
                            id="sizes"
                            sx={{ color: "black" }}
                            label="Доступные размеры"
                            fullWidth
                        >
                            {sizesData.map((size) => (
                                <MenuItem key={size} value={size}>
                                    {size}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Input
                        fullWidth
                        label="Цвет"
                        type="text"
                        name="color"
                    />
                    <Input
                        value=""
                        fullWidth
                        label="Изображение"
                        type="text"
                        InputProps={{
                            endAdornment: (
                                <IconButton component="label">
                                    <ImageUploadIcon />
                                    <input
                                        style={{ display: "none" }}
                                        type="file"
                                        hidden
                                        name="[licenseFile]"
                                    />
                                </IconButton>
                            ),
                        }}
                    />
                    <ButtonsContainer>
                        <CancelButton>Отменить</CancelButton>
                        <ConfirmButton type="submit">Сохранить</ConfirmButton>
                    </ButtonsContainer>
                </Form>
            </Content>
        </Modal>
    );
};

const Form = styled("form")`
    display: flex;
    flex-direction: column;
    gap: 17px;
  `;

const TitleSection = styled("div")`
    display: flex;
    justify-content: space-between;
    & > svg {
      cursor: pointer;
    }
    margin-bottom: 49px;
  `;

const Content = styled("div")`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 507px;
    background-color: #fff;
    padding: 14px 15px 0 15px;
    border-radius: 10px;
  `;

const CancelButton = styled(Button)`
    min-width: 140px;
    background-color: #7e8494;
  `;

const ConfirmButton = styled(Button)`
    min-width: 140px;
    margin-left: 16px;
  `;

const ButtonsContainer = styled("div")`
    display: flex;
    justify-content: center;
    margin: 42px 0 42px 0;
  `;