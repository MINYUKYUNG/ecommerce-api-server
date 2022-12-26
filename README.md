# 쇼핑몰 상품 데이터베이스

## 목차
1. [배포 링크](#배포-링크)
2. [기술 스택](#기술-스택)
3. [About project](#about-project)
4. [실행 방법](#실행-방법)
5. [디렉토리 구조](#디렉토리-구조)

## 배포 링크
- https://mmm-api.chloemin.com/products
<br/>
<br/>

## 기술 스택
- MySQL (SQL)
- Express (Node.js)
- Sequelize
<br/>

## About project
1. 쇼핑몰 상품 데이터베이스, API 서버 구현하기

2. 기능 구현  
        - 상품 관리 : 전체 상품 조회, 개별 상품 조회, 카테고리별 상품 조회

3. 프로젝트 구성  
        - 핵심 비즈니스 로직을 작성하는 컨트롤러와 페이지 경로를 설정하는 라우터를 분리하여, 프로젝트 디렉토리 구성  
        - AWS EC2를 통한 웹 서버 구축, 배포  
        - API 기능과 핵심 비즈니스 로직에 대한 통합 테스트

4. 서비스 화면 미리보기  
- products API  
    ```json
      [
        {
          "id": 20,
          "title": "DANVOUY Womens T Shirt Casual Cotton Short",
          "price": 13,
          "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
          "category": "women's clothing",
          "image": "https://mmm-api.chloemin.com/assets/productImage20.jpg",
          "rating": {
            "rate": 4,
            "count": 145
          }
        },
        {
          "id": 19,
          "title": "Opna Women's Short Sleeve Moisture",
          "price": 8,
          "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
          "category": "women's clothing",
          "image": "https://mmm-api.chloemin.com/assets/productImage19.jpg",
          "rating": {
            "rate": 5,
            "count": 146
          }
        },
        ...
      ]
    ```

- products/1 API  
    ```json
      {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 110,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://mmm-api.chloemin.com/assets/productImage1.jpg",
        "rating": {
          "rate": 4,
          "count": 120
        }
      }
    ```
    
- products/category/men's clothing  API
    ```json
      [
        {
          "id": 4,
          "title": "Mens Casual Slim Fit",
          "price": 16,
          "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
          "category": "men's clothing",
          "image": "https://mmm-api.chloemin.com/assets/productImage4.jpg",
          "rating": {
            "rate": 2,
            "count": 430
          }
        },
        {
          "id": 3,
          "title": "Mens Cotton Jacket",
          "price": 56,
          "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
          "category": "men's clothing",
          "image": "https://mmm-api.chloemin.com/assets/productImage3.jpg",
          "rating": {
            "rate": 5,
            "count": 500
          }
        },
        ...
      ]
    ```
<br/>

## 실행 방법
1. repository clone
    ```
    $ git clone https://github.com/MINYUKYUNG/ecommerce-api-server.git
    ```
2. dependencies install
    ```
    npm install
    ```
3. project start
    ```
    npm run start
    ```
<br/>

## 디렉토리 구조
| 디렉토리 | 구분 |
| -- | -- |
| config | 데이터베이스(DB) 접속에 관한, 각종 설정이 들어있는 디렉토리 |
| controllers | 데이터를 컨트롤하는 함수들이 있는 파일들이 들어있는 디렉토리 |
| migrations | 데이터베이스 내부에서 일어나는 모든 변경사항을 저장하는 파일들이 들어있는 디렉토리 |
| models | 데이터베이스의 각 테이블 정보 및 필드타입을 정의하고, 하나의 객체로 모으는 디렉토리 |
| routers | 기능별로 url 주소를 연결시킨 라우터 파일이 들어있는 디렉토리 |
| seeders | 테이블에 넣을 기본 데이터 파일들이 들어있는 디렉토리 |
<br/>

