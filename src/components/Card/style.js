import styled, { css } from "styled-components";
import { User } from 'styled-icons/boxicons-solid/User'
import { TriangleRight } from 'styled-icons/octicons/TriangleRight'

export const UserIcon = styled(User)`
    color: #9b9b9b;
`
export const TriangleRightIcon = styled(TriangleRight)`
    color: #48b6a3;
    margin-top:-6px;
`
export const PointView = styled.p`
    width: 399px;
    height: 16px;
    font-family: Prompt;
    font-size: 16px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #48b6a3;
    margin-left:25px;
    margin-top: 0px;
    margin-bottom: 22px;
`;

export const InterestView = styled.p`
    width: 44px;
    height: 15px;
    font-family: Prompt;
    font-size: 12px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    color: #9b9b9b;
    margin-top: 5px;
    margin-left:15px;
    float:left;
`;
export const InterestText = styled.p`
    width: 84px;
    height: 15px;
    font-family: Prompt;
    font-size: 12px;
    font-weight: 300;
    font-style: italic;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    color: #9b9b9b;
    margin-top: 5px;
    margin-left:-24px;
    float:left;
    display:inline-block;
`;

export const DivPoint = styled.div`
    margin-left:22.5px;
    margin-top:0px;
`;
export const DivInterest= styled.div`
    margin-left:25px;
    margin-top:0px;
`;

export const DivIcon = styled.div`
    width: 10px;
    height: 10px;
`;

export const IconPointView = styled.div`
    width: 7px;
    height: 14px;
`;

export const CardWrapper = styled.div`
    width: 442px;
    height: 493px;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
    background-color: rgba(255, 255, 255, 0);
    margin:5px;
`;

export const BodyLine3 = styled.div`
    margin-rigth: 20px;
    margin-left: 50px;
    margin-top: 45px;
`;

export const DivRight = styled.div`
    margin-right: 16px;
    margin-top: -29px;
    float: right;
`;
export const YourPoint = styled.div`
    width: 132px;
    height: 64px;
    font-family: Prompt;
    font-size: 42px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #4a4a4a;
    margin-top: -20px;
    margin-right: -6px;
    float: right;
`;

export const YourPointExplain = styled.p`
    width: 144px;
    height: 16px;
    font-family: Prompt;
    font-size: 12px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: right;
    color: #4a4a4a;
`;

export const CardHeader = styled.div`
    margin-top: 14px;
    margin-left: 16px;
`;

export const CardText = styled.div`
    display:inline-block;
    margin-left:0px
    margin-top:0px
    margin-right:0px
`;

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20px;
`;

export const TextHeader = styled.p`
    ${props =>
    props.faculty &&
        css`
        width: 335.4px;
        height: 16px;
        font-family: Prompt;
        font-size: 24px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: 0.67;
        letter-spacing: normal;
        text-align: left;
        margin-left:10.6px;
        color: #ff5a5a;
    `}

    ${props =>
    props.major &&
        css`
        margin-left:10.6px;
        margin-top:-15px
        width: 203px;
        height: 16px;
        font-family: Prompt;
        font-size: 20px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: 0.8;
        letter-spacing: normal;
        text-align: left;
        color: #9b9b9b;
    `}

    ${props =>
    props.university &&
        css`
        margin-left:10.6px;
        width: 217.2px;
        height: 16px;
        font-family: Prompt;
        font-size: 20px;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        line-height: 0.8;
        letter-spacing: normal;
        text-align: left;
        color: #9b9b9b;
    `}
`;

export const Divider = styled.p`
    margin-top:0px
    width: 402px;
    height: 3px;
    border-top: solid 1px #d8d8d8;
    margin-right: 20px;
    margin-left: 20px;
    float: left;
`;

export const DividerVertical = styled.p`
    margin-top:0px
    margin-left: -30px;
    height: 40px;
    width: 3px;
    border-left: solid 1px #d8d8d8;
`;

export const BodyLine1 = styled.div`
    width: 79px;
    height: 21px;
    font-family: Prompt;
    font-size: 20px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.01;
    letter-spacing: normal;
    text-align: left;
    color: #5f5f5f;
    margin-top: 0px;
    margin-left:21px;
    display:inline-block;
`;

export const BodyLine2 = styled.div`
    width: 399px;
    height: 16px;
    font-family: Prompt;
    font-size: 16px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    margin-top: 25px;
    margin-left: 20px;
    color: #ff5a5a;
`;

export const DivInLine = styled.div`
    display:inline-block;
    width:100%;
`;

export const DataPoint = styled.div`
    width: 184px;
    height: 46px;
    font-family: Prompt;
    font-size: font-size: 19.6px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #5f5f5f;
    margin-left: -25px;
`;

export const PointExplain = styled.div`
    width: 184px;
    height: 46px;
    font-family: Prompt;
    font-size: 11.2px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #5f5f5f;
    margin-top: -20px;
    margin-left: -25px;
    margin-bottom:-40px;
`;

export const BodyContent = styled.div`
    display:inline-block;
    float: left;
`;

export const CircleBall = styled.div`
    width: 29px;
    height: 29px;
    border-radius: 17.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    margin-left: 8px;

    ${props =>
    props.active === 1 &&
        css`
        background-color: #2ecc71 ;
    `}

    ${props =>
    props.active === 0 &&
        css`
        background-color: #d8d8d8;
    `}
`;

export const IdBall = styled.p`
    width: 6px;
    height: 28px;
    font-family: Prompt;
    font-size: 18.4px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    margin-left: -3.5px;
    color: #ffffff;
`;

export const CardIcon = styled.img`
    ${props =>
    props.button &&
        css`
        width: 18px;
        height: 18px;
        object-fit: contain;
        float:right;
    `}

    ${props =>
    props.large &&
        css`
        width: 80px;
        height: 86px;
        object-fit: contain;
    `}

    ${props =>
    props.medium &&
        css`
        width: 27px;
        height: 35px;
        object-fit: contain;
        float: left;
    `}

    ${props =>
    props.small &&
    css`
        width: 24px;
        height: 21px;
        object-fit: contain;
        float: right;
        margin-right:17px;
    `}
`;


export const CardButton = styled.button`
    width: 120px;
    height: 35px;
    border-radius: 17.5px;
    border: solid 1px #ff5a5a;
    display: block;
    font-family: Prompt;
    font-size: 12px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #ff5a5a;
    float: right;
    margin-right:16px;
    margin-top:-24px;
`;