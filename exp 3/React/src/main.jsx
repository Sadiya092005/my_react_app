
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MultipleUseState from './MultipleUseState.jsx'
import UserList from './UserList.jsx'
createRoot(document.getElementById('root')).render(
<StrictMode>
{/* <App /> */}
{<MultipleUseState/> }
{<UserList/>}
</StrictMode>,
)