import styled from "styled-components";

export const BodyStyled = styled.div`
    .characters-list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        gap: 20px;
        padding: 30px;
        overflow-y: hidden;
    }

    .pagination {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 20px;

        button {
            outline: none;
            border: none;
            background-color: #e0e7ff;
            color: #6366f1;
            border-radius: 7px;
            padding: 10px 18px;
            margin: 5px;
            transition: .2s;
            font-weight: 700;
            font-size: 18px;
        }

        button:hover {
            cursor: pointer;
            background-color: #c7d2fe;
            transition: .2s;
        }
    }
`