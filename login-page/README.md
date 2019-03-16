# Vue.js playgrounds
## 로그인 페이지

---

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# install vuex module
npm install --save vuex

# install axios
npm install axios --save-dev

```

---

### 사용기술

> - Vuex

--- 

### Vuex란?

> - Vue.js 애플리케이션에 대한 상태관리패턴(state management patten) + 라이브러리.
> - 애플리케이션의 모든 컴포넌트에 대한 **중앙 집중식 저장소** 역할.

<p align="center">
  <img width="500px" src="https://raw.githubusercontent.com/vuejs/vuex/dev/docs/.vuepress/public/vuex.png">
</p>


### Vuex 배경 및 원칙

> 1.  배경
>
> - **Flux**라는 디자인 패턴으로부터 영감을 받았다고 한다.
>   > Flux란?
>   >
>   > - 애플리케이션의 데이터를 공유하는 컴포넌트가 많을수록 상호작용이 많아지게 되고, 데이터가 어떻게 변할지 종잡을 수 없게 된다.
>   > - 이 상황이 심화되면 결국 애플리케이션을 확장하거나 유지 관리할 수 없는 상황까지도 발생할 수 있다.
>   > - Flux는 이를 해결하기 위한 디자인 패턴으로 **공유자원를 중앙 집중화**하는 것이라고 할 수 있다.
>
> 2. Feature
>> 2-1. Single Source of Truth(단일 데이터 소스)
>> - global singelton(전역 싱글톤)
>> - 공유해야 하는 데이터(ex, 사용자 정보, 설정정보...)는 이를 사용하는 컴포넌트와 별게로 **단일 위치에 저장**한다.
>> - Vuex는 이 **단일 위치를 "store"** 라고 하며, 저장된 애플리케이션 **데이터를 "state"** 라고 한다.
>> - 복사본을 사용하는 것이 아닌 단일 저장소에서 load하여 사용하는 방식
>>
>> 2-2. Data is Read-Only(데이터는 읽기전용)
>>
>> - 단일저장소에서 state를 자유롭게 읽을 수 있지만, *직접적으로 변경할 수는 없다.*
>> - 데이터를 변경하려면, store에 변경한다는 것을 알려야 하며, **"mutation"** 이라는 정의된 함수를 통해 변경을 한다.
>> - 데이터를 중앙 집중화하였으므로 예측가능한 범위내에서 데이터의 변경, 유지보수하기 위해 이같은 방법을 이용한다.
>>
>> ```js
>> const store = new Vuex.Store({
>>     state: {
>>         my_value: 0
>>     },
>>    mutations: {
>>        increment (state, value){
>>            state.my_value += value;
>>        }
>>    }
>>    }
>> });
>> // wrong
>> store.my_value += 10;
>> // correct(use mutations)
>> store.commit('increment', 10);
>> ```
>> 2-3. Mutations are synchronous(동기적)
>> - mutations은 동기적으로 일어나기 때문에 기록된 commit을 통해 상태변화를 관찰하기 쉽다.
> 3. 정리
> - Vuex는 Vue 애플리케이션에서 Flux 아키텍쳐를 구현하는데 도움을 주는 라이브러리.
> - 위와 같은 방법을 적용함으로써 애플리케이션 각각의 Vue 컴포넌트에서 데이터를 공유하더라도 예기치 못한 데이터 변화를 방지할 수 있다.

--- 

## References

- [Vuex github](https://github.com/vuejs/vuex)
- [Vuex 공식문서](https://vuex.vuejs.org/kr/)
- [도대체 Vuex가 뭐길래?](https://medium.com/@itsnothingg/%EB%8F%84%EB%8C%80%EC%B2%B4-vuex%EA%B0%80-%EB%AD%90%EA%B8%B8%EB%9E%98-ad5bc15f2371)

