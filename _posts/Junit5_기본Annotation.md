---
title: "JUnit5의 기본적인 Annotation"
categories:
  - Java
---
# JUnit5의 기본적인 Annotation
JUnit5에는 기본적으로 `@Test`, `@BeforeAll`, `@AfterAll`, `@BeforeEach`, `@AfterEach`, `@Disabled` 등의 어노테이션 있다.

## @Test
어노테이션이 붙어있는 메소드가 테스트메소드가 된다.

## @BeforeAll
현재 테스트클래스를 통해 테스트를 실행하기 이전에 한번 실행되는 메소드를 사용하고 싶은 경우 사용하는 어노테이션. 메소드 전체를 실행해도 한번만 실행되고, 하나의 테스트메소드만 실행해도 한번만 실행된다. 메소드는 static메소드로 만들어야 하고, 반환값이 없어야 한다.

## @AfterAll
`@BeforeAll`과 마찬가지이나 테스트메소드의 실행이 끝난 후 한번만 실행된다. 메소드는 static메소드로 만들어야 하고, 반환값이 없어야 한다.

## @BeforeEach
테스트 클래스에 있는 각각의 테스트메소드 실행이전에 실행되는 메소드에 사용한다. 가령 테스트 클래스에 10개의 테스트메소드가 있다면 각각의 테스트 메소드 실행 이전에 한번씩 실행되어 총 10번 실행된다. 메소드는 static일 필요는 없고, 반환값이 없어야 한다.

## @AfterEach
`@BeforeEach`와 마찬가지이나 테스트메소드의 실행이 끝난후 실행된다. 메소드는 static일 필요는 없고, 반환값이 없어야 한다.

## @Disabled
테스트클래스 실행시 실행하고 싶지 않은 테스트메소드가 있다면 `@Disabled`를 사용하면 된다. 

## Code 사용
아래와 같이 Sample클래스를 만든다.
```java
package com.example.test;

public class Sample {

}
```
또한 아래와 같이 SampleTest클래스를 만든다.
```java
package com.example.test;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertNotNull;

class SampleTest {

    @Test
    void sample(){
        Sample sample = new Sample();
        assertNotNull(sample);
    }
}
```
SampleTest 클래스를 실행하면 다음과 같이 테스트가 통과하는 것을 알 수 있다.

![test-method](/images/2020-02-19-JUnit5_기본Annotation/기본Test.jpg)


이번에는 테스트메소드를 2개정도 더 만들고 어노테이션을 사용한 메소드도 만든다.
```java
package com.example.test;


import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.assertNotNull;

class SampleTest {

    @Test
    void sample1(){
        Sample sample = new Sample();
        assertNotNull(sample);
        System.out.println("smaple1");
    }

    @Test
    void sample2(){
        Sample sample = new Sample();
        assertNotNull(sample);
        System.out.println("smaple2");
    }

    @Test
    void sample3(){
        Sample sample = new Sample();
        assertNotNull(sample);
        System.out.println("smaple3");
    }

    @Test
    @Disabled
    void sample4(){
        Sample sample = new Sample();
        assertNotNull(sample);
        System.out.println("smaple4");
    }

    @BeforeAll
    static void beforeAll(){
        System.out.println("before all");
    }

    @AfterAll
    static void afterAll(){
        System.out.println("after all");
    }

    @BeforeEach
    void beforeEach(){
        System.out.println("before each");
    }

    @AfterEach
    void afterEach() {
        System.out.println("after each");
    }
}
```
테스트클래스를 실행한 결과는 다음과 같다.
```
before all

before each
smaple1
after each


before each
smaple2
after each


before each
smaple3
after each




void com.example.test.SampleTest.sample4() is @Disabled

after all
```
전체 테스트에서 before all, after all은 각각 테스트 앞,뒤로 한번만 실행된다. before each, after each는 테스트메소드마다 각각 앞뒤로 한번씩 실행된다. 마지막으로 sample4 메소드의 경우 `@Disabled`가 붙어 실행되지 않는다.


## 참조
- '더 자바, 애플리케이션을 테스트하는 다양한 방법' 강의를 정리하였습니다.