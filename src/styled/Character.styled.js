import styled from "styled-components";

export const CharacterStyled = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    height: 100%;

    .char-header {
        display: flex;
        justify-content: center;
        position: relative;

        .char-id {
            position: absolute;
            top: 10px;
            left: 10px;
            font-size: 28px;
            color: #EEEEEE;
        }

        img {
            height: 50%;
            width: 50%;
            border-radius: 50%;
        }
    }

    .char-name {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .name {
            color: #404040;
            font-size: 30px;
            font-weight: 700;
            margin: 10px 0 3px 0;
        }

        .status {
            font-size: 14px;
            color: #9C9C9C;
        }
    }

    .char-info {
        .row {
            display: flex;
            justify-content: space-between;
            padding: 5px;
            color: #404040;

            .title {
                font-weight: 700;
            }
        }
    }
`