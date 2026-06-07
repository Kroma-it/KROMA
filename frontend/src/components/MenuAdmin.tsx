import { NavLink } from "react-router-dom"
import { User, House, Bell, MessageSquare, ShoppingCart } from "lucide-react"

export default function MenuAdmin(){
    return(
        <div className="h-screen bg-kroma-500 w-[50px] sticky top-0">
            <ul>
                <li>
                    <NavLink to="/">
                        <House />
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/users" >
                        <User />
                        Utillisateurs
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/notifications">
                        <Bell />
                        Notifications
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/feedbacks">
                        <MessageSquare />
                        Messages
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/commande">
                        <ShoppingCart />
                        Commandes
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
