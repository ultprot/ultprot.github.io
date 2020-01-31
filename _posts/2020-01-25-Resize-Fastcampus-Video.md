---
categories:
  - Web
---
# 패스트캠퍼스 영상 크기 확대하는 크롬 확장 프로그램 만들기

## 패스트캠퍼스의 강의는 화면을 분할해서 사용하면 영상 크기가 작다.
패스트캠퍼스의 강의는 화면을 분할해서 사용하면 영상의 크기가 작다. 그래서 매번 크롬 개발자 도구를 열어서 클래스가 `fco-clip-content__viewer`인 엘리먼트에 style을 추가해서 썼다.


![tagAdded](/images/2020-01-25-Resize-Fastcampus-Video/tag_added.jpg){: .align-center}


그러다가 귀찮아서 간단한 크롬 확장 기능을 만들었다.


## 이제 클릭 한번이면 창 크기가 커진다.
기존에는 다음과 같이 강의를 수강할 때 에디터와 강의를 같이 띄우면 영상의 크기가 작았다.


![original](/images/2020-01-25-Resize-Fastcampus-Video/original.jpg)


이제 확장 프로그램 아이콘을 클릭해서 on 버튼을 누르면 화면이 한번에 커진다.


![changed](/images/2020-01-25-Resize-Fastcampus-Video/changed.jpg)


## 코드
코드랄것도 없지만 다음의 github에 코드를 저장해 놓았다.
[github](https://github.com/ultprot/ResizeFastcampusVideo)