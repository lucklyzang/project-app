import login from '../views/login';
import record from '../views/record';
import home from '../views/home';


export const routerConfig = [
  {
    path:'/',
    component:home,
    auth:true,
  },{
    path:'/record',
    component:record,
    //auth:true,
  },{
    path:'/login',
    component:login,
  }
];