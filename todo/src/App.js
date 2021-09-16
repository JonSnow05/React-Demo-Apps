import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
/* import TodoList from "./components/Todo app/TodoList";
import PersonList from "./components/Listandkey/PersonList";
import FormControlling from "./components/FormHandling/FormControlling";
import UseStateWithObject from "./components/useState/UseStateWithObject";
import CounterUsingUseEffect from "./components/UseEffect/CounterUsingUseEffect";
import ConditionallyUseEffect from "./components/UseEffect/ConditionallyUseEffect";
import UseEffectOnlyOnce from "./components/UseEffect/UseEffectOnlyOnce";
import UseEffectWithCleanUp from "./components/UseEffect/UseEffectWithCleanUp";
import FetchDataWithUseEffect from "./components/UseEffect/FetchDataWithUseEffect";

import Component1 from "./components/UseContext/Component1";
import UseRefExmpl from "./components/UseRef/UseRefExmpl";
import UseRefExmpl2 from "./components/UseRef/UseRefExmpl2";
import CustomHookExmpl from "./components/CustomHooks/CustomHookExmpl";
import CustomHookExmpl2 from "./components/CustomHooks/CustomHookExmpl2";
import CustomHookExmpl3 from "./components/CustomHooks/CustomHookExmpl3";
import UseReducerExmpl from "./components/UseReducer/UseReducerExmpl";
import FetchDataUseReducer from "./components/UseReducer/FetchDataUseReducer";
import ParentComponent from "./components/CallBackHook/ParentComponent";
import UseMemoExmpl from "./components/UseMemo Hook/UseMemoExmpl";
import LifeCycleA from "./components/MountingLifeCycleMethods/LifeCycleA";
import Parent from "./components/Memo/Parent";
import RefExmpl from "./components/Refs/RefExmpl";
import ParentRef from "./components/Refs/ParentRef";
import PortalDemo from "./components/Portals/PortalDemo";
import ErrorDemo from "./components/ErrorHandling/ErrorDemo";
import ErrorComponent from "./components/ErrorHandling/ErrorComponent";
import Counter from "./components/Render Props/Counter";
import ClickCounter from "./components/Render Props/ClickCounter";
import HoverCounter from "./components/Render Props/HoverCounter";
import HttpGetExmpl from "./components/HTTP_in_Class_Component/HttpGetExmpl";
import HttpPostExmpl from "./components/HTTP_in_Class_Component/HttpPostExmpl"; */
/* import Form from "./components/FormWithValidations/Form";
import Parent from "./components/RouteExmpl/Parent"; */
import CounterRedux from "./components/CounterUsingRedux/CounterRedux";
import { Provider } from "react-redux";
import { createStore } from "redux";
import counterReducer from "../src/components/CounterUsingRedux/redux/counter"
/* import { ClickCounter } from "./components/HOC/ClickCounter";
import { HoverCounter } from "./components/HOC/HoverCounter"; */

export const UserNameContext = React.createContext();
export const UserEmailContext = React.createContext();
function App() {
  const store = createStore(counterReducer)
  return (
    <Provider store={store}>
    <div className="App">
      {/*  <TodoList/> */}
      {/* <PersonList /> */}
      {/* <FormControlling /> */}
      {/* <UseStateWithObject /> */}
      {/* <CounterUsingUseEffect /> */}
      {/* <ConditionallyUseEffect /> */}
      {/* <UseEffectOnlyOnce /> */}
      {/* <UseEffectWithCleanUp/> */}
      {/* <FetchDataWithUseEffect /> */}
      {/* <UserNameContext.Provider value="React">
        <UserEmailContext.Provider value="react@facebook.com">
        <Component1  />
        </UserEmailContext.Provider>
      </UserNameContext.Provider> */}

      {/* <UseRefExmpl /> */}
      {/* <UseRefExmpl2 /> */}

      {/* <CustomHookExmpl /> */}
      {/* <CustomHookExmpl2 /> */}
      {/* <CustomHookExmpl3 /> */}

      {/* <UseReducerExmpl /> */}
      {/* <FetchDataUseReducer/> */}

      {/* <ParentComponent /> */}

      {/* <UseMemoExmpl /> */}

      {/* <LifeCycleA /> */}

      {/* <Parent /> */}

      {/* <RefExmpl /> */}
      {/* <ParentRef /> */}

      {/* <PortalDemo /> */}
      {/* <ErrorComponent>
     <ErrorDemo hero="BatMan"/>
     </ErrorComponent>
     <ErrorComponent>
     <ErrorDemo hero="SuperMan"/>
     </ErrorComponent>
     <ErrorComponent>
     <ErrorDemo hero="Joker"/>
     </ErrorComponent> */}

      {/* <ClickCounter />
     <HoverCounter /> */}

      {/* <Counter render={(count,incrementCount) => (
       <ClickCounter count={count} incrementCount={incrementCount} />
     )} />
     <Counter render={(count,incrementCount) => (
       <HoverCounter count={count} incrementCount={incrementCount} />
     )} /> */}
      {/* <HttpGetExmpl /> */}
      {/* <HttpPostExmpl /> */}


      {/* <Form /> */}

      {/* <Parent /> */}

      <CounterRedux />
    </div>
    </Provider>
  );
}

export default App;
