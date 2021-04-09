import * as React from 'react';
import {lazy,Suspense} from 'react';
import { Route, Switch, Redirect, RouteProps } from 'react-router-dom';
const Home=lazy(()=>import('../pages/home'))
const Knowledge=lazy(()=>import('../pages/knowledge'))
const Find=lazy(()=>import('../pages/find'))
export const routers:RouteProps[]=[//这里是单页面的路由
  {
    path:'/home',
    exact:true,
    component:Home
  },
  {
    path:'/knowledge',
    exact:true,
    component:Knowledge
  },
  {
    path:'/find',
    exact:true,
    component:Find
  }
]
const Routers = () => <Suspense fallback={<div>loading...</div>}>
  <Switch>
    {
      routers.map((r,i) => {
        const { path, exact, component } = r
        // return <Route path={path} exact={exact} key={i} render={()=>(component)}/>
        const LazyCom: keyof JSX.IntrinsicElements | any = component
        return <Route key={i} exact={exact} path={path} render={() => ( <LazyCom/>)}/>
      })
    }
  </Switch>
</Suspense>
export default Routers
