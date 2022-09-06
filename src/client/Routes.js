import React from "react";
import App from "./App";
import HomePage from "./pages/HomePage";
import UserListPage from "./pages/UserListPage";
import NotFound from "./pages/NotFound";
import AdminListPage from "./pages/AdminListPage";

// export default () => {
//     return (
//         <div>
//             <Route exact path="/" component={Home}></Route>
//             <Route path="/users" component={UserList}></Route>
//             <Route  path="/hi" component={()=> 'HI'}></Route>
//         </div>
//     )
// }


// Need to use react-router-config for SSR

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact:true
            },
            {
                ...AdminListPage,
                path: '/admins'
            },
            {
                ...UserListPage,
                path: '/users'
            },
            {
                ...NotFound
            }
        ]
    }
]