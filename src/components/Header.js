import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <h1>React Movies</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={(nav) =>
                                nav.isActive ? "nav-active" : ""
                            }
                        >
                            Accueuil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/coups-de-coeur"
                            className={(nav) =>
                                nav.isActive ? "nav-active" : ""
                            }
                        >
                            Coups de coeur
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
