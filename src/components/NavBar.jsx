import { NavLink } from "react-router-dom"

import { useAuthentication } from "../hooks/useAuthentication"
import { useAuthValue } from "../context/AuthContext"

import styles from "./NavBar.module.css"
const NavBar = () => {
  const { user } = useAuthValue()
  const { logout } = useAuthentication()
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Inicio
          </NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink
                to="/Login"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Register"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Cadastro
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink
                to="/posts/create"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Novo post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Dashboard"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/historico"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Historico
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink
            to="/About"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </li>
        {user && (
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default NavBar
