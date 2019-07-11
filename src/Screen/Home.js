import React, { Component } from "react";
import Postbox from "./Postbox";
import Send from "./Send";
import Mypage from "./Mypage";
import {
  Text,
  Container,
  Header,
  Footer,
  FooterTab,
  Button,
  Icon
} from "native-base";
import { StyleSheet } from "react-native";
//import BotNavi from './botNavi';

const styles = StyleSheet.create({
  toplogo: {
    paddingTop: "1.4%",
    marginTop: "5.7%",
    backgroundColor: "black"
  },
  logotext: {
    paddingBottom: "3%",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "white"
  },
  maintext: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "50%"
  },
  subtext: {
    marginTop: "3%",
    textAlign: "center",
    fontSize: 20
  },
  footer: {
    backgroundColor: "black"
  }
});

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageto: 1,
      // 1 = home , 2 = postbox , 3 = mypage , 4 = 편지쓰기
      centerText: "HELLO OWLS!",
      subText: "당신의 펜팔친구를 찾아보세요!",
      matchStatus: "매칭시작",
      // 매칭 버튼을 누르면 메인 텍스트와 서브 텍스트를 변경한다.
      // 매칭 버튼을 누르면 서버에 post 요청 -> db에 partnerId가 null인
      // 상대와 서로를 추가한다.
      // 포스트 요청에 따라 푸시요청??
      partner: "Ironman",
      matchComplete: true,
      postStatus: true
      // 상대가 있으면 true , default = false -> true 면 또 변경.
    };
  }

  componentDidMount() {
    if (this.state.matchComplete === true) {
      this.setState({
        matchStatus: "편지 쓰기"
      });
    }
  }
  ßß;
  render() {
    const {
      pageto,
      centerText,
      subText,
      matchStatus,
      matchComplete,
      partner
    } = this.state;

    if (pageto === 2) {
      return <Postbox />;
    } else if (pageto === 3) {
      return <Mypage />;
    } else if (pageto === 4) {
      return <Send />;
    }

    return (
      <Container>
        <Header style={styles.toplogo}>
          <Text style={styles.logotext}>owlPost</Text>
        </Header>

        <Container>
          {matchComplete === false ? (
            <Text style={styles.maintext}>{centerText}</Text>
          ) : (
            <Text style={styles.maintext}>My penpal : '{partner}'!</Text>
          )}

          {matchComplete === false ? (
            <Text style={styles.subtext}>{subText}</Text>
          ) : (
            <Text style={styles.subtext}>하루 한 통, 마음을 전해보세요.</Text>
          )}
        </Container>

        <Footer>
          <FooterTab>
            <Button
              style={styles.footer}
              onPress={() => {
                this.setState({
                  pageto: 2
                });
              }}
            >
              <Text>편지함</Text>
            </Button>
            <Button
              style={styles.footer}
              onPress={() => {
                if (matchComplete === false) {
                  this.setState({
                    centerText: "FIND FRIEND!",
                    subText: "펜팔친구를 찾고 있어요!",
                    matchStatus: "매칭 중"
                  });
                } else {
                  this.setState({
                    pageto: 4
                  });
                }
              }}
            >
              <Text>{matchStatus}</Text>
            </Button>
            <Button
              style={styles.footer}
              onPress={() => {
                this.setState({
                  pageto: 3
                });
              }}
            >
              <Text>마이페이지</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
