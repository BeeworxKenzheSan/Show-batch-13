import { styled } from "@mui/material"
import { Card, FavoriteSvg, Logo, UserIcon } from "../assets/iconCollections"

export const Header = () => {
    return (<StyledHeader>
        <Logo />
        <Options >
            <OptionsBlock>
                <UserIcon />
                <div>Войти</div>
            </OptionsBlock>
            <OptionsBlock>
                <FavoriteSvg />
                <div>Избранные</div>
            </OptionsBlock>
            <OptionsBlock>
                <Card />
                <div>Корзина</div>
            </OptionsBlock>
        </Options>
    </StyledHeader>)
}

const StyledHeader = styled('header')`
    display: flex;
    justify-content: space-between;
    height: 64px;
`

const Options = styled('div')`
    display: flex;
    align-items: center;
`

const OptionsBlock = styled('div')`
display: flex;
    margin-left: 20px;
    text-align: center;
    flex-direction: column;
    align-items: center;
`