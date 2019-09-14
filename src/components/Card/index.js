import React from 'react';

import btn from '../../assets/images/btn.svg';
import engi from '../../assets/images/engi.svg';
import heart from '../../assets/images/heart.svg';
import footer from '../../assets/images/footer.svg';
import star from '../../assets/images/star.svg';

import {
  CardWrapper,
  CardHeader,
  CardButton,
  TextHeader,
  CardIcon,
  Divider,
  BodyContent,
  CircleBall,
  IdBall,
  CardText,
  FlexRow,
  DivInLine,
  BodyLine1,
  BodyLine2,
  BodyLine3,
  YourPoint,
  YourPointExplain,
  DivRight,
  PointExplain,
  DataPoint,
  DividerVertical,
  UserIcon,
  TriangleRightIcon,
  DivIcon,
  IconPointView,
  PointView,
  DivPoint,
  DivInterest,
  InterestView,
  InterestText
} from "./style";

const Card = (props) => {
    const { data } = props
    const formatter = new Intl.NumberFormat('en-US', { minimumFractionDigits: 0 })

    const ball=(round)=>{
        const content = round.map(element => <CircleBall active={element.active} key={element.id}><IdBall>{element.id}</IdBall></CircleBall>)
        return   <FlexRow>{content}</FlexRow> 
    }

    return (
        <CardWrapper>

            <CardHeader>
              <CardIcon large src={engi} />
              <CardText > 
                <TextHeader faculty>{data.faculty}<CardIcon small src={heart} /></TextHeader>
                <TextHeader major>{data.major}</TextHeader>
                <TextHeader university>{data.university}</TextHeader>
              </CardText>
            </CardHeader>

            <Divider/>

            <DivInLine>
                <BodyContent>
                    <BodyLine1>รอบที่เปิด</BodyLine1>
                    <CardText > 
                        {ball(data.round)}
                    </CardText > 
                </BodyContent>
            </DivInLine>
            <DivInLine>
                <BodyLine2>
                    รอบที่ {data.current_round.id} : {data.current_round.name}
                </BodyLine2>
                <CardButton type="button">แก้ไขคะแนน
                    <CardIcon button src={btn} />
                </CardButton>
            </DivInLine>
            <DivInLine>
                <BodyLine3>
                    <CardIcon medium src={star} />
                    <DivRight>
                        <YourPointExplain>คะแนนของคุณคือ</YourPointExplain>
                        <YourPoint>{formatter.format(data.your_point)}</YourPoint>
                    </DivRight>
                </BodyLine3>
            </DivInLine>
            <FlexRow> 
                <DivInLine>
                    <DataPoint>{formatter.format(data.min_point)}</DataPoint>
                    <PointExplain>คะแนนต่ำสุด 60</PointExplain>
                </DivInLine>

                <DividerVertical/>

                <DivInLine>
                    <DataPoint>{formatter.format(data.avg_point)}</DataPoint>
                    <PointExplain>คะแนนเฉลี่ย 60</PointExplain>
                </DivInLine>

                <DividerVertical/>

                <DivInLine>
                    <DataPoint>{formatter.format(data.max_point)}</DataPoint>
                    <PointExplain>คะแนนสูงสุด 60</PointExplain>
                </DivInLine>
            </FlexRow> 

            <Divider/>

            <DivPoint>
                <IconPointView><TriangleRightIcon/></IconPointView>
                <PointView>ดูสัดส่วนคะแนน</PointView>
            </DivPoint>
            
            <Divider/>

            <DivInterest>
                <DivIcon><UserIcon/></DivIcon>
                <InterestView>{data.interesting_people}</InterestView>
            </DivInterest>
            <InterestText>คนที่สนใจ</InterestText>
            <CardIcon small src={footer} />

        </CardWrapper>
    );
}

export default Card;